using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblRecitiferGstatus
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public string? DateTime { get; set; }

    public int? TotalRectifierConfigured { get; set; }

    public int? ActiveRectifierCount { get; set; }

    public int? CurrentShareDeviation { get; set; }

    public int? Ecomode { get; set; }

    public double? ActiveCurrentLimit { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
