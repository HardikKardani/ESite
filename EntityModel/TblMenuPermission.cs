using System;
using System.Collections.Generic;

namespace ESite.EntityModel;

public partial class TblMenuPermission
{
    public long Permissionid { get; set; }

    public long? RoleId { get; set; }

    public long? MenuId { get; set; }

    public bool? IsView { get; set; }

    public bool? IsAdd { get; set; }

    public bool? IsEdit { get; set; }

    public bool? IsDelete { get; set; }

    public virtual TblMenuMaster? Menu { get; set; }
}
