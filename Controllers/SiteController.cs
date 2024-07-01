﻿using ESite.Data.ViewModel;
using ESite.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using ESite.Data.UOW;
using System.Configuration;
using ESite.Data.HelperClass;
using DocumentFormat.OpenXml.Spreadsheet;
using Data.EntityModel;
using Newtonsoft.Json;

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
        public IActionResult GridCopy()
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
        public IActionResult Report()
        {
            return View();
        }
		public IActionResult SiteMaster()
		{
			return View();
		}
        public IActionResult PortableBattery()
        {
            return View();
        }
        public IActionResult SiteMasterList()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> SaveSite(SiteViewModel _Model)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            int userid = 1;
            try
            {
                if (_Model == null)
                {
                    _Model = new SiteViewModel();
                }

                _Model.CreatedBy = (long)userid;
                
                responseViewModel = await _uow.siteService.SaveSite(_Model);
                if(responseViewModel.Response != null)
                {
                    long SlNo = (long)responseViewModel.Response;
                    if (_Model.Tenants != null && _Model.Tenants.Count > 0)
                    {
                        foreach (var tenant in _Model.Tenants)
                            {
                            TblTenant Tenants = new TblTenant();
                            Tenants.CreatedBy = 1;
                            if (tenant.Id >0 )
                            {
                                Tenants.SlNo = tenant.Id;
                            }
                            Tenants.TenantName = tenant.TenantName;
                            Tenants.SiteId = SlNo;
                            responseViewModel = await _uow.siteService.SaveTenant(Tenants);
                            
                        }
                    }
                    responseViewModel.Response = SlNo;
                }
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        [HttpPost]
        public async Task<IActionResult> SaveSiteAsset(List<TblTenantSiteAsset> model)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            int userid = 1;
            try
            {

                if (model == null)
                {
                    model = new List<TblTenantSiteAsset>();
                }
                foreach (var _Model in model)
                {

                    _Model.CreatedBy = (long)userid;

                    responseViewModel = await _uow.siteService.SaveSiteAsset(_Model);
                }

            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = await _uow.siteService.GetList();
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        [HttpGet]
		public IActionResult GetSiteList()
		{
			ResponseViewModel responseViewModel = new ResponseViewModel();
			try
			{
				responseViewModel = _uow.siteService.GetSiteList();
			}
			catch (Exception ex)
			{
				responseViewModel.Message = DataComman.GetString(ex);
			}
			return Json(responseViewModel);
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
        [HttpGet]
        public IActionResult GetAlertList()
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                responseViewModel = _uow.siteService.GetAlertList();
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        [HttpGet]
        public async Task<IActionResult> Getdatabyid(long id)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            try
            {
                RequestViewModel requestModel = new RequestViewModel();
                requestModel.Id = id;
                responseViewModel = await _uow.siteService.Getbyid(requestModel);
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
        
        [HttpGet]
        public async Task<IActionResult> Deletedatabyid(long id)
        {
            ResponseViewModel responseViewModel = new ResponseViewModel();
            int userid = 1;
            try
            {
                RequestViewModel requestModel = new RequestViewModel();
                requestModel.Id = id;
                requestModel.CreatedBy = userid;
                responseViewModel = await _uow.siteService.Delete(requestModel);
            }
            catch (Exception ex)
            {
                responseViewModel.Message = DataComman.GetString(ex);
            }
            return Json(responseViewModel);
        }
		[HttpGet]
		public async Task<IActionResult> CheckName(string name, int id)
		{
			ResponseViewModel responseViewModel = new ResponseViewModel();
			try
			{
				RequestViewModel requestModel = new RequestViewModel();
				requestModel.Id = id;
				requestModel.Search = name;
				bool isDuplicate = await _uow.siteService.CheckDuplicateName(requestModel);
				responseViewModel.Status = true;
				responseViewModel.Response = isDuplicate;
			}
			catch (Exception ex)
			{
				responseViewModel.Message = DataComman.GetString(ex);
			}
			return Json(responseViewModel);
		}
	}
}
