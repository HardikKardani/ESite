using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblTenant
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public string? TenantName { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual TblSite? Site { get; set; }
}
