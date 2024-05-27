using ESite.Data.HelperClass;
using ESite.Data.UOW;
using ESite.Data.ViewModel;
using ESite.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ESite.Controllers
{
    [Authorize]

    public class HomeController : Controller
	{
		private IUnitOfWork _uow;
		private IWebHostEnvironment _WebEnvironment;
		public readonly IConfiguration Configuration;
		private readonly ILogger<HomeController> _logger;

		public HomeController(IUnitOfWork unitOfWork, IWebHostEnvironment _webenvironment, IConfiguration configuration,ILogger<HomeController> logger)
		{
			_uow = unitOfWork;
			_WebEnvironment = _webenvironment;
			Configuration = configuration;
			_logger = logger;
		}

		public IActionResult Index()
		{
			return View();
		}
		[HttpGet]
		public IActionResult GetCardDataList()
		{
			ResponseViewModel responseViewModel = new ResponseViewModel();
			try
			{
				responseViewModel = _uow.dashboardService.GetCardDataList();
			}
			catch (Exception ex)
			{
				responseViewModel.Message = DataComman.GetString(ex);
			}
			return Json(responseViewModel);
		}

		public IActionResult Privacy()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}
