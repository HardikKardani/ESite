using Data.EntityModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.ViewModel
{
    public class CompanyViewModel
    {
		public CompanyViewModel(TblCompany source)
		{
		}

		public long SINo { get; set; }

		public string CompanyName { get; set; } = null!;

		public long? Mobile { get; set; }

		public string? Email { get; set; }

		public string? Address { get; set; }

		public long? CreatedBy { get; set; }

		public DateTime? CreatedDate { get; set; }

		public long? ModifiedBy { get; set; }

		public DateTime? ModifiedDate { get; set; }

		public bool? IsDeleted { get; set; }
	}
}

