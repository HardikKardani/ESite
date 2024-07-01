using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblImage
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public string? Images { get; set; }

    public virtual TblSite? Site { get; set; }
}
