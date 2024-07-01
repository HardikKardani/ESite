using Data.EntityModel;
using ESite.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.Interface
{
    public interface ISiteService 
	{
        Task<ResponseViewModel> SaveSite(SiteViewModel model);
        Task<ResponseViewModel> SaveSiteAsset(TblTenantSiteAsset model);
        Task<ResponseViewModel> SaveTenant(TblTenant model);

        ResponseViewModel GetCardDataList();
		ResponseViewModel GetSiteList();
        Task<ResponseViewModel> GetList();

        ResponseViewModel GetLiveData();
        ResponseViewModel GetRectifierData();
        ResponseViewModel GetSolarData();
        ResponseViewModel GetGeneratorData();
        ResponseViewModel GetBatteryData();
        ResponseViewModel GetGridData();
        ResponseViewModel GetNotificationsData();
        ResponseViewModel GetSysytemData();
        ResponseViewModel GetAlertList();
        Task<ResponseViewModel> Getbyid(RequestViewModel model);
        Task<ResponseViewModel> Delete(RequestViewModel model);
		Task<bool> CheckDuplicateName(RequestViewModel model);
	}
}
