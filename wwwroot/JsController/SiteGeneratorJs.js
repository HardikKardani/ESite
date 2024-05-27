$(document).ready(function () {
    
    
    
})

function FillCardDataList(data) {
    $("#RVoltage").html(data[0].RVoltage);
    $("#YVoltage").html(data[0].YVoltage);
    $("#BVoltage").html(data[0].BVoltage);
    $("#RCurrent").html(data[0].RCurrent);
    $("#BCurrent").html(data[0].BCurrent);
    $("#YCurrent").html(data[0].YCurrent);
    $("#DGRunTime").html(data[0].DGRunTime);
    $("#DGEnergy").html(data[0].DGEnergy);
    $("#FuelLevel").html(data[0].FuelLevel);
    
}
function Fillchartdiv(data) {
    // Create chart instance
    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

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
        valueAxis1.max = 600;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = 0;
        valueAxis2.max = 600;
        valueAxis2.renderer.opposite = false;

        // Create series
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "Current";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "Current";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "DGCurrent";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis2;
        series2.name = "DGCurrent";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        series2.strokeWidth = 2;

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}
function FillBCchartdiv(data) {
    // Create chart instance
    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("BCchartdiv", am4charts.XYChart);

        // Add data
        chart.data = $.parseJSON(data);

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
        var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());

        // Adjust value axis
        valueAxis1.min = 0;
        valueAxis1.max = 700;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = 0;
        valueAxis2.max = 700;
        valueAxis2.renderer.opposite = false;

        // Create series
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "Current";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "R voltage";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "DGCurrent";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis2;
        series2.name = "R Current";
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
        series1.name = "Battery Charging";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "DGCurrent";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis2;
        series2.name = "Battery Voltage";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        series2.strokeWidth = 2;

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}
function alarmstbale(data) {
    alarmsstablesDG = $('#alarmsstablesDG').DataTable({
        "data": data,
        "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        }],
        "responsive": true,
        "colReorder": {
            realtime: false
        },
        "columns": [
            { "data": "srNo" },
            { "data": "alarms" },
            { "data": "alarmsDate" },
            { "data": "severvity" },
            // Add more column definitions as needed
        ],
        "createdRow": function (row, data, dataIndex) {
            var lastCellData = data.severvity; // Get data from the last cell
            var $lastCell = $(row).children('td').last(); // Select the last cell
            var badgeHTML = ''; // Initialize HTML content
            if (lastCellData === 'Info') {
                badgeHTML = '<span class="badge badge-success badge-pill">Success</span>';
            } else if (lastCellData === 'Minor') {
                badgeHTML = '<span class="badge badge-warning badge-pill">Warning</span>';
            } else if (lastCellData === 'Danger') {
                badgeHTML = '<span class="badge badge-danger badge-pill">Danger</span>';
            }
            $lastCell.html(badgeHTML);
        },
        "stateSave": false,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]], // Customize the options for records per page
        initComplete: function () {
            // Move Search To Panel Header
            let _container = $(this).parents('.console-panel').find('.get_dt_search');
            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-containers');

            $("#alarmsstablesDG_wrapper .dataTables_filter input").appendTo(_container);
            $("#alarmsstablesDG_wrapper .dt-filters").css("display", "none");
            $(_container).find("input").attr('placeholder', 'Search From Table');
            $("#alarmsstablesDG_wrapper .dt-bottom").appendTo(_bottom_container);


        },
    });
}

var DGtables;
$(window).on("load", function () {
    debugger
    DGtables = $('#DGtables').DataTable({
        //"ajax": '/js/JSON/data1.json',
        "ajax": {
            "url": '/Site/GetGridData',
            "dataSrc": function (json) {
                debugger;
                var data = $.parseJSON(json.response);
                FillCardDataList(data.Table);
                Fillchartdiv(JSON.stringify(data.Table1) );
                FillBCchartdiv(JSON.stringify(data.Table2));
                FillBCCchartdiv(JSON.stringify(data.Table3));
                alarmstbale(data.Table4);
                // Manipulate the JSON response data if needed
                return data.Table5; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [
            { "data": "SlNo" },
            { "data": "DateTime" },
            { "data": "Rvolt" },
            { "data": "Yvolt" },
            { "data": "Bvolt" },
            { "data": "Rcurrent" },
            { "data": "Ycurrent" },
            { "data": "Bcurrent" },
            { "data": "Frequency" },
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

            $("#DGtables_wrapper .dataTables_filter input").appendTo(_container);
            $("#DGtables_wrapper  .dt-filters").css("display", "none");
            $(_container).find("input").attr('placeholder', 'Search From Table');
            $("#DGtables_wrapper  .dt-bottom").appendTo(_bottom_container);

        }
    });

});