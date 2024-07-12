$(document).ready(function () {

    FillCardDataList();



})


// Fetch weather data on page load

function FillCardDataList() {
    $.ajax({
        type: "GET",
        url: "/Home/GetCardDataList",
        success: function (data) {





            data = $.parseJSON(data.response);
            $("#IDODSite").html(data.Table[0].IDODSite);
            $("#Grid").html(data.Table[0].Grid + " Sites");
            $("#ODSite").html(data.Table[0].ODSite);
            $("#IDSite").html(data.Table[0].IDSite);
            $("#GDC").html(data.Table[0].GDC + " Sites");
            $("#FullSolar").html(data.Table[0].FullSolar + " Sites");
            $("#SolarHybridSite").html(data.Table[0].SolarHybridSite + " Sites");
            $("#EB").html(data.Table3[0].EB);
            $("#Genset").html(data.Table3[0].Genset);
            $("#Solar").html(data.Table3[0].Solar);
            $("#Battery").html(data.Table3[0].Battrey);
            $("#Alret1").html(data.Table4[0].Alret1);
            $("#Alret2").html(data.Table4[0].Alret2);
            $("#Alret3").html(data.Table4[0].Alret3);
            renderLineChart(data)
        }
    });
}


function renderLineChart(data) {
    am5.ready(function () {

        // Create root element
        var root = am5.Root.new("donutchart1");
        root._logo.dispose();

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        var chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(50)
        }));

        // Create series
        var series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            alignLabels: false
        }));

        series.labels.template.setAll({
            textType: "circular",
            centerX: 0,
            centerY: 0
        });

        // Set data
        series.data.setAll([
            { value: 10, category: "Connected" },
            { value: 4, category: "Disconnected" },
        ]);

        // Apply colors based on category
        series.events.on("datavalidated", function () {
            series.slices.each(function (slice) {
                var category = slice.dataItem.dataContext.category;
                if (category === "Connected") {
                    slice.set("fill", am5.color(0x68dc76)); // Green color
                } else if (category === "Disconnected") {
                    slice.set("fill", am5.color(0x808080)); // Grey color
                }
            });
        });

        // Set colors for slices
        series.slices.template.setAll({
            stroke: am5.color(0xFFFFFF),
            strokeWidth: 2
        });



        // Play initial series animation
        series.appear(1000, 100);
    });
    //var ctx = document.getElementById("donutchart1").getContext('2d');
    //var myChart = new Chart(ctx, {
    //    type: 'pie',
    //    data: {
    //        labels: data.Table1.map(d => d.title),
    //        datasets: [{
    //            data: data.Table1.map(d => d.value),
    //            backgroundColor: [
    //                '#afd6fa',
    //                '#82b1dd'
    //            ]
    //        }]
    //    },
    //    options: {
    //        title: {
    //            display: false,
    //        },
    //        tooltips: {
    //            mode: 'nearest',
    //            intersect: false,
    //            position: 'nearest',
    //            xPadding: 10,
    //            yPadding: 10,
    //            caretPadding: 10
    //        },
    //        legend: {
    //            display: false
    //        },
    //        responsive: true,
    //        maintainAspectRatio: true,
    //        scales: {
    //            xAxes: [{
    //                display: false,
    //                gridLines: false,
    //                scaleLabel: {
    //                    display: true,
    //                    labelString: 'Month'
    //                }
    //            }],
    //            yAxes: [{
    //                display: false,
    //                gridLines: false,
    //                scaleLabel: {
    //                    display: true,
    //                    labelString: 'Value'
    //                },
    //                ticks: {
    //                    beginAtZero: true
    //                }
    //            }]
    //        }
    //    }
    //});
    //var ctx = document.getElementById("donutchart2").getContext('2d');
    //var myChart = new Chart(ctx, {
    //    type: 'doughnut',
    //    data: {
    //        labels: data.Table2.map(d => d.title),
    //        datasets: [{
    //            label: 'Running On',
    //            data: data.Table2.map(d => d.value),
    //            backgroundColor: [
    //                '#afd6fa',
    //                '#82b1dd',
    //                '#6ea1cf'
    //            ]
    //        }]
    //    },
    //    options: {
    //        title: {
    //            display: false,
    //        },
    //        tooltips: {
    //            mode: 'nearest',
    //            intersect: false,
    //            position: 'nearest',
    //            xPadding: 10,
    //            yPadding: 10,
    //            caretPadding: 10
    //        },
    //        legend: {
    //            display: false
    //        },
    //        responsive: true,
    //        maintainAspectRatio: true,
    //        scales: {
    //            xAxes: [{
    //                display: false,
    //                gridLines: false,
    //                scaleLabel: {
    //                    display: true,
    //                    labelString: 'Month'
    //                }
    //            }],
    //            yAxes: [{
    //                display: false,
    //                gridLines: false,
    //                scaleLabel: {
    //                    display: true,
    //                    labelString: 'Value'
    //                },
    //                ticks: {
    //                    beginAtZero: true
    //                }
    //            }]
    //        }
    //    }
    //});
}
var ticketstable;
$(window).on("load", function () {
    ticketstable = $('#ticketstable').DataTable({
        "ajax": {
            "url": '/Site/GetList',
            "dataSrc": function (json) {
                debugger
                var data = $.parseJSON(json.response)
                // Manipulate the JSON response data if needed
                return data.$values; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"top"B<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [
            { "data": "SiteName" },
            {
                "data": "Region",
                "render": function (data, type, row) {
                    return data ? data.RegionName : 'N/A';
                }
            },
            { "data": "SiteInChargeName" }
            // Add more column definitions as needed
        ],
        "fixedHeader": true,
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        }],
        "responsive": true,
        "colReorder": {
            realtime: false
        },
        "stateSave": false,
        "buttons": [
            {
                extend: 'excelHtml5',
                text: 'Export'

                //title: 'Data export'
            }
        ],
        
        initComplete: function () {
            // Move Search To Panel Header
            let _container = $(this).parents('.console-panel').find('.get_dt_search')
            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container')

            $("#ticketstable_wrapper .dataTables_filter input").appendTo(_container);
            $("#ticketstable_wrapper  .dt-filters").css("display", "none");
            $(_container).find("input").attr('placeholder', 'Search From Table');
            $("#ticketstable_wrapper  .dt-bottom").appendTo(_bottom_container);
            $("#ticketstable_wrapper  .top").css("display", "none");
            $("#ticketstable_wrapper  .dt-button").removeClass("dt-button buttons-excel buttons-html5");
            $("#ticketstable_wrapper .dt-buttons button")
                .addClass("btn btn-sm").css("background-color: rgb(12, 52, 61)"); // Add the desired Bootstrap class

            $("#ticketstable_wrapper .dt-buttons").addClass("mr-2");
            $("#ticketstable_wrapper .dt-buttons").appendTo(_container);
            /*dashboardFilters();*/

            //$(colvis.button()).insertAfter(_container);

        }
    });

    // ======= Filters Code Start ======= //
    function dashboardFilters() {
        $(".filterheadsite").each(function (i) {
            var select = $('<select multiple class="multiselect"></select>')
                .appendTo($(this).empty())
                .on('change', function () {

                    var term = $(this).val() || [];
                    regExSearch = '^(' + term.join('|') + ')';
                    ticketstable.column(i).search(regExSearch, true, false).draw();
                });
            ticketstable.column(i).data().unique().sort().each(function (d, j) {
                d = `<span>` + d + `</span>`;
                d = $.parseHTML(d);
                d = $(d).text();
                if (!$(select).find("option:contains('" + d + "')").length) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                }
            });
        });
        $(".multiselect").SumoSelect({ search: true, searchText: 'Enter here.' });
    }

    // ======= Filters Code End ======= //

    //// Enable Column Show Hide Option
    //var colvis = new $.fn.dataTable.ColVis(ticketstable, {
    //    showAll: "Restore Defaults"
    //});
    $('#ticketstable').on('click', 'tbody tr', function () {
        // Get the data of the clicked row
        let rowData = ticketstable.row(this).data();

        // Extract the URL from the row data (assuming the URL is stored in a specific column)
        let url = rowData.urlColumn; // Replace 'urlColumn' with the actual column name or index

        // Navigate to the URL
        window.location.href = "/Site/Dashboard";
    });

});

