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
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.Implementation
{
    internal class CompanyService : ICompanyService
	{
        ESiteContext _context;
		private readonly IMapper _mapper;
		public CompanyService(ESiteContext context, IMapper mapper)
		{
			_mapper = mapper;
			_context = context;
		}
		public async Task<ResponseViewModel> GetList()
		{
			ResponseViewModel _Response = new ResponseViewModel();
			_Response.Status = false;
			try
			{
				List<TblCompany> dataMasters = await _context.TblCompanies.AsNoTracking().Where(x => x.IsDeleted == false).OrderByDescending(o => o.Sino).ToListAsync();
				_Response.Status = true;
				_Response.Response = _mapper.Map<List<TblCompany>, List<CompanyViewModel>>(dataMasters);

			}
			catch (Exception ex)
			{
				_Response.Message = DataComman.GetString(ex);
			}
			return _Response;
		}

	}
}
