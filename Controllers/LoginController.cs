using ESite.Data.ViewModel;
using ESite.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using ESite.Data.UOW;
using System.Configuration;
using ESite.Data.HelperClass;

namespace Esite.Controllers
{
    public class LoginController : Controller
    {
        private IUnitOfWork _uow;
        private IWebHostEnvironment _WebEnvironment;
        public readonly IConfiguration Configuration;
        private IHttpContextAccessor _httpContextAccessor;
        public LoginController(IUnitOfWork unitOfWork, IWebHostEnvironment _webenvironment, IConfiguration configuration,  IHttpContextAccessor httpContextAccessor)
        {

            _uow = unitOfWork;
            _WebEnvironment = _webenvironment;
            Configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }
        public IActionResult LoginIndex()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> UserLogin(LoginViewModel model)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = await _uow.loginService.GetLogin(model);
                if (responseViewModel.Status)
                {
                    UserViewModel? _um = responseViewModel.Response as UserViewModel;
                    if ((_um.IsPasswordChangeRequired ?? false) == true)
                    {
                        responseViewModel.Response = "/User/ChangePassword";
                    }
                    else
                    {
                        responseViewModel.Response = "/Home/Index";
                    }
                    if (_um != null)
                    {
                        var claims = new List<Claim>()
                        {
                            new Claim("UserId",_um.SlNo.ToString()),
                            new Claim("RoleId",(_um.RoleId??0).ToString()),
                            new Claim("EmpName",(_um.EmpName??"").ToString()),
                            new Claim("IsPasswordChangeRequired",(_um.IsPasswordChangeRequired??false).ToString()),
                        };
                        var identity = new ClaimsIdentity(claims, _um.SlNo.ToString());
                        await HttpContext.SignInAsync("ESiteAuth", new ClaimsPrincipal(identity));
                    }

                }
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync("ESiteAuth");
            return RedirectToAction(nameof(LoginController.LoginIndex));
        }

        public async Task<IActionResult> Unauthorized()
        {
            return View();
        }
        [Route("/LinkExpired")]
        public async Task<IActionResult> LinkExpired()
        {
            return View();
        }
        //[Route("/ResetPassword/{id?}")]
        //public async Task<IActionResult> ResetPassword(string id = "")
        //{
        //    try
        //    {
        //        if (!string.IsNullOrEmpty(id))
        //        {
        //            string slNo = DataComman.DataUnprotect(id.ToString());
        //            RequestViewModel requestViewModel = new RequestViewModel();
        //            requestViewModel.Id = Convert.ToInt64(slNo);
        //            ResponseViewModel res = await _uow.userService.GetResetPasswordbyid(requestViewModel);
        //            if (res.Status)
        //            {
        //                UserResetPasswordViewModel userResetPassword = res.Response as UserResetPasswordViewModel;
        //                DateTime createdate = (DateTime)userResetPassword.CreatedDate.Value.AddMinutes(10);
        //                if (createdate >= DateTime.UtcNow && userResetPassword.IsResetPassword == false)
        //                {
        //                    ViewBag.id = userResetPassword.SlNo;
        //                    ViewBag.userId = userResetPassword.UserId;
        //                    return View();
        //                }
        //                else
        //                {
        //                    return Redirect("/LinkExpired");
        //                }
        //            }
        //            else
        //            {
        //                return Redirect("/Login/Unauthorized");
        //            }
        //        }
        //        else
        //        {
        //            return Redirect("/Login/Unauthorized");
        //        }
        //    }
        //    catch (Exception)
        //    {
        //        return Redirect("/Login/Unauthorized");
        //    }
        //}

        //[Route("/RequestResetPassword")]
        //public async Task<IActionResult> RequestResetPassword()
        //{
        //    return View();
        //}

        //[HttpPost]
        //public async Task<IActionResult> SaveResetPassword(UserChangePasswordViewModel _Model)
        //{
        //    ResponseViewModel responseViewModel = new ResponseViewModel();
        //    try
        //    {
        //        responseViewModel = await _uow.userService.ResetPassword(_Model);
        //    }
        //    catch (Exception ex)
        //    {
        //        responseViewModel.Message = DataComman.GetString(ex);
        //    }
        //    return Json(responseViewModel);
        //}
        //[HttpPost]
        //public async Task<IActionResult> RequestEamilResetPassword(RequestViewModel model)
        //{
        //    ResponseViewModel responseViewModel = new ResponseViewModel();
        //    try
        //    {
        //        responseViewModel = await _uow.userService.RequestResetPassword(model);
        //        if (responseViewModel.Status)
        //        {
        //            UserResetPasswordViewModel userResetPassword = responseViewModel.Response as UserResetPasswordViewModel;
        //            string resetId = DataComman.DataProtect(userResetPassword.SlNo.ToString());
        //            string Subject = "DPMS Reset Password";
        //            string baseUrl = DataComman.GetBaseurl(_httpContextAccessor);
        //            string resetLink = baseUrl + "/ResetPassword/" + resetId;
        //            string mailTemplateFile = Path.Combine(this._WebEnvironment.WebRootPath, "MailTemplates", "ResetPasswordTemplate.html");
        //            var mailBody = System.IO.File.ReadAllText(mailTemplateFile);
        //            mailBody = mailBody.Replace("{resetpasswordurl}", resetLink)
        //                            .Replace("{username}", userResetPassword.UserName)
        //                            .Replace("{empname}", userResetPassword.EmpName);
        //            string ccmail = Configuration.GetValue<string>("PasswordResetMailSettings:CCEmail");
        //            ResponseEmailsend _ResponseEmailsend = _Messages.SendEmail(model.Search, Subject, mailBody, "", ccmail, "", "KayPeePMS Reset Password");
        //            if (_ResponseEmailsend.Status == false)
        //            {

        //            }

        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        responseViewModel.Message = DataComman.GetString(ex);
        //    }
        //    return Json(responseViewModel);
        //}
    }
}
