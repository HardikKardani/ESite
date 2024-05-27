using Data.EntityModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.ViewModel
{
    public class UserViewModel : BaseViewModel
    {
        public UserViewModel(TblUser source)
        {
        }

        

        public string UserName { get; set; }

        public string? EmpName { get; set; }

        public int? RoleId { get; set; }
        public string? RoleName { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public bool? PasswordExpiry { get; set; }

        public bool? IsPasswordChangeRequired { get; set; }

        public string? Remarks { get; set; }


        public int? SlNo { get; set; }


        public int? Type { get; set; }



        public int? CompanyId { get; set; }




    }
}
