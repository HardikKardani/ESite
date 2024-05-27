using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ESite.Data.Implementation;
using ESite.Data.Interface;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data.EntityModel.Partialclass;

namespace ESite.Data.UOW
{
    public class UnitOfWork : IUnitOfWork
    {
        private ESiteContext context;
        private IMapper mapper;
        public UnitOfWork(ESiteContext _context, IMapper _mapper, IConfiguration configuration)
        {
            context = _context;
            mapper = _mapper;
            loginService = new LoginService(context, mapper);
			companyService = new CompanyService(context, mapper);
			dashboardService = new DashboardService(context, mapper);
            siteService = new SiteService(context, mapper);
			assetService = new AssetService(context, mapper);


		}
        public ILoginService loginService
        {
            get; private set;
        }
		public ICompanyService companyService
		{
			get; private set;
		}
		public IDashboardService dashboardService
		{
			get; private set;
		}
        public ISiteService siteService
        {
            get; private set;
        }
		public IAssetService assetService
		{
			get; private set;
		}

		public void Dispose()
        {
            context.Dispose();
        }
    }

}
