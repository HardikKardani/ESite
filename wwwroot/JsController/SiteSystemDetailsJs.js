$(document).ready(function () {
    
    
    
})

function FillCardDataList(data) {
    $("#EnvironmentTemp").html(data[0].EnvironmentTemp);
    $("#BatteryTemp").html(data[0].BatteryTemp);
    $("#Load").html(data[0].Load);
    $("#HVDC").html(data[0].HVDC);
    $("#DCDC").html(data[0].DCDC);
    $("#STC").html(data[0].STC);
    $("#RTC").html(data[0].RTC);
    $("#HVDCV").html(data[0].HVDCV); 
    $("#SysVoltage").html(data[0].SysVoltage); 
    $("#DRO").html(data[0].DRO);
    
    
}
function Fillchartdiv(data) {
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
                series1.dataFields.valueY = "Voltage";
                series1.dataFields.dateX = "date";
                series1.yAxis = valueAxis1;
                series1.name = "Voltage";
                series1.tooltipText = "{name}: [bold]{valueY}[/]";
                series1.strokeWidth = 2;

                var series2 = chart.series.push(new am4charts.LineSeries());
                series2.dataFields.valueY = "LoadCurrent";
                series2.dataFields.dateX = "date";
                series2.yAxis = valueAxis2;
                series2.name = "Load Current";
                series2.tooltipText = "{name}: [bold]{valueY}[/]";
                series2.strokeWidth = 2;

                var series3 = chart.series.push(new am4charts.LineSeries());
                series3.dataFields.valueY = "BatteryTemperature";
                series3.dataFields.dateX = "date";
                series3.yAxis = valueAxis2;
                series3.name = "Battery Temperature";
                series3.tooltipText = "{name}: [bold]{valueY}[/]";
                series3.strokeWidth = 2;
                var series4 = chart.series.push(new am4charts.LineSeries());
                series4.dataFields.valueY = "EnviromentTemperature";
                series4.dataFields.dateX = "date";
                series4.yAxis = valueAxis1;
                series4.name = "Enviroment Temperature";
                series4.tooltipText = "{name}: [bold]{valueY}[/]";
                series4.strokeWidth = 2;

                var series5 = chart.series.push(new am4charts.LineSeries());
                series5.dataFields.valueY = "RectifierCurrent";
                series5.dataFields.dateX = "date";
                series5.yAxis = valueAxis2;
                series5.name = "Rectifier Current";
                series5.tooltipText = "{name}: [bold]{valueY}[/]";
                series5.strokeWidth = 2;

                var series6 = chart.series.push(new am4charts.LineSeries());
                series6.dataFields.valueY = "SolarCurrent";
                series6.dataFields.dateX = "date";
                series6.yAxis = valueAxis2;
                series6.name = "Solar Current";
                series6.tooltipText = "{name}: [bold]{valueY}[/]";
                series6.strokeWidth = 2;
                
            } else if (type === "column") {
                var series1 = chart.series.push(new am4charts.ColumnSeries());
                series1.dataFields.valueY = "Voltage";
                series1.dataFields.dateX = "date";
                series1.yAxis = valueAxis1;
                series1.name = "Voltage";
                series1.tooltipText = "{name}: [bold]{valueY}[/]";
                series1.strokeWidth = 2;
                var series2 = chart.series.push(new am4charts.ColumnSeries());
                series2.dataFields.valueY = "LoadCurrent";
                series2.dataFields.dateX = "date";
                series2.yAxis = valueAxis2;
                series2.name = "Load Current";
                series2.tooltipText = "{name}: [bold]{valueY}[/]";
                series2.strokeWidth = 2;

                var series3 = chart.series.push(new am4charts.ColumnSeries());
                series3.dataFields.valueY = "BatteryTemperature";
                series3.dataFields.dateX = "date";
                series3.yAxis = valueAxis2;
                series3.name = "Battery Temperature";
                series3.tooltipText = "{name}: [bold]{valueY}[/]";
                series3.strokeWidth = 2;
                var series4 = chart.series.push(new am4charts.ColumnSeries());
                series4.dataFields.valueY = "EnviromentTemperature";
                series4.dataFields.dateX = "date";
                series4.yAxis = valueAxis1;
                series4.name = "Enviroment Temperature";
                series4.tooltipText = "{name}: [bold]{valueY}[/]";
                series4.strokeWidth = 2;

                var series5 = chart.series.push(new am4charts.ColumnSeries());
                series5.dataFields.valueY = "RectifierCurrent";
                series5.dataFields.dateX = "date";
                series5.yAxis = valueAxis2;
                series5.name = "Rectifier Current";
                series5.tooltipText = "{name}: [bold]{valueY}[/]";
                series5.strokeWidth = 2;

                var series6 = chart.series.push(new am4charts.ColumnSeries());
                series6.dataFields.valueY = "SolarCurrent";
                series6.dataFields.dateX = "date";
                series6.yAxis = valueAxis2;
                series6.name = "Solar Current";
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
        valueAxis1.max = 100;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = 0;
        valueAxis2.max = 100;
        valueAxis2.renderer.opposite = false;

        // Create series
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "LoadCurrent";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "Voltage";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;


        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}
