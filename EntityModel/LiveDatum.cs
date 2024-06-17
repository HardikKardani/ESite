using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class LiveDatum
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public DateTime? DateTime { get; set; }

    public string? SiteRunningOn { get; set; }

    public double? Load { get; set; }

    public double? Rvoltage { get; set; }

    public double? Yvoltage { get; set; }

    public double? Bvoltage { get; set; }

    public double? Rcurrent { get; set; }

    public double? Ycurrent { get; set; }

    public double? Bcurrent { get; set; }

    public double? Frequency { get; set; }

    public string? BatteryStatus { get; set; }

    public double? BatTotalCurrent { get; set; }

    public double? BatVoltage { get; set; }

    public double? BatCurrent { get; set; }

    public double? BatRemCapacity { get; set; }

    public int? RectifierQty { get; set; }

    public double? RecTotalPower { get; set; }

    public double? RecInputVoltage { get; set; }

    public double? RecInputCurrent { get; set; }

    public double? RecOutputVoltage { get; set; }

    public double? RecOutputCurrent { get; set; }

    public double? RecTemp { get; set; }

    public string? RecStatus { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
