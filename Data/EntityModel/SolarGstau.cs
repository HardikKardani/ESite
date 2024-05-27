using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class SolarGstau
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public DateTime? DateTime { get; set; }

    public int? ActiveChargerCount { get; set; }

    public int? ActiveHlvcount { get; set; }

    public int? SolarAm { get; set; }

    public double? TotalSolarKwh { get; set; }

    public double? TotalSolarHr { get; set; }

    public double? SolarStatus { get; set; }

    public double? InstalledCharger { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
