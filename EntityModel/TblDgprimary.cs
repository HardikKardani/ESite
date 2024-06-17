using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblDgprimary
{
    public long SlNo { get; set; }

    public long? RefSiteId { get; set; }

    public long? CompanyId { get; set; }

    public int? NoOfDg { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? RefSite { get; set; }

    public virtual ICollection<TblDgdetail> TblDgdetails { get; set; } = new List<TblDgdetail>();
}
