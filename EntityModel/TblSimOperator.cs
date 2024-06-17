using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblSimOperator
{
    public long SlNo { get; set; }

    public string Operator { get; set; } = null!;

    public string? Description { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual ICollection<TblSite> TblSites { get; set; } = new List<TblSite>();
}
