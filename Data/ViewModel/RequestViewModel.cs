using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.ViewModel
{
    public class RequestViewModel
    {
        public long? Id { get; set; } = 0;
        public string? Search { get; set; } = "";
        public string? Type { get; set; } = "";
        public int? CreatedBy { get; set; }
        public long? ParentId { get; set; } = 0;
        public long? OtherId { get; set; } = 0;
        public int? pageno { get; set; }
        public int? pageSize { get; set; } = 10;
        public int? partyType { get; set; } = 0;

    }
}
