using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblLoad
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public DateTime? Date { get; set; }

    public double? DcoutPower { get; set; }

    public double? Load1Current { get; set; }

    public double? Load1Energy { get; set; }

    public double? Load1Voltage { get; set; }

    public double? TotalLoadCurrent { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
