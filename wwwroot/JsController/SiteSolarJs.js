$(document).ready(function () {
    
    
    
})

function FillCardDataList(data) {
    $("#InputVolatge").html(data[0].InputVolatge);
    $("#InputCurrent").html(data[0].InputCurrent);
    $("#InputPower").html(data[0].InputPower);
    $("#SolarKwh").html(data[0].SolarKwh);
    $("#SolarRunTime").html(data[0].SolarRunTime);
    
}
function Fillchartdiv(data) {
    // Create chart instance
    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        am4core.addLicense("ch-custom-attribution");

        // Create chart instance
        var chart = am4core.create("chartdiv", am4charts.XYChart);

        // Add data
        chart.data = $.parseJSON(data);

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());

        // Adjust value axis
        valueAxis1.min = 0;
        valueAxis1.max = 100;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = 0;
        valueAxis2.max = 100;
        valueAxis2.renderer.opposite = false;

        // Function to change chart type
        function changeChartType(type) {
            // Remove all previous series
            chart.series.clear();
            chart.legend = undefined;

            // Create series based on selected type
            if (type === "line") {
                var series1 = chart.series.push(new am4charts.LineSeries());
                series1.dataFields.valueY = "RVoltage";
                series1.dataFields.dateX = "date";
                series1.yAxis = valueAxis1;
                series1.name = "R Voltage";
                series1.tooltipText = "{name}: [bold]{valueY}[/]";
                series1.strokeWidth = 2;

                var series2 = chart.series.push(new am4charts.LineSeries());
                series2.dataFields.valueY = "YVoltage";
                series2.dataFields.dateX = "date";
                series2.yAxis = valueAxis2;
                series2.name = "Y Voltage";
                series2.tooltipText = "{name}: [bold]{valueY}[/]";
                series2.strokeWidth = 2;

                var series3 = chart.series.push(new am4charts.LineSeries());
                series3.dataFields.valueY = "BVoltage";
                series3.dataFields.dateX = "date";
                series3.yAxis = valueAxis2;
                series3.name = "B Voltage";
                series3.tooltipText = "{name}: [bold]{valueY}[/]";
                series3.strokeWidth = 2;
                var series4 = chart.series.push(new am4charts.LineSeries());
                series4.dataFields.valueY = "RCurrent";
                series4.dataFields.dateX = "date";
                series4.yAxis = valueAxis1;
                series4.name = "R Current";
                series4.tooltipText = "{name}: [bold]{valueY}[/]";
                series4.strokeWidth = 2;

                var series5 = chart.series.push(new am4charts.LineSeries());
                series5.dataFields.valueY = "YCurrent";
                series5.dataFields.dateX = "date";
                series5.yAxis = valueAxis2;
                series5.name = "Y Current";
                series5.tooltipText = "{name}: [bold]{valueY}[/]";
                series5.strokeWidth = 2;

                var series6 = chart.series.push(new am4charts.LineSeries());
                series6.dataFields.valueY = "BCurrent";
                series6.dataFields.dateX = "date";
                series6.yAxis = valueAxis2;
                series6.name = "B Current";
                series6.tooltipText = "{name}: [bold]{valueY}[/]";
                series6.strokeWidth = 2;
                
            } else if (type === "column") {
                var series1 = chart.series.push(new am4charts.ColumnSeries());
                series1.dataFields.valueY = "RVoltage";
                series1.dataFields.dateX = "date";
                series1.yAxis = valueAxis1;
                series1.name = "R Voltage";
                series1.tooltipText = "{name}: [bold]{valueY}[/]";

                var series2 = chart.series.push(new am4charts.ColumnSeries());
                series2.dataFields.valueY = "YVoltage";
                series2.dataFields.dateX = "date";
                series2.yAxis = valueAxis2;
                series2.name = "Y Voltage";
                series2.tooltipText = "{name}: [bold]{valueY}[/]";

                var series3 = chart.series.push(new am4charts.ColumnSeries());
                series3.dataFields.valueY = "BVoltage";
                series3.dataFields.dateX = "date";
                series3.yAxis = valueAxis2;
                series3.name = "B Voltage";
                series3.tooltipText = "{name}: [bold]{valueY}[/]";
                var series4 = chart.series.push(new am4charts.ColumnSeries());
                series4.dataFields.valueY = "RCurrent";
                series4.dataFields.dateX = "date";
                series4.yAxis = valueAxis1;
                series4.name = "R Current";
                series4.tooltipText = "{name}: [bold]{valueY}[/]";
                series4.strokeWidth = 2;

                var series5 = chart.series.push(new am4charts.ColumnSeries());
                series5.dataFields.valueY = "YCurrent";
                series5.dataFields.dateX = "date";
                series5.yAxis = valueAxis2;
                series5.name = "Y Current";
                series5.tooltipText = "{name}: [bold]{valueY}[/]";
                series5.strokeWidth = 2;

                var series6 = chart.series.push(new am4charts.ColumnSeries());
                series6.dataFields.valueY = "BCurrent";
                series6.dataFields.dateX = "date";
                series6.yAxis = valueAxis2;
                series6.name = "B Current";
                series6.tooltipText = "{name}: [bold]{valueY}[/]";
                series6.strokeWidth = 2;
                
            }

            // Add legend
            chart.legend = new am4charts.Legend();

            // Add cursor
            chart.cursor = new am4charts.XYCursor();
        }

        // Dropdown menu setup
        var chartTypeDropdown = document.getElementById("chartTypeDropdown");
        chartTypeDropdown.addEventListener("change", function () {
            var selectedType = this.value;
            changeChartType(selectedType);
        });

        // Initial chart type setup
        changeChartType("line"); // Default to line chart
    });

}
function FillBCchartdiv(data) {
    // Create chart instance
    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        am4core.addLicense("ch-custom-attribution");
        // Create chart instance
        var chart = am4core.create("BCchartdiv", am4charts.XYChart);

        chart.data = $.parseJSON(data);

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());

        // Adjust value axis
        valueAxis1.min = 0;
        valueAxis1.max = 300;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = 0;
        valueAxis2.max = 300;
        valueAxis2.renderer.opposite = false;

        // Create series
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "Solar";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "R Current";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "Current";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis2;
        series2.name = "B Current";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        series2.strokeWidth = 2;

        var series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = "Vo";
        series3.dataFields.dateX = "date";
        series3.yAxis = valueAxis2;
        series3.name = "Y Current";
        series3.tooltipText = "{name}: [bold]{valueY}[/]";
        series3.strokeWidth = 2;

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}

