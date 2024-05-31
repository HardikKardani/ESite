$(document).ready(function () {
    
    FillCardDataList();
    

    
})

function FillCardDataList() {
    $.ajax({
        type: "GET",
        url: "/Home/GetCardDataList",
        success: function (data) {
            data = $.parseJSON(data.response);
            $("#IDODSite").html(data.Table[0].IDODSite);
            $("#ODSite").html(data.Table[0].ODSite);
            $("#IDSite").html(data.Table[0].IDSite);
            $("#GDC").html(data.Table[0].GDC + "Sites");
            $("#FullSolar").html(data.Table[0].FullSolar + "Sites");
            $("#SolarHybridSite").html(data.Table[0].SolarHybridSite + "Sites");
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
    var ctx = document.getElementById("donutchart1").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: data.Table1.map(d => d.title),
            datasets: [{
                data: data.Table1.map(d => d.value),
                backgroundColor: [
                    '#afd6fa',
                    '#82b1dd'
                ]
            }]
        },
        options: {
            title: {
                display: false,
            },
            tooltips: {
                mode: 'nearest',
                intersect: false,
                position: 'nearest',
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10
            },
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
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
        //"ajax": '/js/JSON/data1.json',
        "ajax": {
            "url": '/Company/GetList',
            "dataSrc": function (json) {
                // Manipulate the JSON response data if needed
                return json.response; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"top"<"dt-filters"f><"get_dt_button"B>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [
            { "data": "companyName" },
            { "data": "address" },
            { "data": "mobile" },
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
        "buttons": [
            {
                extend: 'excelHtml5',
                text: 'Export'
                //title: 'Data export'
            }
        ],
        initComplete: function () {
            // Move Search To Panel Header
            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');

            $("#ticketstable_wrapper  .dt-filters").css("display", "none");
            $("#ticketstable_wrapper  .dt-button").removeClass("dt-button buttons-excel buttons-html5");
            $("#ticketstable_wrapper .dt-buttons button")
                .addClass("btn btn-primary"); // Add the desired Bootstrap class
                
                 
            $("#ticketstable_wrapper .dt-buttons").css({
                "float": "right"               
            });
            $("#ticketstable_wrapper .dt-buttons").addClass("mb-2 mr-4");
            
            
            $("#ticketstable_wrapper  .dt-bottom").appendTo(_bottom_container);
            dashboardFilters();

        }
    });

    // ======= Filters Code Start ======= //
    function dashboardFilters() {
        $(".filterhead").each(function (i) {
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

    // Enable Column Show Hide Option
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


var Sitetable;
$(window).on("load", function () {
    Sitetable = $('#Sitetable').DataTable({
        //"ajax": '/js/JSON/data1.json',
        "ajax": {
            "url": '/Site/GetLiveData',
            "dataSrc": function (json) {
                debugger;
                // Manipulate the JSON response data if needed
                var data = $.parseJSON(json.response);
                return data.Table; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"top"<"dt-filters"f><"get_dt_button"B>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "sorting":false,
        "columns": [
            { "data": "SNo" },
            { "data": "SiteID" },
            { "data": "SiteName" },
            { "data": "DataReceivedOn" },
            { "data": "SiteRunningON" },
            { "data": "vvoltage"},
            { "data": "loadCurrent"},
            { "data": "power"},
            { "data": "Soc" },
            { "data": "rR" },
            { "data": "yY" },
            { "data": "bB" },
            { "data": "R" },
            { "data": "Y" },
            { "data": "B" },
            { "data": "Freq" },
            { "data": "Status" },
            { "data": "TotalCurrent" },
            { "data": "Voltage" },
            { "data": "Qty" },
            { "data": "TotalPower" },
            { "data": "IPVoltage" },
            { "data": "OPCurrent" },
            { "data": "IPVoltage" },
            { "data": "OPCurrent" },
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
        "buttons": [
            {
                extend: 'excelHtml5',
                text: 'Export'
            }
        ],
        "stateSave": false,
        initComplete: function () {
            // Move Search To Panel Header
            $("#Sitetable_wrapper  button").removeClass("dt-button buttons-excel buttons-html5");
            $("#Sitetable_wrapper button")
                .addClass("btn btn-primary"); // Add the desired Bootstrap class


            $("#Sitetable_wrapper .get_dt_button .dt-buttons").css({
                "float": "right"
            });
            $("#Sitetable_wrapper .get_dt_button .dt-buttons").addClass("mb-2 mr-4");

            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container')

            
            $("#Sitetable_wrapper  .dt-filters").css("display", "none");
            $("#Sitetable_wrapper  .dt-bottom").appendTo(_bottom_container);

            
            $

        }
    });

    
});