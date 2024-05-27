using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.HelperClass
{
    public interface IExcelService
    {
        DataTable GetExcelToDataTable(string filePath);
        byte[] GetDataTableToExcel(DataTable dataTable, bool isReadOnly = false);
    }
}
