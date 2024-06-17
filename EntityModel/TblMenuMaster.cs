using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblMenuMaster
{
    public long MenuId { get; set; }

    public string Menuname { get; set; } = null!;

    public string? Controller { get; set; }

    public string? Method { get; set; }

    public string? Icon { get; set; }

    public string? Module { get; set; }

    public string? Url { get; set; }

    public long? Parentid { get; set; }

    public bool? Ismenu { get; set; }

    public int? Sortby { get; set; }

    public DateTime? Createdate { get; set; }

    public bool? Active { get; set; }

    public virtual ICollection<TblMenuPermission> TblMenuPermissions { get; set; } = new List<TblMenuPermission>();
}
