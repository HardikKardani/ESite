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
    internal class DashboardService : IDashboardService
	{
        ESiteContext _context;
		private readonly IMapper _mapper;
		public DashboardService(ESiteContext context, IMapper mapper)
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
				DataSet data = _sqlhelper.GetDataSet(System.Data.CommandType.StoredProcedure, "SP_MainDashboard");

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