function FillBCCchartdiv(data) {
    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        am4core.addLicense("ch-custom-attribution");
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
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "batteryConsumption";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "Battery Temperature";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "batteryDischarge";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis2;
        series2.name = "Enviroment Temperature";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        series2.strokeWidth = 2;

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}
function FillRCchartdiv(data) {
    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        am4core.addLicense("ch-custom-attribution");
        // Create chart instance
        var chart = am4core.create("RCchartdiv", am4charts.XYChart);

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
        series1.dataFields.valueY = "batteryConsumption";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "Current";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

    

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}
function FillSCchartdiv(data) {
    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        am4core.addLicense("ch-custom-attribution");
        // Create chart instance
        var chart = am4core.create("SCchartdiv", am4charts.XYChart);

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
        series1.dataFields.valueY = "batteryConsumption";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "Current";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

       

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}

function FillSummaryGreenchartdiv(jsonData) {
    function FillSummaryGreenchartdiv(jsonData) {
        am5.ready(function () {
            // Create root element
            var root = am5.Root.new("SummaryGreenchartdiv");

            // Set themes
            root.setThemes([
                am5themes_Animated.new(root)
            ]);

            // Create chart
            var chart = root.container.children.push(
                am5radar.RadarChart.new(root, {
                    panX: false,
                    panY: false,
                    startAngle: 180,
                    endAngle: 360
                })
            );

            // Create axis and its renderer
            var axisRenderer = am5radar.AxisRendererCircular.new(root, {
                innerRadius: -10,
                strokeOpacity: 1,
                strokeWidth: 15,
                strokeGradient: am5.LinearGradient.new(root, {
                    rotation: 0,
                    stops: [
                        { color: am5.color(0x00ff00) }, // Green
                        { color: am5.color(0x00ff00) }, // Green
                        { color: am5.color(0x00ff00) }, // Green
                        { color: am5.color(0x00ff00) }  // Green
                    ]
                })
            });

            var xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    maxDeviation: 0,
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    renderer: axisRenderer
                })
            );

            // Add clock hand
            var axisDataItem = xAxis.makeDataItem({});
            axisDataItem.set("value", jsonData.value); // Set dynamic value from JSON data

            var bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(root, {
                sprite: am5radar.ClockHand.new(root, {
                    radius: am5.percent(99)
                })
            }));

            xAxis.createAxisRange(axisDataItem);

            axisDataItem.get("grid").set("visible", false);

            // Update chart dynamically with new data
            function updateChart(data) {
                axisDataItem.animate({
                    key: "value",
                    to: data.value,
                    duration: 800,
                    easing: am5.ease.out(am5.ease.cubic)
                });
            }

            // Simulate new data every 2 seconds
            //setInterval(() => {
            //    var newValue = Math.round(Math.random() * 100);
            //    updateChart({ value: newValue });
            //}, 2000);

            // Make stuff animate on load
            chart.appear(1000, 100);
        });
    }

    // Call the function with initial JSON data
    FillSummaryGreenchartdiv({ value: 75 });
}
function FillSummaryRedchartdiv(jsonData) {
    function FillSummaryRedchartdiv(jsonData) {
        am5.ready(function () {
            // Create root element
            var root = am5.Root.new("SummaryRedchartdiv");

            // Set themes
            root.setThemes([
                am5themes_Animated.new(root)
            ]);

            // Create chart
            var chart = root.container.children.push(
                am5radar.RadarChart.new(root, {
                    panX: false,
                    panY: false,
                    startAngle: 180,
                    endAngle: 360
                })
            );

            // Create axis and its renderer
            var axisRenderer = am5radar.AxisRendererCircular.new(root, {
                innerRadius: -10,
                strokeOpacity: 1,
                strokeWidth: 15,
                strokeGradient: am5.LinearGradient.new(root, {
                    rotation: 0,
                    stops: [
                        { color: am5.color(0xFF0000) }, // Green
                        { color: am5.color(0xFF0000) }, // Green
                        { color: am5.color(0xFF0000) }, // Green
                        { color: am5.color(0xFF0000) }  // Green
                    ]
                })
            });

            var xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    maxDeviation: 0,
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    renderer: axisRenderer
                })
            );

            // Add clock hand
            var axisDataItem = xAxis.makeDataItem({});
            axisDataItem.set("value", jsonData.value); // Set dynamic value from JSON data

            var bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(root, {
                sprite: am5radar.ClockHand.new(root, {
                    radius: am5.percent(99)
                })
            }));

            xAxis.createAxisRange(axisDataItem);

            axisDataItem.get("grid").set("visible", false);

            // Update chart dynamically with new data
            function updateChart(data) {
                axisDataItem.animate({
                    key: "value",
                    to: data.value,
                    duration: 800,
                    easing: am5.ease.out(am5.ease.cubic)
                });
            }

            // Simulate new data every 2 seconds
            //setInterval(() => {
            //    var newValue = Math.round(Math.random() * 100);
            //    updateChart({ value: newValue });
            //}, 2000);

            // Make stuff animate on load
            chart.appear(1000, 100);
        });
    }

    // Call the function with initial JSON data
    FillSummaryRedchartdiv({ value: 75 });
}


