using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblManufacturer
{
    public long SlNo { get; set; }

    public string Manufacturer { get; set; } = null!;

    public string? Description { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }

    public virtual ICollection<TblBattery> TblBatteries { get; set; } = new List<TblBattery>();

    public virtual ICollection<TblDgdetail> TblDgdetails { get; set; } = new List<TblDgdetail>();

    public virtual ICollection<TblRecitifier> TblRecitifiers { get; set; } = new List<TblRecitifier>();

    public virtual ICollection<TblSolar> TblSolars { get; set; } = new List<TblSolar>();
}
