using AutoMapper;
using Azure;
using Data.EntityModel;
using Data.EntityModel.Partialclass;
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
using System.Threading.Tasks;

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
                    
                    .Where(x => x.IsDeleted == false).OrderByDescending(o => o.SlNo).ToListAsync();
                _Response.Status = true;
                _Response.Response = _mapper.Map<List<TblSite>, List<SiteViewModel>>(dataMasters);

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
        
    }
}
