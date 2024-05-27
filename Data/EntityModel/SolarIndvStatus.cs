using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class SolarIndvStatus
{
    public long SolarGstaus { get; set; }

    public long? SiteId { get; set; }

    public DateTime? DateTime { get; set; }

    public string? SerialNo { get; set; }

    public double? InputVoltage { get; set; }

    public double? InputCurrent { get; set; }

    public double? InputPower { get; set; }

    public double? SolarKwh { get; set; }

    public double? SolarRunTime { get; set; }

    public double? OutputVoltage { get; set; }

    public double? OutputCurrent { get; set; }

    public double? TempRise { get; set; }

    public string? Dcstate { get; set; }

    public string? Status { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite? Site { get; set; }
}
