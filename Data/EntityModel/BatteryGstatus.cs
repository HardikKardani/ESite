using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class BatteryGstatus
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public DateTime? DateTime { get; set; }

    public double? Bat1Voltage { get; set; }

    public double? Bat1Current { get; set; }

    public double? Bat1Soc { get; set; }

    public double? Bat2Voltage { get; set; }

    public double? Bat2Current { get; set; }

    public double? Bat2Soc { get; set; }

    public double? Bat3Voltage { get; set; }

    public double? Bat3Current { get; set; }

    public double? Bat3Soc { get; set; }

    public double? Bat4Voltage { get; set; }

    public double? Bat4Current { get; set; }

    public double? Bat4Soc { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