//var ticketstable;
//$(window).on("load", function () {
//    ticketstable = $('#ticketstable').DataTable({
//        //"ajax": '/js/JSON/data1.json',
//        "ajax": {
//            "url": '/Company/GetList',
//            "dataSrc": function (json) {
//                // Manipulate the JSON response data if needed
//                return json.response; // Assuming your data is nested under a 'data' key
//            }
//        },
//        "dom": '<"top"<"dt-filters"f><"get_dt_button"B>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
//        "columns": [
//            { "data": "companyName" },
//            { "data": "address" },
//            { "data": "mobile" },
//            // Add more column definitions as needed
//        ],
//        "columnDefs": [{
//            "targets": 'no-sort',
//            "orderable": false,
//        }],
//        "responsive": true,
//        "colReorder": {
//            realtime: false
//        },
//        "stateSave": false,
//        "buttons": [
//            {
//                extend: 'excelHtml5',
//                text: 'Export'
//                //title: 'Data export'
//            }
//        ],
//        initComplete: function () {
//            // Move Search To Panel Header
//            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');

//            $("#ticketstable_wrapper  .dt-filters").css("display", "none");
//            $("#ticketstable_wrapper  .dt-button").removeClass("dt-button buttons-excel buttons-html5");
//            $("#ticketstable_wrapper .dt-buttons button")
//                .addClass("btn btn-primary"); // Add the desired Bootstrap class


