using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblCountry
{
    public long SlNo { get; set; }

    public string CountryName { get; set; } = null!;

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
