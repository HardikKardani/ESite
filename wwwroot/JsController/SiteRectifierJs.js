$(document).ready(function () {
    
    
    
})

function FillCardDataList(data) {
    $("#IV").html(data[0].IV);
    $("#IC").html(data[0].IC);
    $("#OV").html(data[0].OV);
    $("#OC").html(data[0].OC);
    $("#PowerUse").html(data[0].PowerUse);
    $("#MaxPower").html(data[0].MaxPower);
    $("#Temperature").html(data[0].Temperature);
    $("#Type").html(data[0].Type);
    $("#Status").html(data[0].Status);
    $("#DRO").html(data[0].DRO);
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
        valueAxis1.max = 120;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = 0;
        valueAxis2.max = 120;
        valueAxis2.renderer.opposite = false;

        // Function to change chart type
        function changeChartType(type) {
            // Remove all previous series
            chart.series.clear();
            chart.legend = undefined;

            // Create series based on selected type
            if (type === "line") {
                var series1 = chart.series.push(new am4charts.LineSeries());
                series1.dataFields.valueY = "InputVoltage";
                series1.dataFields.dateX = "date";
                series1.yAxis = valueAxis1;
                series1.name = "Input Voltage";
                series1.tooltipText = "{name}: [bold]{valueY}[/]";
                series1.strokeWidth = 2;

                var series2 = chart.series.push(new am4charts.LineSeries());
                series2.dataFields.valueY = "OutputVoltage";
                series2.dataFields.dateX = "date";
                series2.yAxis = valueAxis2;
                series2.name = "Output Voltage";
                series2.tooltipText = "{name}: [bold]{valueY}[/]";
                series2.strokeWidth = 2;

                var series3 = chart.series.push(new am4charts.LineSeries());
                series3.dataFields.valueY = "InputCurrent";
                series3.dataFields.dateX = "date";
                series3.yAxis = valueAxis2;
                series3.name = "Input Current";
                series3.tooltipText = "{name}: [bold]{valueY}[/]";
                series3.strokeWidth = 2;
                var series4 = chart.series.push(new am4charts.LineSeries());
                series4.dataFields.valueY = "Output Current";
                series4.dataFields.dateX = "date";
                series4.yAxis = valueAxis1;
                series4.name = "Output Current";
                series4.tooltipText = "{name}: [bold]{valueY}[/]";
                series4.strokeWidth = 2;

                var series5 = chart.series.push(new am4charts.LineSeries());
                series5.dataFields.valueY = "MaxPower";
                series5.dataFields.dateX = "date";
                series5.yAxis = valueAxis2;
                series5.name = "Max Power";
                series5.tooltipText = "{name}: [bold]{valueY}[/]";
                series5.strokeWidth = 2;

                var series6 = chart.series.push(new am4charts.LineSeries());
                series6.dataFields.valueY = "PowerUsage";
                series6.dataFields.dateX = "date";
                series6.yAxis = valueAxis2;
                series6.name = "Power Usage";
                series6.tooltipText = "{name}: [bold]{valueY}[/]";
                series6.strokeWidth = 2;
                
            } else if (type === "column") {
                var series1 = chart.series.push(new am4charts.ColumnSeries());
                series1.dataFields.valueY = "InputVoltage";
                series1.dataFields.dateX = "date";
                series1.yAxis = valueAxis1;
                series1.name = "Input Voltage";
                series1.tooltipText = "{name}: [bold]{valueY}[/]";
                series1.strokeWidth = 2;

                var series2 = chart.series.push(new am4charts.ColumnSeries());
                series2.dataFields.valueY = "OutputVoltage";
                series2.dataFields.dateX = "date";
                series2.yAxis = valueAxis2;
                series2.name = "Output Voltage";
                series2.tooltipText = "{name}: [bold]{valueY}[/]";
                series2.strokeWidth = 2;

                var series3 = chart.series.push(new am4charts.ColumnSeries());
                series3.dataFields.valueY = "InputCurrent";
                series3.dataFields.dateX = "date";
                series3.yAxis = valueAxis2;
                series3.name = "Input Current";
                series3.tooltipText = "{name}: [bold]{valueY}[/]";
                series3.strokeWidth = 2;
                var series4 = chart.series.push(new am4charts.ColumnSeries());
                series4.dataFields.valueY = "Output Current";
                series4.dataFields.dateX = "date";
                series4.yAxis = valueAxis1;
                series4.name = "Output Current";
                series4.tooltipText = "{name}: [bold]{valueY}[/]";
                series4.strokeWidth = 2;

                var series5 = chart.series.push(new am4charts.ColumnSeries());
                series5.dataFields.valueY = "MaxPower";
                series5.dataFields.dateX = "date";
                series5.yAxis = valueAxis2;
                series5.name = "Max Power";
                series5.tooltipText = "{name}: [bold]{valueY}[/]";
                series5.strokeWidth = 2;

                var series6 = chart.series.push(new am4charts.ColumnSeries());
                series6.dataFields.valueY = "PowerUsage";
                series6.dataFields.dateX = "date";
                series6.yAxis = valueAxis2;
                series6.name = "Power Usage";
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
        series1.name = "Input Current";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "Current";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis2;
        series2.name = "Output Current";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        series2.strokeWidth = 2;

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}
function FillBCCchartdiv(data) {
    // Create chart instance
    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        am4core.addLicense("ch-custom-attribution");
        // Create chart instance
        var chart = am4core.create("BCCchartdiv", am4charts.XYChart);
        debugger
        // Add data
        chart.data = $.parseJSON(data);

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());

        // Adjust value axis
        valueAxis1.min = 50;
        valueAxis1.max = 500;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = 50;
        valueAxis2.max = 500;
        valueAxis2.renderer.opposite = false;

        // Create series
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "Current";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "Max Power";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "Solar";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis2;
        series2.name = "Power Usage";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        series2.strokeWidth = 2;

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}

var Solartables;
$(window).on("load", function () {
    debugger
    Solartables = $('#Solartables').DataTable({
        //"ajax": '/js/JSON/data1.json',
        "ajax": {
            "url": '/Site/GetRectifierData',
            "dataSrc": function (json) {
                debugger;
                var data = $.parseJSON(json.response);
                FillCardDataList(data.Table);
                Fillchartdiv(JSON.stringify(data.Table1) );
                //FillBCchartdiv(JSON.stringify(data.Table2));
                //FillBCCchartdiv(JSON.stringify(data.Table3));
                // Manipulate the JSON response data if needed
                return data.Table5; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [
            { "data": "SlNo" },
            { "data": "SiteId" },
            { "data": "DateTime" },
            { "data": "IPVoltage" },
            { "data": "IPCurrent" },
            { "data": "IPFrequency" },
            { "data": "OPVoltage" },
            { "data": "OPCurrent" },
            { "data": "TempRise" },
            { "data": "DCState" },
            { "data": "Status" },
            { "data": "Status" },
            // Add more column definitions as needed
        ],
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        }],
        "responsive": true,
        "colReorder": {
            realtime: false
        },
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

});