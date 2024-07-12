$(document).ready(function () {
    
})

function FillCardDataList(data) {
    $("#BatteryType").html(data[0].BatteryType);
    $("#NoofBattery").html(data[0].NoofBattery);
    $("#Current").html(data[0].Current);
    $("#Voltage").html(data[0].Voltage);
    $("#ABT").html(data[0].ABT);
    $("#AET").html(data[0].AET);
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
                series1.dataFields.valueY = "Volatge";
                series1.dataFields.dateX = "date";
                series1.yAxis = valueAxis1;
                series1.name = "Volatge";
                series1.tooltipText = "{name}: [bold]{valueY}[/]";
                series1.strokeWidth = 2;
                
                var series2 = chart.series.push(new am4charts.LineSeries());
                series2.dataFields.valueY = "Current";
                series2.dataFields.dateX = "date";
                series2.yAxis = valueAxis1;
                series2.name = "Current";
                series2.tooltipText = "{name}: [bold]{valueY}[/]";
                series2.strokeWidth = 2;

                var series3 = chart.series.push(new am4charts.LineSeries());
                series3.dataFields.valueY = "Temperature";
                series3.dataFields.dateX = "date";
                series3.yAxis = valueAxis1;
                series3.name = "Temperature";
                series3.tooltipText = "{name}: [bold]{valueY}[/]";
                series3.strokeWidth = 2;
            } else if (type === "column") {
                var series1 = chart.series.push(new am4charts.ColumnSeries());
                series1.dataFields.valueY = "Volatge";
                series1.dataFields.dateX = "date";
                series1.yAxis = valueAxis1;
                series1.name = "Volatge";
                series1.tooltipText = "{name}: [bold]{valueY}[/]";
                series1.strokeWidth = 2;

                var series2 = chart.series.push(new am4charts.ColumnSeries());
                series2.dataFields.valueY = "Current";
                series2.dataFields.dateX = "date";
                series2.yAxis = valueAxis1;
                series2.name = "Current";
                series2.tooltipText = "{name}: [bold]{valueY}[/]";
                series2.strokeWidth = 2;

                var series3 = chart.series.push(new am4charts.ColumnSeries());
                series3.dataFields.valueY = "Temperature";
                series3.dataFields.dateX = "date";
                series3.yAxis = valueAxis1;
                series3.name = "Temperature";
                series3.tooltipText = "{name}: [bold]{valueY}[/]";
                series3.strokeWidth = 2;
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

    // Create chart instance
  
}
function FillBCchartdiv(data) {
    // Create chart instance
    am4core.ready(function () {
        am4core.addLicense("ch-custom-attribution");
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("BCchartdiv", am4charts.XYChart);

        chart.data = $.parseJSON(data);

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());

        // Adjust value axis
        valueAxis1.min = -100;
        valueAxis1.max = 100;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = -100;
        valueAxis2.max = 100;
        valueAxis2.renderer.opposite = false;

        // Create series
     

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}
function FillBCCchartdiv(data) {
    am4core.ready(function () {
        // Themes begin
        am4core.addLicense("ch-custom-attribution");
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("BCCchartdiv", am4charts.XYChart);

        chart.data = $.parseJSON(data);
        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());

        // Adjust value axis
        valueAxis1.min = 0;
        valueAxis1.max = 600;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = 0;
        valueAxis2.max = 600;
        valueAxis2.renderer.opposite = false;

        // Create series
      


        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}

var Batterytables;
$(window).on("load", function () {
    $.ajax({
        url: '/Site/GetBatteryData',  // Replace with your actual API endpoint
        method: 'GET',                  // Adjust the method as per your API
        success: function (json) {
            debugger;
            debugger;
            var data = $.parseJSON(json.response);
            FillCardDataList(data.Table);
            Fillchartdiv(JSON.stringify(data.Table1));
            var columns = data.Table6;
            var data = data.Table5;
            // Initialize the DataTable with dynamic columns and data
            Batterytables = $('#Batterytables').DataTable({
                "dom": '<"top"B<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
                "sorting": false,
                data: data,
                columns: columns,
                "fixedHeader": true,
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

                    $("#Batterytables_wrapper .dataTables_filter input").appendTo(_container);
                    $("#Batterytables_wrapper  .dt-filters").css("display", "none");
                    $(_container).find("input").attr('placeholder', 'Search From Table');
                    $("#Batterytables_wrapper  .dt-bottom").appendTo(_bottom_container);

                }

            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
            // Handle error scenario
        }
    });


});