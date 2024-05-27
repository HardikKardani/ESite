using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblBattery1
{
    public long SlNo { get; set; }

    public long SiteId { get; set; }

    public long? CompanyId { get; set; }

    public DateTime? Date { get; set; }

    public int? BatteryNo { get; set; }

    public double? Cell1 { get; set; }

    public double? Cell2 { get; set; }

    public double? Cell3 { get; set; }

    public double? Cell4 { get; set; }

    public double? Cell5 { get; set; }

    public double? Cell6 { get; set; }

    public double? Cell7 { get; set; }

    public double? Cell8 { get; set; }

    public double? Cell9 { get; set; }

    public double? Cell10 { get; set; }

    public double? Cell11 { get; set; }

    public double? Cell12 { get; set; }

    public double? CellMax { get; set; }

    public double? CellMin { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite Site { get; set; } = null!;
}
