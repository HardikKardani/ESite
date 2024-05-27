using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblRecitifier1
{
    public long SlNo { get; set; }

    public long SiteId { get; set; }

    public long? CompanyId { get; set; }

    public DateTime? DateTime { get; set; }

    public string? SerialNo { get; set; }

    public double? Ipvoltage { get; set; }

    public double? Ipcurrent { get; set; }

    public double? Ipfrequency { get; set; }

    public double? Opvoltage { get; set; }

    public double? Opcurrent { get; set; }

    public double? TempRise { get; set; }

    public string? Dcstate { get; set; }

    public string? Status { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite Site { get; set; } = null!;
}
