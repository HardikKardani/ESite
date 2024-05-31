using ESite.Data.Implementation;
using ESite.Data.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.UOW
{
	public interface IUnitOfWork : IDisposable
	{
		ILoginService loginService { get; }

		ICompanyService companyService { get; }

		IDashboardService dashboardService { get; }
        ISiteService siteService { get; }
		IAssetService assetService { get; }


	}
}
