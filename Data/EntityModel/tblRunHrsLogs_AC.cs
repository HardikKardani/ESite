using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class tblRunHrsLogs_AC
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public DateOnly? Date { get; set; }

    public double? EB_RunHrs { get; set; }

    public double? DG_RunHrs { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