//            $("#ticketstable_wrapper .dt-buttons").css({
//                "float": "right"               
//            });
//            $("#ticketstable_wrapper .dt-buttons").addClass("mb-2 mr-4");


//            $("#ticketstable_wrapper  .dt-bottom").appendTo(_bottom_container);
//            dashboardFilters();

//        }
//    });

//    // ======= Filters Code Start ======= //
//    function dashboardFilters() {
//        $(".filterhead").each(function (i) {
//            var select = $('<select multiple class="multiselect"></select>')
//                .appendTo($(this).empty())
//                .on('change', function () {
//                    var term = $(this).val() || [];
//                    regExSearch = '^(' + term.join('|') + ')';
//                    ticketstable.column(i).search(regExSearch, true, false).draw();
//                });
//            ticketstable.column(i).data().unique().sort().each(function (d, j) {
//                d = `<span>` + d + `</span>`;
//                d = $.parseHTML(d);
//                d = $(d).text();
//                if (!$(select).find("option:contains('" + d + "')").length) {
//                    select.append('<option value="' + d + '">' + d + '</option>')
//                }
//            });
//        });
//        $(".multiselect").SumoSelect({ search: true, searchText: 'Enter here.' });
//    }

//    // ======= Filters Code End ======= //

//    // Enable Column Show Hide Option
//    //var colvis = new $.fn.dataTable.ColVis(ticketstable, {
//    //    showAll: "Restore Defaults"
//    //});

//    $('#ticketstable').on('click', 'tbody tr', function () {
//        // Get the data of the clicked row
//        let rowData = ticketstable.row(this).data();

//        // Extract the URL from the row data (assuming the URL is stored in a specific column)
//        let url = rowData.urlColumn; // Replace 'urlColumn' with the actual column name or index

//        // Navigate to the URL
//        window.location.href = "/Site/Dashboard";
//    });
//});

