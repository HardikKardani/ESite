using ClosedXML.Excel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.HelperClass
{
    public class ExcelService : IExcelService
    {
        public ExcelService()
        {

        }

        public DataTable GetExcelToDataTable(string filePath)
        {
            using (var workbook = new XLWorkbook(filePath))
            {
                var worksheet = workbook.Worksheet(1); // Assuming data is on the first worksheet
                var dataTable = new DataTable();
                foreach (var firstRowCell in worksheet.FirstRow().Cells())
                {
                    dataTable.Columns.Add(firstRowCell.Value.ToString().Trim().Replace("\n", "").Replace("\r", "").Replace("\t", "").Replace(" ", "").ToLower());
                }

                foreach (var row in worksheet.RowsUsed().Skip(1)) // Skip header row
                {
                    var newRow = dataTable.Rows.Add();
                    foreach (var cell in row.Cells())
                    {
                        if (cell.Address.ColumnNumber <= dataTable.Columns.Count)
                        {
                            newRow[cell.Address.ColumnNumber - 1] = cell.Value.ToString();
                        }
                    }
                }

                return dataTable;
            }
        }

        public byte[] GetDataTableToExcel(DataTable dataTable, bool isReadOnly = false)
        {
            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("Sheet1");
                if (isReadOnly)
                {
                    worksheet.Protect();
                }
                // Adding column headers
                for (int i = 0; i < dataTable.Columns.Count; i++)
                {
                    worksheet.Cell(1, i + 1).Value = dataTable.Columns[i].ColumnName;
                }
                var firstRow = worksheet.FirstRow();
                firstRow.Style.Font.SetBold();

                // Adding data rows
                for (int row = 0; row < dataTable.Rows.Count; row++)
                {
                    for (int col = 0; col < dataTable.Columns.Count; col++)
                    {
                        worksheet.Cell(row + 2, col + 1).Value = dataTable.Rows[row][col].ToString();
                    }
                }
                worksheet.Columns().AdjustToContents();

                using (var stream = new MemoryStream())
                {
                    workbook.SaveAs(stream);
                    return stream.ToArray();
                }
            }
        }
    }
}
