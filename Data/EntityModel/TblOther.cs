using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblOther
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public long? CompanyId { get; set; }

    public string? AssetName { get; set; }

    public string? Type { get; set; }

    public string? SerialNo { get; set; }

    public string? Description { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
