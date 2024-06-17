using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblDg
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public long? CompanyId { get; set; }

    public DateTime? Date { get; set; }

    public double? Rvolt { get; set; }

    public double? Yvolt { get; set; }

    public double? Bvolt { get; set; }

    public double? Rcurrent { get; set; }

    public double? Ycurrent { get; set; }

    public double? Bcurrent { get; set; }

    public double? Frequency { get; set; }

    public double? FuelLevel { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
