$(document).ready(function () {
    
    
    
})

function FillCardDataList(data) {
    $("#RVoltage").html(data[0].RVoltage);
    $("#YVoltage").html(data[0].YVoltage);
    $("#BVoltage").html(data[0].BVoltage);
    $("#RCurrent").html(data[0].RCurrent);
    $("#BCurrent").html(data[0].BCurrent);
    $("#YCurrent").html(data[0].YCurrent);
    $("#FuelLevel").html(data[0].FuelLevel);
    $("#DRO").html(data[0].DRO);
    $("#Frequency").html(data[0].Frequency);
    
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
        valueAxis1.max = 800;
        valueAxis1.renderer.opposite = true;

        valueAxis2.min = 0;
        valueAxis2.max = 800;
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
                var series7 = chart.series.push(new am4charts.LineSeries());
                series7.dataFields.valueY = "Frequency";
                series7.dataFields.dateX = "date";
                series7.yAxis = valueAxis1;
                series7.name = "Frequency";
                series7.tooltipText = "{name}: [bold]{valueY}[/]";
                series7.strokeWidth = 2;
                var series8 = chart.series.push(new am4charts.LineSeries());
                series8.dataFields.valueY = "Fuel";
                series8.dataFields.dateX = "date";
                series8.yAxis = valueAxis1;
                series8.name = "Fuel";
                series8.tooltipText = "{name}: [bold]{valueY}[/]";
                series8.strokeWidth = 2;
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
                var series7 = chart.series.push(new am4charts.ColumnSeries());
                series7.dataFields.valueY = "Frequency";
                series7.dataFields.dateX = "date";
                series7.yAxis = valueAxis1;
                series7.name = "Frequency";
                series7.tooltipText = "{name}: [bold]{valueY}[/]";
                series7.strokeWidth = 2;
                var series8 = chart.series.push(new am4charts.ColumnSeries());
                series8.dataFields.valueY = "Fuel";
                series8.dataFields.dateX = "date";
                series8.yAxis = valueAxis1;
                series8.name = "Fuel";
                series8.tooltipText = "{name}: [bold]{valueY}[/]";
                series8.strokeWidth = 2;
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
function FillBCCCchartdiv(data) {
    // Create chart instance
    am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        am4core.addLicense("ch-custom-attribution");
        // Create chart instance
        var chart = am4core.create("BCCCchartdiv", am4charts.XYChart);

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
        series1.name = "R Voltage";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;

        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "DGCurrent";
        series2.dataFields.dateX = "date";
        series2.yAxis = valueAxis2;
        series2.name = "Y Voltage";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        series2.strokeWidth = 2;

        var series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = "Vo";
        series3.dataFields.dateX = "date";
        series3.yAxis = valueAxis2;
        series3.name = "B Voltage";
        series3.tooltipText = "{name}: [bold]{valueY}[/]";
        series3.strokeWidth = 2;

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}

function FillBCchartdiv(data) {
    // Create chart instance

    am5.ready(function () {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("BCchartdiv");
        root._logo.dispose();
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true,
            paddingLeft: 0,
            paddingRight: 1
        }));

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);


        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xRenderer = am5xy.AxisRendererX.new(root, {
            minGridDistance: 30,
            minorGridEnabled: true
        });

        xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p100,
            paddingRight: 15
        });

        xRenderer.grid.template.setAll({
            location: 1
        })

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "country",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yRenderer = am5xy.AxisRendererY.new(root, {
            strokeOpacity: 0.1
        })

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: yRenderer
        }));

        // Create series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "country",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
        series.columns.template.adapters.add("fill", function (fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", function (stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });


        // Set data
        var data = [{
            country: "Fuel",
            value: 500
        }];

        xAxis.data.setAll(data);
        series.data.setAll(data);


        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);

    }); // end am5.ready()
    //am4core.ready(function () {
    //    // Themes begin
    //    am4core.useTheme(am4themes_animated);
    //    // Themes end

    //    // Create chart instance
    //    var chart = am4core.create("BCchartdiv", am4charts.XYChart);

    //    // Add data
    //    chart.data = $.parseJSON(data);

    //    // Create axes
    //    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    //    var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
       

    //    // Adjust value axis
    //    valueAxis1.min = 0;
    //    valueAxis1.max = 700;
    //    valueAxis1.renderer.opposite = true;

     

    //    // Create series
    //    var series1 = chart.series.push(new am4charts.LineSeries());
    //    series1.dataFields.valueY = "Current";
    //    series1.dataFields.dateX = "date";
    //    series1.yAxis = valueAxis1;
    //    series1.name = "Fuel";
    //    series1.tooltipText = "{name}: [bold]{valueY}[/]";
    //    series1.strokeWidth = 2;

     

    //    // Add legend
    //    chart.legend = new am4charts.Legend();

    //    // Add cursor
    //    chart.cursor = new am4charts.XYCursor();
    //});
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

        // Add data
        chart.data = $.parseJSON(data);

        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());


        // Adjust value axis
        valueAxis1.min = 0;
        valueAxis1.max = 700;
        valueAxis1.renderer.opposite = true;



        // Create series
        var series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "Current";
        series1.dataFields.dateX = "date";
        series1.yAxis = valueAxis1;
        series1.name = "Frequency";
        series1.tooltipText = "{name}: [bold]{valueY}[/]";
        series1.strokeWidth = 2;



        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
    });
}


var DGtables;
$(window).on("load", function () {
    debugger
    $.ajax({
        url: '/Site/GetGridData',  // Replace with your actual API endpoint
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
            DGtables = $('#DGtables').DataTable({
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

                    $("#DGtables_wrapper .dataTables_filter input").appendTo(_container);
                    $("#DGtables_wrapper  .dt-filters").css("display", "none");
                    $(_container).find("input").attr('placeholder', 'Search From Table');
                    $("#DGtables_wrapper  .dt-bottom").appendTo(_bottom_container);

                }

            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
            // Handle error scenario
        }
    });

   

});