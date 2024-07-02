using Data.EntityModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.ViewModel
{

    public partial class ViewTenantSiteAsset
    {
        public long SlNo { get; set; }

        public long? SiteId { get; set; }

        public long? TenantId { get; set; }

        public bool? IsGridAvailable { get; set; }

        public byte? IsGridVisible { get; set; }

        public string? GridRemarks { get; set; }

        public bool? IsGeneratorAvailable { get; set; }

        public byte? IsGeneratorVisible { get; set; }

        public string? GeneratorRemarks { get; set; }

        public bool? IsBatteryAvailable { get; set; }

        public byte? IsBatteryVisible { get; set; }

        public string? BatteryRemarks { get; set; }

        public bool? IsSolarAvailable { get; set; }

        public byte? IsSolarVisible { get; set; }

        public string? SolarRermarks { get; set; }

        public bool? IsRectifierAvailable { get; set; }

        public byte? IsRectifierVisible { get; set; }

        public string? RectifierRemarks { get; set; }

        public bool? IsPortableBatteryAvailable { get; set; }

        public byte? IsPortableBatteryVisible { get; set; }

        public string? PortableBatteryRemarks { get; set; }

        public long? CreatedBy { get; set; }

        public DateTime? CreatedDate { get; set; }

        public long? ModifiedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public bool? IsDeleted { get; set; }

        public virtual TblSite? Site { get; set; }
         public List<TblRmsasset> RMSAssets { get; set; }
   
    }
}

