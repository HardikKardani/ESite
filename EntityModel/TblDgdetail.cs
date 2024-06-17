using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblDgdetail
{
    public long SlNo { get; set; }

    public long? CompanyId { get; set; }

    public long Dgid { get; set; }

    public string? Dgtype { get; set; }

    public string? Make { get; set; }

    public string? Model { get; set; }

    public string? SerialNo { get; set; }

    public long Manufacturer { get; set; }

    public double CapacityKva { get; set; }

    public double FuelCapacity { get; set; }

    public DateTime LastServicedOn { get; set; }

    public DateTime NextServiceOn { get; set; }

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

    public virtual TblDgprimary Dg { get; set; } = null!;

    public virtual TblManufacturer ManufacturerNavigation { get; set; } = null!;
}
