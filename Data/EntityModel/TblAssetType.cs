using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblAssetType
{
    public long SlNo { get; set; }

    public string AssetType { get; set; } = null!;

    public string Description { get; set; } = null!;

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }
}
