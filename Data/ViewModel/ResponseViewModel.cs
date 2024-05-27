using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.ViewModel
{
    public class ResponseViewModel
    {
        public bool Status { get; set; } = false;
        public string Message { get; set; } = "Success";
        public object Response { get; set; }
        public string? basefilepath { get; set; } = "";
        public bool IsLoadmore { get; set; } = false;
        public long TotalRecords { get; set; } = 0;

    }
}