var Solartables;
$(window).on("load", function () {

    $.ajax({
        url: '/Site/GetSolarData',  // Replace with your actual API endpoint
        method: 'GET',                  // Adjust the method as per your API
        success: function (json) {
            debugger;
            var data = $.parseJSON(json.response);
            FillCardDataList(data.Table);
            Fillchartdiv(JSON.stringify(data.Table1));
            var columns = data.Table6;
            var data = data.Table5;
            // Initialize the DataTable with dynamic columns and data
            Solartables = $('#Solartables').DataTable({
                "dom": '<"top"B<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
                "sorting": false,
                data: data,
                columns: columns,
                "columnDefs": [{
                    "targets": 'no-sort',
                    "orderable": false,
                }],
                "responsive": true,
                "colReorder": {
                    realtime: false
                },
                "buttons": [
                    {
                        extend: 'excelHtml5',
                        text: 'Export'
                    }
                ],
                "stateSave": false,
                initComplete: function () {
                    // Move Search To Panel Header
                    let _container = $(this).parents('.card').find('.get_dt_search')
                    let _bottom_container = $(this).parents('.card').find('.dt-bottom-container')

                    $("#Solartables_wrapper .dataTables_filter input").appendTo(_container);
                    $("#Solartables_wrapper  .dt-filters").css("display", "none");
                    $(_container).find("input").attr('placeholder', 'Search From Table');
                    $("#Solartables_wrapper  .dt-bottom").appendTo(_bottom_container);

                }

            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
            // Handle error scenario
        }
    });
    //debugger
    //Solartables = $('#Solartables').DataTable({
    //    //"ajax": '/js/JSON/data1.json',
    //    "ajax": {
    //        "url": '/Site/GetSolarData',
    //        "dataSrc": function (json) {
    //            debugger;
    //            var data = $.parseJSON(json.response);
    //            FillCardDataList(data.Table);
    //            Fillchartdiv(JSON.stringify(data.Table1) );
    //           /* FillBCchartdiv(JSON.stringify(data.Table2));*/
    //            // Manipulate the JSON response data if needed
    //            return data.Table5; // Assuming your data is nested under a 'data' key
    //        }
    //    },
    //    "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
    //    "columns": [
    //        { "data": "SlNo" },
    //        { "data": "Date" },
    //        { "data": "SerialNo" },
    //        { "data": "IPVoltage" },
    //        { "data": "IPCurrent" },
    //        { "data": "IPPower" },
    //        { "data": "SolarKWH" },
    //        { "data": "SolarRunTime" },
    //        { "data": "OPVoltage" },
    //        { "data": "OPCurrent" },
    //        { "data": "Temp" },
    //        { "data": "DCState" },
    //        { "data": "Status" },
    //        // Add more column definitions as needed
    //    ],
    //    "columnDefs": [{
    //        "targets": 'no-sort',
    //        "orderable": false,
    //    }],
    //    "responsive": true,
    //    "colReorder": {
    //        realtime: false
    //    },
    //    "stateSave": false,
    //    initComplete: function () {
    //        // Move Search To Panel Header
    //        let _container = $(this).parents('.card').find('.get_dt_search')
    //        let _bottom_container = $(this).parents('.card').find('.dt-bottom-container')

    //        $("#Solartables_wrapper .dataTables_filter input").appendTo(_container);
    //        $("#Solartables_wrapper  .dt-filters").css("display", "none");
    //        $(_container).find("input").attr('placeholder', 'Search From Table');
    //        $("#Solartables_wrapper  .dt-bottom").appendTo(_bottom_container);

    //    }
    //});

});