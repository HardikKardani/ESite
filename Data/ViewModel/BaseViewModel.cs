using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.ViewModel
{
    public class BaseViewModel
    {
        public long SlNo { get; set; }

        public int? CreatedBy { get; set; }
        public string? EncryptId { get; set; }
        public int? ParentId { get; set; }
        public string? CreatedByName { get; set; }
        public string? strCreatedDate { get; set; }
        public string? UpdatedByName { get; set; }
        public string? strUpdatedDate { get; set; }
    }
}
