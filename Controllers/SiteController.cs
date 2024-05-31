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
    public class SiteController : Controller
    {
        private IUnitOfWork _uow;
        private IWebHostEnvironment _WebEnvironment;
        public readonly IConfiguration Configuration;
        private IHttpContextAccessor _httpContextAccessor;
        public SiteController(IUnitOfWork unitOfWork, IWebHostEnvironment _webenvironment, IConfiguration configuration,  IHttpContextAccessor httpContextAccessor)
        {

            _uow = unitOfWork;
            _WebEnvironment = _webenvironment;
            Configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }
        public IActionResult Dashboard()
        {
            return View();
        }
		public IActionResult Grid()
		{
			return View();
		}
		public IActionResult Battery()
		{
			return View();
		}
		public IActionResult Generator()
		{
			return View();
		}
		public IActionResult Rectifier()
		{
			return View();
		}
		public IActionResult Solar()
		{
			return View();
		}
        public IActionResult Notifications()
        {
            return View();
        }
		public IActionResult Map()
		{
			return View();
		}
		public IActionResult LiveData()
		{
			return View();
		}
        public IActionResult SystemDetails()
        {
            return View();
        }
        [HttpGet]
        public IActionResult GetCardDataList()
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = _uow.siteService.GetCardDataList();
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
		[HttpGet]
		public IActionResult GetLiveData()
		{
			ResponseViewModel responseViewModel = new ResponseViewModel();
			try
			{
				responseViewModel =   _uow.siteService.GetLiveData();
			}
			catch (Exception ex)
			{
				responseViewModel.Message = DataComman.GetString(ex);
			}
			return Json(responseViewModel);
		}
        public IActionResult GetGridData(Int32 SiteID)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = _uow.siteService.GetGridData();
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        public IActionResult GetBatteryData(Int32 SiteID)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = _uow.siteService.GetBatteryData();
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        public IActionResult GetGeneratorData(Int32 SiteID)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = _uow.siteService.GetGeneratorData();
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        public IActionResult GetSolarData(Int32 SiteID)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = _uow.siteService.GetSolarData();
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        public IActionResult GetRectifierData(Int32 SiteID)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = _uow.siteService.GetRectifierData();
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
		public IActionResult GetNotificationsData(Int32 SiteID)
		{
			ResponseViewModel responseViewModel = new ResponseViewModel();
			try
			{
				responseViewModel = _uow.siteService.GetNotificationsData();
			}
			catch (Exception ex)
			{
				responseViewModel.Message = DataComman.GetString(ex);
			}
			return Json(responseViewModel);
		}
        public IActionResult GetSysytemData(Int32 SiteID)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = _uow.siteService.GetSysytemData();
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        

    }
}
