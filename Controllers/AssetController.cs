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
    public class AssetController : Controller
    {
        private IUnitOfWork _uow;
        private IWebHostEnvironment _WebEnvironment;
        public readonly IConfiguration Configuration;
        private IHttpContextAccessor _httpContextAccessor;
        public AssetController(IUnitOfWork unitOfWork, IWebHostEnvironment _webenvironment, IConfiguration configuration,  IHttpContextAccessor httpContextAccessor)
        {

            _uow = unitOfWork;
            _WebEnvironment = _webenvironment;
            Configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }
        public IActionResult Index()
        {
            return View();
        }
		
		[HttpPost]
		public async Task<IActionResult> SaveRecitifier(AssetRecitifierViewModel model)
		{
			ResponseViewModel responseViewModel = new ResponseViewModel();
			try
			{
			
				responseViewModel = await _uow.assetService.SaveRecitifier(model);
			}
			catch (Exception ex)
			{
				responseViewModel.Message = DataComman.GetString(ex);
			}
			return Json(responseViewModel);
		}


	}
}
