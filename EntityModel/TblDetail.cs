using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblDetail
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public long? CompanyId { get; set; }

    public string AlertDescription { get; set; } = null!;

    public string AlertSevervity { get; set; } = null!;

    public DateTime? AlertDatetime { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