$(document).ready(function () {

    // AJAX call to fetch data
    $.ajax({
        url: '/Site/GetLiveData',  // Replace with your actual API endpoint
        method: 'GET',                  // Adjust the method as per your API
        success: function (json) {
            debugger;
            var data = $.parseJSON(json.response);
            // Extract columns and data from the response
            var columns = data.Table1;
            var data = data.Table;
            // Initialize the DataTable with dynamic columns and data
            Sitetable = $('#Sitetable').DataTable({
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

                    $("#Sitetable_wrapper .dataTables_filter input").appendTo(_container);
                    $("#Sitetable_wrapper  .dt-filters").css("display", "none");
                    $(_container).find("input").attr('placeholder', 'Search From Table');
                    $("#Sitetable_wrapper  .dt-bottom").appendTo(_bottom_container);
                    $("#Sitetable_wrapper  .top").css("display", "none");
                    $("#Sitetable_wrapper  .dt-button").removeClass("dt-button buttons-excel buttons-html5");
                    $("#Sitetable_wrapper .dt-buttons button")
                        .addClass("btn").css("background-color: rgb(12, 52, 61)"); // Add the desired Bootstrap class

                    $("#Sitetable_wrapper .dt-buttons").addClass("mr-2");
                    $("#Sitetable_wrapper .dt-buttons").appendTo(_container);


                    //$(colvis.button()).insertAfter(_container);

                }

            });
        },
        error: function (xhr, status, error) {
            console.error('Error fetching data:', error);
            // Handle error scenario
        }
    });
});
//var Sitetable;
//var columns = [];
//$(window).on("load", function () {
//    Sitetable = $('#Sitetable').DataTable({
//        //"ajax": '/js/JSON/data1.json',
//        "ajax": {
//            "url": '/Site/GetLiveData',
//            "dataSrc": function (json) {

//                // Manipulate the JSON response data if needed
//                var data = $.parseJSON(json.response);
//                debugger
//                var headingHTML = '';
//                var valuesArray = [];
//                columns = JSON.stringify(data.Table1);
//                // Collect unique keys from the objects in data.Table1
//                $.each(data.Table2, function (index, obj) {
//                    $.each(obj, function (key, value) {
//                        if (valuesArray.indexOf(key) === -1) {
//                            valuesArray.push(value);  // Add unique keys to the valuesArray
//                        }
//                    });
//                });

//                // Create table header HTML
//                for (var i = 0; i < valuesArray.length; i++) {
//                    headingHTML += '<th>' + valuesArray[i] + '</th>';  // Create <th> elements for each key
//                }

//                // Assuming #Columns is a <tr> element where headers will be inserted
//                $('#Columns').html('<tr>' + headingHTML + '</tr>');  // Set the HTML of the #Columns element


//                return data.Table; // Assuming your data is nested under a 'data' key
//            }
//        },
//        "dom": '<"top"B<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
//        "sorting": false,
//        "columns": columns,
//        "columnDefs": [{
//            "targets": 'no-sort',
//            "orderable": false,
//        }],
//        "responsive": true,
//        "colReorder": {
//            realtime: false
//        },
//        "buttons": [
//            {
//                extend: 'excelHtml5',
//                text: 'Export'
//            }
//        ],
//        "stateSave": false,
//        initComplete: function () {
//            // Move Search To Panel Header
//            let _container = $(this).parents('.console-panel').find('.get_dt_search')
//            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container')

//            /*$("#ticketstable_wrapper .dataTables_filter input").appendTo(_container);*/
//            $("#Sitetable_wrapper  .dt-filters").css("display", "none");
//            /*$(_container).find("input").attr('placeholder', 'Search From Table');*/
//            $("#Sitetable_wrapper  .dt-bottom").appendTo(_bottom_container);
//            $("#Sitetable_wrapper  .top").css("display", "none");
//            $("#Sitetable_wrapper  .dt-button").removeClass("dt-button buttons-excel buttons-html5");
//            $("#Sitetable_wrapper .dt-buttons button")
//                .addClass("btn").css("background-color: rgb(12, 52, 61)"); // Add the desired Bootstrap class

//            $("#Sitetable_wrapper .dt-buttons").addClass("mr-2");
//            $("#Sitetable_wrapper .dt-buttons").appendTo(_container);


//            //$(colvis.button()).insertAfter(_container);

//        }

//    });


//});