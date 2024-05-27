﻿using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblGrid
{
    public long SlNo { get; set; }

    public long SiteId { get; set; }

    public long? CompanyId { get; set; }

    public DateTime? DateTime { get; set; }

    public double? Rvolt { get; set; }

    public double? Yvolt { get; set; }

    public double? Bvolt { get; set; }

    public double? Rcurrent { get; set; }

    public double? Ycurrent { get; set; }

    public double? Bcurrent { get; set; }

    public double? Frequency { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite Site { get; set; } = null!;
}
