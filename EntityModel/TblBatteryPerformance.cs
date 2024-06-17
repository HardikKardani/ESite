using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblBatteryPerformance
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public DateTime? DateTime { get; set; }

    public double? TotalCurrent { get; set; }

    public double? ChargeCycleCounter { get; set; }

    public double? ChargeKah { get; set; }

    public double? DischargeKah { get; set; }

    public double? ChargeKwh { get; set; }

    public double? DischargeKwh { get; set; }

    public double? ChargeTime { get; set; }

    public double? DischargeTime { get; set; }

    public double? Temperature { get; set; }

    public double? BatBakupTime { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
