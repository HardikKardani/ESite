using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblBattery
{
    public long SlNo { get; set; }

    public long RefSiteId { get; set; }

    public long? CompanyId { get; set; }

    public int NoOfBatteryPack { get; set; }

    public string Type { get; set; } = null!;

    public string Make { get; set; } = null!;

    public string Model { get; set; } = null!;

    public string SerialNo { get; set; } = null!;

    public long Manufacturer { get; set; }

    public double Capacity { get; set; }

    public int NoofCells { get; set; }

    public DateTime? LastServicedOn { get; set; }

    public DateTime? NextServiceOn { get; set; }

    public DateTime? WarrantyStartDate { get; set; }

    public DateTime? WarrantyEndDate { get; set; }

    public string? Remarks { get; set; }

    public bool? Notify { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual TblManufacturer ManufacturerNavigation { get; set; } = null!;

    public virtual TblSite RefSite { get; set; } = null!;
}
