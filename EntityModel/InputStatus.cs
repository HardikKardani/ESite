using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class InputStatus
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public DateTime? DateTime { get; set; }

    public double? RphaseVolt { get; set; }

    public double? YphaseVolt { get; set; }

    public double? BphaseVolt { get; set; }

    public double? RphaseCurrent { get; set; }

    public double? YphaseCurrent { get; set; }

    public double? BphaseCurrent { get; set; }

    public double? RphaseEnergy { get; set; }

    public double? YphaseEnergy { get; set; }

    public double? BphaseEnergy { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
