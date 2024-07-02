using AutoMapper;
using Azure;
using Data.EntityModel;
using Data.EntityModel.Partialclass;
using DocumentFormat.OpenXml.InkML;
using ESite.Data.HelperClass;
using ESite.Data.Interface;
using ESite.Data.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using static ESite.Data.ViewModel.SiteViewModel;
using DocumentFormat.OpenXml.EMMA;

namespace ESite.Data.Implementation
{
    internal class SiteService : ISiteService
    {
        ESiteContext _context;
		private readonly IMapper _mapper;
		public SiteService(ESiteContext context, IMapper mapper)
		{
			_mapper = mapper;
			_context = context;
		}
        public async Task<ResponseViewModel> SaveSite(SiteViewModel model)
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {
                TblSite? tblSites = await _context.TblSites.Where(x => x.SlNo == model.SlNo).FirstOrDefaultAsync();
                if (tblSites == null)
                {
                    tblSites = new TblSite();
                    tblSites.CreatedBy = model.CreatedBy;
                    tblSites.CreatedDate = DataComman.GetDateTimeNow();
                    tblSites.IsDeleted = false;
                    _context.TblSites.Add(tblSites);
                }
               tblSites.SiteId = model.SiteId;
                tblSites.SiteName = model.SiteName;
                tblSites.RegionId = model.RegionId;
                tblSites.State = model.State;
                tblSites.Country = model.Country;
                tblSites.SiteType = model.SiteType;
                tblSites.CoolingType = model.CoolingType;
                tblSites.LandMark = model.LandMark;
                tblSites.NoOfTenant = model.NoOfTenant;
                tblSites.NoOfGenerator = model.NoOfGenerator;
                tblSites.TankCapacity = model.TankCapacity;
                tblSites.Lat = model.Lat;
                tblSites.Long = model.Long;
                tblSites.SiteInChargeName = model.SiteInChargeName;
                tblSites.SiteShortName = "abc";
                tblSites.Address = model.Address;
                tblSites.SimOperator1 = model.SimOperator1;
                tblSites.SimCardNo1 = model.SimCardNo1;
                tblSites.SimOperator2 = model.SimOperator2;
                tblSites.SimCardNo2 = model.SimCardNo2;
                tblSites.ContactNo = model.ContactNo;
                tblSites.Remarks = "1";
                tblSites.HardwareVersion = model.HardwareVersion;
                tblSites.Softwareversion = model.Softwareversion;
                tblSites.InstallationDate = model.InstallationDate;
                tblSites.AssetId = model.AssetId;
                tblSites.IpAddress = model.IpAddress;
                tblSites.ModifiedBy = model.CreatedBy;
                tblSites.ModifiedDate = DataComman.GetDateTimeNow();
                await _context.SaveChangesAsync();
                _Response.Status = true;
                _Response.Response = tblSites.SlNo;
                _Response.Message = MessageType.Saved;
            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public async Task<ResponseViewModel> SaveSiteAsset(TblTenantSiteAsset model)
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {
                TblTenantSiteAsset? tblTenantSiteAsset = await _context.TblTenantSiteAssets.Where(x => x.SlNo == model.SlNo).FirstOrDefaultAsync();
                if (tblTenantSiteAsset == null)
                {
                    tblTenantSiteAsset = new TblTenantSiteAsset();
                    tblTenantSiteAsset.CreatedBy = model.CreatedBy;
                    tblTenantSiteAsset.CreatedDate = DataComman.GetDateTimeNow();
                    tblTenantSiteAsset.IsDeleted = false;
                    _context.TblTenantSiteAssets.Add(tblTenantSiteAsset);
                }

                tblTenantSiteAsset.SiteId = model.SiteId;
                tblTenantSiteAsset.TenantId = model.TenantId;
                tblTenantSiteAsset.IsGridAvailable = model.IsGridAvailable;
                tblTenantSiteAsset.IsGridVisible = model.IsGridVisible;
                tblTenantSiteAsset.GridRemarks = model.GridRemarks;
                tblTenantSiteAsset.IsGeneratorAvailable = model.IsGeneratorAvailable;
                tblTenantSiteAsset.IsGeneratorVisible = model.IsGeneratorVisible;
                tblTenantSiteAsset.GeneratorRemarks = model.GeneratorRemarks;
                tblTenantSiteAsset.IsBatteryAvailable = model.IsBatteryAvailable;
                tblTenantSiteAsset.IsBatteryVisible = model.IsBatteryVisible;
                tblTenantSiteAsset.BatteryRemarks = model.BatteryRemarks;
                tblTenantSiteAsset.IsSolarAvailable = model.IsSolarAvailable;
                tblTenantSiteAsset.IsSolarVisible = model.IsSolarVisible;
                tblTenantSiteAsset.SolarRermarks = model.SolarRermarks;
                tblTenantSiteAsset.IsRectifierAvailable = model.IsRectifierAvailable;
                tblTenantSiteAsset.IsRectifierVisible = model.IsRectifierVisible;
                tblTenantSiteAsset.RectifierRemarks = model.RectifierRemarks;
                tblTenantSiteAsset.IsPortableBatteryAvailable = model.IsPortableBatteryAvailable;
                tblTenantSiteAsset.IsPortableBatteryVisible = model.IsPortableBatteryVisible;
                tblTenantSiteAsset.PortableBatteryRemarks = model.PortableBatteryRemarks;
                tblTenantSiteAsset.ModifiedBy = model.CreatedBy;
                tblTenantSiteAsset.ModifiedDate = DataComman.GetDateTimeNow();
                await _context.SaveChangesAsync();
                _Response.Status = true;
                _Response.Message = MessageType.Saved;
            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public async Task<ResponseViewModel> SaveSiteRMSAsset(TblRmsasset model)
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {
                TblRmsasset? TblRmsasset = await _context.TblRmsassets.Where(x => x.SlNo == model.SlNo).FirstOrDefaultAsync();
                if (TblRmsasset == null)
                {
                    TblRmsasset = new TblRmsasset();
                    TblRmsasset.CreatedBy = model.CreatedBy;
                    TblRmsasset.CreatedDate = DataComman.GetDateTimeNow();
                    TblRmsasset.IsDeleted = false;
                    _context.TblRmsassets.Add(TblRmsasset);
                }

                TblRmsasset.SiteId = model.SiteId;
                TblRmsasset.IsAirconController1Available = model.IsAirconController1Available;
                TblRmsasset.AirconController1Visible = model.AirconController1Visible;
                TblRmsasset.AirconController1Remarks = model.AirconController1Remarks;
                TblRmsasset.IsAirconController2Available = model.IsAirconController2Available;
                TblRmsasset.AirconController2Visible = model.AirconController2Visible;
                TblRmsasset.AirconController2Remarks = model.AirconController2Remarks;
                TblRmsasset.IsDgcontrolllerAvailable = model.IsDgcontrolllerAvailable;
                TblRmsasset.DgcontrolllerVisible = model.DgcontrolllerVisible;
                TblRmsasset.DgcontrolllerRemarks= model.DgcontrolllerRemarks;
                TblRmsasset.IsEnclosureAvailable = model.IsEnclosureAvailable;
                TblRmsasset.EnclosureVisible = model.EnclosureVisible;
                TblRmsasset.EnclosureRemarks= model.EnclosureRemarks;
                TblRmsasset.IsCameraAvailable = model.IsCameraAvailable;
                TblRmsasset.CameraVisible = model.CameraVisible;
                TblRmsasset.CameraType = model.CameraType;
                TblRmsasset.CameraIpaddress = model.CameraIpaddress;
                TblRmsasset.IsCameraAvailable1 = model.IsCameraAvailable1;
                TblRmsasset.CameraVisible1 = model.CameraVisible1;
                TblRmsasset.CameraType1 = model.CameraType1;
                TblRmsasset.CameraIpaddress1 = model.CameraIpaddress1;
                TblRmsasset.IsCameraAvailable2 = model.IsCameraAvailable2;
                TblRmsasset.CameraVisible2 = model.CameraVisible2;
                TblRmsasset.CameraType2 = model.CameraType1;
                TblRmsasset.CameraIpaddress2 = model.CameraIpaddress2;
                TblRmsasset.IsCameraAvailable3 = model.IsCameraAvailable3;
                TblRmsasset.CameraVisible3 = model.CameraVisible3;
                TblRmsasset.CameraType3 = model.CameraType3;
                TblRmsasset.CameraIpaddress3 = model.CameraIpaddress3;
                TblRmsasset.ModifiedBy = model.CreatedBy;
                TblRmsasset.ModifiedDate = DataComman.GetDateTimeNow();
                await _context.SaveChangesAsync();
                _Response.Status = true;
                _Response.Message = MessageType.Saved;
            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public async Task<ResponseViewModel> SaveTenant(TblTenant model)
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {
                TblTenant? tblTenant = await _context.TblTenants.Where(x => x.SlNo == model.SlNo).FirstOrDefaultAsync();
                if (tblTenant == null)
                {
                    tblTenant = new TblTenant();
                    tblTenant.CreatedBy = model.CreatedBy;
                    tblTenant.CreatedDate = DataComman.GetDateTimeNow();
                    tblTenant.IsDeleted = false;
                    _context.TblTenants.Add(tblTenant);
                }
                tblTenant.SiteId = model.SiteId;
                tblTenant.TenantName = model.TenantName;
                tblTenant.ModifiedBy = model.CreatedBy;
                tblTenant.ModifiedDate = DataComman.GetDateTimeNow();
                await _context.SaveChangesAsync();
                _Response.Status = true;
                _Response.Message = MessageType.Saved;
            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public async Task<ResponseViewModel> GetList()
        {
            ResponseViewModel _Response = new();
            try
            {
                List<TblSite> dataMasters = await _context.TblSites.AsNoTracking()
                    
                    .Where(x => x.IsDeleted != true).Include(x => x.Region).Include(x => x.CountryNavigation).Include(x => x.StateNavigation).Include(x => x.CoolingTypeNavigation).Include(x => x.SiteTypeNavigation).OrderByDescending(o => o.SlNo).ToListAsync();
                _Response.Status = true;
                var options = new JsonSerializerOptions
                {
                    ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve
                };
                //_mapper.Map<List<TblSite>, List<SiteViewModel>>(dataMasters);
                _Response.Response = JsonSerializer.Serialize(dataMasters, options);

            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public ResponseViewModel GetSiteList()
		{
			ResponseViewModel _Response = new();
			try
			{
				string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
				sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
				DataTable data = _sqlhelper.GetDataTable(System.Data.CommandType.StoredProcedure, "SP_SiteList");

				_Response.Status = true;
				_Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);

			}
			catch (Exception ex)
			{
				_Response.Message = DataComman.GetString(ex);
			}
			return _Response;
		}
		public ResponseViewModel GetCardDataList()
		{
			ResponseViewModel _Response = new();
			try
			{
				string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
				sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
				DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_SiteDashboard");

				_Response.Status = true;
				_Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);

			}
			catch (Exception ex)
			{
				_Response.Message = DataComman.GetString(ex);
			}
			return _Response;
		}
		public ResponseViewModel GetLiveData()
		{
			ResponseViewModel _Response = new ResponseViewModel();
			_Response.Status = false;
			try
			{

				string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
				sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
				DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_SiteLiveData");

				_Response.Status = true;
				_Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);


			}
			catch (Exception ex)
			{
				_Response.Message = DataComman.GetString(ex);
			}
			return _Response;
		}
        public ResponseViewModel GetGridData()
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {

                string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
                sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
                DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_EnergyGrid");

                _Response.Status = true;
                _Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);


            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public ResponseViewModel GetBatteryData()
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {

                string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
                sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
                DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_EnergyBattery");

                _Response.Status = true;
                _Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);


            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public ResponseViewModel GetGeneratorData()
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {

                string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
                sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
                DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_EnergyGenerator");

                _Response.Status = true;
                _Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);


            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public ResponseViewModel GetSolarData()
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {

                string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
                sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
                DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_EnergySolar");

                _Response.Status = true;
                _Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);


            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public ResponseViewModel GetRectifierData()
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {

                string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
                sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
                DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_EnergyRectifier");

                _Response.Status = true;
                _Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);


            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
		public ResponseViewModel GetNotificationsData()
		{
			ResponseViewModel _Response = new ResponseViewModel();
			_Response.Status = false;
			try
			{

				string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
				sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
				DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_Notifications");

				_Response.Status = true;
				_Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);


			}
			catch (Exception ex)
			{
				_Response.Message = DataComman.GetString(ex);
			}
			return _Response;
		}
        public ResponseViewModel GetSysytemData()
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {

                string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
                sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
                DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_EnergySystemDetails");

                _Response.Status = true;
                _Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);


            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public ResponseViewModel GetAlertList()
        {
            ResponseViewModel _Response = new();
            try
            {
                string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
                sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
                DataTable data = _sqlhelper.GetDataTable(System.Data.CommandType.StoredProcedure, "SP_AlertList");

                _Response.Status = true;
                _Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);

            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public async Task<ResponseViewModel> Getbyid(RequestViewModel model)
        {
            ResponseViewModel _Response = new ResponseViewModel();
            try
            {
                //if (_context.TblSites.Any(w => w.SlNo == model.Id && w.IsDeleted == null))
                //{
                //    _Response.Message = "You cannot edit this record because it is already used with Destination.";
                //}
                //else
                //{
                TblSite? _master = await _context.TblSites.AsNoTracking().Where(x => x.SlNo == model.Id && x.IsDeleted == false).FirstOrDefaultAsync();
                if (_master != null)
                {
                    SiteViewModel Model = _mapper.Map<TblSite, SiteViewModel>(_master);

                    Model.Tenants = await _context.TblTenants.AsNoTracking().Where(x => x.SiteId == Model.SlNo && x.IsDeleted == false).Select(x => new Tenant
                    {
                        Id = x.SlNo,
                        TenantName = x.TenantName
                    }).ToListAsync(); ;

                    Model.TenantSiteAsset = await _context.TblTenantSiteAssets.AsNoTracking().Where(x => x.SiteId == Model.SlNo && x.IsDeleted == false).ToListAsync(); ;

                    Model.Rmsasset = await _context.TblRmsassets.AsNoTracking().Where(x => x.SiteId == Model.SlNo && x.IsDeleted == false).FirstOrDefaultAsync(); ;
                    _Response.Status = true;
                    _Response.Response = Model;
                }
                else
                {
                    _Response.Message = MessageType.Nodata;
                }
                //    }
            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
        public async Task<ResponseViewModel> Delete(RequestViewModel model)
        {
            ResponseViewModel _Response = new ResponseViewModel();
            try
            {
                if (_context.TblSites.Any(w => w.SlNo == model.Id && w.IsDeleted == null))
                {
                    _Response.Message = "You cannot delete this record because it is already used with Destination.";
                }
                else
                {
                    TblSite? _master = await _context.TblSites.Where(x => x.SlNo == model.Id && x.IsDeleted == false).FirstOrDefaultAsync();
                    if (_master != null)
                    {
                        _master.IsDeleted = true;
                        _master.ModifiedBy = model.CreatedBy;
                        _master.ModifiedDate = DataComman.GetDateTimeNow();
                        await _context.SaveChangesAsync();

                        _Response.Status = true;
                        _Response.Message = MessageType.Delete;
                    }
                    else
                    {
                        _Response.Message = MessageType.Nodata;
                    }
                }

            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
		public async Task<bool> CheckDuplicateName(RequestViewModel model)
		{
            return await _context.TblSites.Where(x => x.IsDeleted == false &&( x.SiteName != null && x.SiteName.ToLower() == model.Search.ToLower() ||  x.SiteId != null && x.SiteId.ToLower() == model.Search.ToLower() )&& x.SlNo != model.Id).AnyAsync();
            

		}
        public ResponseViewModel GetSimCard()
        {
            ResponseViewModel _Response = new ResponseViewModel();
            _Response.Status = false;
            try
            {

                string? constr = _context.Database.GetConnectionString() == null ? "" : _context.Database.GetConnectionString();
                sqlhelper _sqlhelper = new sqlhelper(constr == null ? "" : constr);
                DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_SiteSimCardList");

                _Response.Status = true;
                _Response.Response = Newtonsoft.Json.JsonConvert.SerializeObject(data);


            }
            catch (Exception ex)
            {
                _Response.Message = DataComman.GetString(ex);
            }
            return _Response;
        }
    }
}
