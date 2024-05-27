using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblCompany
{
    public long Sino { get; set; }

    public string CompanyName { get; set; } = null!;

    public long? Mobile { get; set; }

    public string? Email { get; set; }

    public string? Address { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual ICollection<BatteryGstatus> BatteryGstatuses { get; set; } = new List<BatteryGstatus>();

    public virtual ICollection<InputRunHr> InputRunHrs { get; set; } = new List<InputRunHr>();

    public virtual ICollection<InputStatus> InputStatuses { get; set; } = new List<InputStatus>();

    public virtual ICollection<LiveDatum> LiveData { get; set; } = new List<LiveDatum>();

    public virtual ICollection<SolarGstau> SolarGstaus { get; set; } = new List<SolarGstau>();

    public virtual ICollection<SolarIndvStatus> SolarIndvStatuses { get; set; } = new List<SolarIndvStatus>();

    public virtual ICollection<TblAssetType> TblAssetTypes { get; set; } = new List<TblAssetType>();

    public virtual ICollection<TblBattery> TblBatteries { get; set; } = new List<TblBattery>();

    public virtual ICollection<TblBattery1> TblBattery1s { get; set; } = new List<TblBattery1>();

    public virtual ICollection<TblBatteryPerformance> TblBatteryPerformances { get; set; } = new List<TblBatteryPerformance>();

    public virtual ICollection<TblCamera> TblCameras { get; set; } = new List<TblCamera>();

    public virtual ICollection<TblCoolingType> TblCoolingTypes { get; set; } = new List<TblCoolingType>();

    public virtual ICollection<TblCountry> TblCountries { get; set; } = new List<TblCountry>();

    public virtual ICollection<TblDetail> TblDetails { get; set; } = new List<TblDetail>();

    public virtual ICollection<TblDgdetail> TblDgdetails { get; set; } = new List<TblDgdetail>();

    public virtual ICollection<TblDgprimary> TblDgprimaries { get; set; } = new List<TblDgprimary>();

    public virtual ICollection<TblDg> TblDgs { get; set; } = new List<TblDg>();

    public virtual ICollection<TblEnergyLogSolar> TblEnergyLogSolars { get; set; } = new List<TblEnergyLogSolar>();

    public virtual ICollection<TblEnergyLogsAc> TblEnergyLogsAcs { get; set; } = new List<TblEnergyLogsAc>();

    public virtual ICollection<TblEnergyLogsBattery> TblEnergyLogsBatteries { get; set; } = new List<TblEnergyLogsBattery>();

    public virtual ICollection<TblEnergyLogsLoad> TblEnergyLogsLoads { get; set; } = new List<TblEnergyLogsLoad>();

    public virtual ICollection<TblGrid> TblGrids { get; set; } = new List<TblGrid>();

    public virtual ICollection<TblLoad> TblLoads { get; set; } = new List<TblLoad>();

    public virtual ICollection<TblManufacturer> TblManufacturers { get; set; } = new List<TblManufacturer>();

    public virtual ICollection<TblOther> TblOthers { get; set; } = new List<TblOther>();

    public virtual ICollection<TblPerformance> TblPerformances { get; set; } = new List<TblPerformance>();

    public virtual ICollection<TblRecitiferGstatus> TblRecitiferGstatuses { get; set; } = new List<TblRecitiferGstatus>();

    public virtual ICollection<TblRecitiferIndividualStatus> TblRecitiferIndividualStatuses { get; set; } = new List<TblRecitiferIndividualStatus>();

    public virtual ICollection<TblRecitifier1> TblRecitifier1s { get; set; } = new List<TblRecitifier1>();

    public virtual ICollection<TblRecitifier> TblRecitifiers { get; set; } = new List<TblRecitifier>();

    public virtual ICollection<TblRegion> TblRegions { get; set; } = new List<TblRegion>();

    public virtual ICollection<TblRunHrsLogsAc> TblRunHrsLogsAcs { get; set; } = new List<TblRunHrsLogsAc>();

    public virtual ICollection<TblRunHrsLogsBattery> TblRunHrsLogsBatteries { get; set; } = new List<TblRunHrsLogsBattery>();

    public virtual ICollection<TblRunHrsLogsSolar> TblRunHrsLogsSolars { get; set; } = new List<TblRunHrsLogsSolar>();

    public virtual ICollection<TblServiceHistory> TblServiceHistories { get; set; } = new List<TblServiceHistory>();

    public virtual ICollection<TblSimOperator> TblSimOperators { get; set; } = new List<TblSimOperator>();

    public virtual ICollection<TblSiteType> TblSiteTypes { get; set; } = new List<TblSiteType>();

    public virtual ICollection<TblSite> TblSites { get; set; } = new List<TblSite>();

    public virtual ICollection<TblSolar1> TblSolar1s { get; set; } = new List<TblSolar1>();

    public virtual ICollection<TblSolar> TblSolars { get; set; } = new List<TblSolar>();

    public virtual ICollection<TblState> TblStates { get; set; } = new List<TblState>();

    public virtual ICollection<TblUser> TblUsers { get; set; } = new List<TblUser>();
}
