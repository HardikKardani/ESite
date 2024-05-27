using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblUser
{
    public long SlNo { get; set; }

    public string UserName { get; set; } = null!;

    public string? EmpName { get; set; }

    public int? Type { get; set; }

    public long? RoleId { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public bool? PasswordExpiry { get; set; }

    public bool? IsPasswordChangeRequired { get; set; }

    public string? Remarks { get; set; }

    public long? CompanyId { get; set; }

    public virtual TblCompany? Company { get; set; }
}
