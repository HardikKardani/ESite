using AutoMapper;
using Azure;
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
		
	}
}
