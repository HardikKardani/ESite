using Data.EntityModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.ViewModel
{
    public class AssetRecitifierViewModel
	{
		public AssetRecitifierViewModel(TblRecitifier source)
		{
		}

		public long SlNo { get; set; }

		public long refSiteId { get; set; }

		public long? CompanyId { get; set; }

		public int NoOfRecitifier { get; set; }

		public string Type { get; set; } = null!;

		public string Make { get; set; } = null!;

		public string Model { get; set; } = null!;

		public string? SerialNo { get; set; }

		public long Manufacturer { get; set; }

		public DateTime? LastServicedOn { get; set; }

		public DateTime? NextServiceOn { get; set; }

		public string? Remarks { get; set; }

		public bool? Notify { get; set; }

		public long? CreatedBy { get; set; }

		public DateTime? CreatedDate { get; set; }

		public long? ModifiedBy { get; set; }

		public DateTime? ModifiedDate { get; set; }

		public bool? IsDeleted { get; set; }

		
	}
}