var Batterytables;
$(window).on("load", function () {

    $.ajax({
        url: '/Site/GetSysytemData',  // Replace with your actual API endpoint
        method: 'GET',                  // Adjust the method as per your API
        success: function (json) {
            debugger;
            var data = $.parseJSON(json.response);
            FillCardDataList(data.Table);
            Fillchartdiv(JSON.stringify(data.Table1));
            FillBCchartdiv(JSON.stringify(data.Table1));
            FillSummaryGreenchartdiv(JSON.stringify(data.Table2));
            FillSummaryRedchartdiv(JSON.stringify(data.Table3));

            var columns = data.Table6;
            var data = data.Table5;
            // Initialize the DataTable with dynamic columns and data
            Batterytables = $('#Batterytables').DataTable({
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
                    let _container = $(this).parents('.console-panel').find('.get_dt_search')
                    let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container')

                    $("#Batterytables_wrapper .dataTables_filter input").appendTo(_container);
                    $("#Batterytables_wrapper  .dt-filters").css("display", "none");
                    $(_container).find("input").attr('placeholder', 'Search From Table');
                    $("#Batterytables_wrapper  .dt-bottom").appendTo(_bottom_container);
                    $("#Batterytables_wrapper  .top").css("display", "none");
                    $("#Batterytables_wrapper  .dt-button").removeClass("dt-button buttons-excel buttons-html5");
                    $("#Batterytables_wrapper .dt-buttons button")
                        .addClass("btn btn-sm").css("background-color: rgb(12, 52, 61)"); // Add the desired Bootstrap class
                    $("#Batterytables_wrapper .dt-buttons").addClass("mr-2");
                    $("#Batterytables_wrapper .dt-buttons").appendTo(_container);
                }
            });
        }
    });
    
                   




    //debugger
    //Batterytables = $('#Batterytables').DataTable({
    //    //"ajax": '/js/JSON/data1.json',
    //    "ajax": {
    //        "url": '/Site/GetSysytemData',
    //        "dataSrc": function (json) {
    //            debugger;
    //            var data = $.parseJSON(json.response);
    //            FillCardDataList(data.Table);
    //            Fillchartdiv(JSON.stringify(data.Table1) );
    //            //FillBCchartdiv(JSON.stringify(data.Table2));
    //            //FillBCCchartdiv(JSON.stringify(data.Table3));
    //            //FillRCchartdiv(JSON.stringify(data.Table3));
    //            //FillSCchartdiv(JSON.stringify(data.Table3));
    //            // Manipulate the JSON response data if needed
    //            return data.Table5; // Assuming your data is nested under a 'data' key
    //        }
    //    },
    //    "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
    //    "columns": [
    //        { "data": "SlNo" },
    //        { "data": "SiteID" },
    //        { "data": "DateTime" },
    //        { "data": "System" },
    //        { "data": "HVDC" },
    //        { "data": "Rectifier" },
    //        { "data": "Solar" },
    //        { "data": "DCDC" },
    //        { "data": "VHVDC" },
    //        { "data": "Load" },
    //        { "data": "VBattery" },
    //        { "data": "Battery" },
    //        { "data": "Environment" },
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

    //        $("#Batterytables_wrapper .dataTables_filter input").appendTo(_container);
    //        $("#Batterytables_wrapper  .dt-filters").css("display", "none");
    //        $(_container).find("input").attr('placeholder', 'Search From Table');
    //        $("#Batterytables_wrapper  .dt-bottom").appendTo(_bottom_container);

    //    }
    //});

});