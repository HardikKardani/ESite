using Data.EntityModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.ViewModel
{
    public class SiteViewModel
    {
        public SiteViewModel(TblSite source)
        {
        }
        public SiteViewModel()
        {
        }
        public long SlNo { get; set; }

        public string SiteName { get; set; } = null!;

        public string SiteShortName { get; set; } = null!;

        public string SiteId { get; set; } = null!;

        public long RegionId { get; set; }

        public long State { get; set; }

        public long Country { get; set; }

        public string Address { get; set; } = null!;

        public string? LandMark { get; set; }

        public long SiteType { get; set; }

        public byte? NoOfTenant { get; set; }

        public int? NoOfGenerator { get; set; }

        public double? TankCapacity { get; set; }

        public long CoolingType { get; set; }

        public string? Lat { get; set; }

        public string? Long { get; set; }

        public long SimOperator1 { get; set; }

        public string? SimCardNo1 { get; set; }

        public long SimOperator2 { get; set; }

        public string? SimCardNo2 { get; set; }

        public string? SiteInChargeName { get; set; }

        public string? ContactNo { get; set; }

        public string Remarks { get; set; } = null!;

        public long? CompanyId { get; set; }

        public string? HardwareVersion { get; set; }

        public string? Softwareversion { get; set; }

        public DateOnly? InstallationDate { get; set; }

        public long? AssetId { get; set; }

        public string? IpAddress { get; set; }

        public long? CreatedBy { get; set; }

        public DateTime? CreatedDate { get; set; }

        public long? ModifiedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public bool? IsDeleted { get; set; }

     
        public string CountryName { get; set; }
        public string CoolingTypeName { get; set; }
        public string StateName { get; set; }
        public string SiteTypeName { get; set; }
        public string RegionName { get; set; }

        public virtual ICollection<BatteryGstatus> BatteryGstatuses { get; set; } = new List<BatteryGstatus>();

        public virtual TblCompany? Company { get; set; }

        public virtual TblCoolingType CoolingTypeNavigation { get; set; } = null!;

        public virtual TblCountry CountryNavigation { get; set; } = null!;

        public virtual ICollection<InputRunHr> InputRunHrs { get; set; } = new List<InputRunHr>();

        public virtual ICollection<InputStatus> InputStatuses { get; set; } = new List<InputStatus>();

        public virtual ICollection<LiveDatum> LiveData { get; set; } = new List<LiveDatum>();

        public virtual TblRegion Region { get; set; } = null!;

        public virtual TblSimOperator SimOperator1Navigation { get; set; } = null!;

        public virtual TblSiteType SiteTypeNavigation { get; set; } = null!;

        public virtual ICollection<SolarGstau> SolarGstaus { get; set; } = new List<SolarGstau>();

        public virtual ICollection<SolarIndvStatus> SolarIndvStatuses { get; set; } = new List<SolarIndvStatus>();

        public virtual TblState StateNavigation { get; set; } = null!;

        public virtual ICollection<TblBattery> TblBatteries { get; set; } = new List<TblBattery>();

        public virtual ICollection<TblBattery1> TblBattery1s { get; set; } = new List<TblBattery1>();

        public virtual ICollection<TblBatteryPerformance> TblBatteryPerformances { get; set; } = new List<TblBatteryPerformance>();

        public virtual ICollection<TblCamera> TblCameras { get; set; } = new List<TblCamera>();

        public virtual ICollection<TblDetail> TblDetails { get; set; } = new List<TblDetail>();

        public virtual ICollection<TblDgprimary> TblDgprimaries { get; set; } = new List<TblDgprimary>();

        public virtual ICollection<TblDg> TblDgs { get; set; } = new List<TblDg>();

        public virtual ICollection<TblEnergyLogSolar> TblEnergyLogSolars { get; set; } = new List<TblEnergyLogSolar>();

        public virtual ICollection<TblEnergyLogsAc> TblEnergyLogsAcs { get; set; } = new List<TblEnergyLogsAc>();

        public virtual ICollection<TblEnergyLogsBattery> TblEnergyLogsBatteries { get; set; } = new List<TblEnergyLogsBattery>();

        public virtual ICollection<TblEnergyLogsLoad> TblEnergyLogsLoads { get; set; } = new List<TblEnergyLogsLoad>();

        public virtual ICollection<TblGrid> TblGrids { get; set; } = new List<TblGrid>();

        public virtual ICollection<TblLoad> TblLoads { get; set; } = new List<TblLoad>();

        public virtual ICollection<TblOther> TblOthers { get; set; } = new List<TblOther>();

        public virtual ICollection<TblPerformance> TblPerformances { get; set; } = new List<TblPerformance>();

        public virtual ICollection<TblRecitiferGstatus> TblRecitiferGstatuses { get; set; } = new List<TblRecitiferGstatus>();

        public virtual ICollection<TblRecitiferIndividualStatus> TblRecitiferIndividualStatuses { get; set; } = new List<TblRecitiferIndividualStatus>();

        public virtual ICollection<TblRecitifier1> TblRecitifier1s { get; set; } = new List<TblRecitifier1>();

        public virtual ICollection<TblRecitifier> TblRecitifiers { get; set; } = new List<TblRecitifier>();

        public virtual ICollection<TblRunHrsLogsAc> TblRunHrsLogsAcs { get; set; } = new List<TblRunHrsLogsAc>();

        public virtual ICollection<TblRunHrsLogsBattery> TblRunHrsLogsBatteries { get; set; } = new List<TblRunHrsLogsBattery>();

        public virtual ICollection<TblRunHrsLogsSolar> TblRunHrsLogsSolars { get; set; } = new List<TblRunHrsLogsSolar>();

        public virtual ICollection<TblServiceHistory> TblServiceHistories { get; set; } = new List<TblServiceHistory>();

        public virtual ICollection<TblSolar1> TblSolar1s { get; set; } = new List<TblSolar1>();

        public virtual ICollection<TblSolar> TblSolars { get; set; } = new List<TblSolar>();
        public class Tenant
        {
            public long Id { get; set; }
            public string TenantName { get; set; }
        }
        public List<Tenant> Tenants { get; set; }
        public List<TblTenantSiteAsset> TenantSiteAsset { get; set; }
        public TblRmsasset Rmsasset { get; set; }
    }
}

