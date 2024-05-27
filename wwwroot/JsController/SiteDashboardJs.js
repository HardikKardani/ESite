﻿$(document).ready(function () {
    
    FillCardDataList();
    

    
})

function FillCardDataList() {
    $.ajax({
        type: "GET",
        url: "/Site/GetCardDataList",
        success: function (data) {
            data = $.parseJSON(data.response);
            $("#siteID").html(data.Table[0].siteID);
            $("#siteName").html(data.Table[0].siteName);
            $("#siteType").html(data.Table[0].siteType);
            $("#noOfDg").html(data.Table[0].noOfDg);
            $("#region").html(data.Table[0].region);
            $("#typeOfCooling").html(data.Table[0].typeOfCooling);
            $("#state").html(data.Table[0].state);
            $("#temp").html(data.Table[0].temp);
            $("#country").html(data.Table[0].country);
            $("#siteRunningOn").html(data.Table[0].siteRunningOn);
            $("#searchOn").html(data.Table[0].searchOn);
            $("#noOfTenant").html(data.Table[0].noOfTenant);
            $("#NoofChargers").html(data.Table[0].NoofChargers);
            $("#IPCt").html(data.Table[0].IPCt);
            $("#IPVolt").html(data.Table[0].IPVolt);
            $("#OPCt").html(data.Table[0].OPCt);
            $("#OPVolt").html(data.Table[0].OPVolt);

            $("#NoofRectifier").html(data.Table[0].NoofRectifier);
            $("#RIPCt").html(data.Table[0].RIPCt);
            $("#RIPVolt").html(data.Table[0].RIPVolt);
            $("#ROPCt").html(data.Table[0].ROPCt);
            $("#ROPVolt").html(data.Table[0].ROPVolt);
            $("#GRVOLT").html(data.Table[0].GRVOLT);
            $("#GVVOLT").html(data.Table[0].GVVOLT);
            $("#GBVOLT").html(data.Table[0].GBVOLT);
            $("#GRCR").html(data.Table[0].GRCR);
            $("#GVCt").html(data.Table[0].GVCt);
            $("#GBCR").html(data.Table[0].GBCR);
            $("#gRVolt").html(data.Table[0].gRVolt);
            $("#gYVlot").html(data.Table[0].gYVlot);
            $("#gBVlot").html(data.Table[0].gBVlot);
            $("#BRCt").html(data.Table[0].BRCt);
            $("#BVCt").html(data.Table[0].BVCt);
            $("#BBCt").html(data.Table[0].BBCt);
            $("#gFreq").html(data.Table[0].gFreq);
            $("#gFuel").html(data.Table[0].gFuel);
            $("#gBat").html(data.Table[0].gBat);
            $("#BattreyType").html(data.Table[0].BattreyType);
            $("#NoOfBattery").html(data.Table[0].NoOfBattery);
            $("#Ct").html(data.Table[0].Ct);
            $("#Volt").html(data.Table[0].Volt);
            $("#AvgBatTemp").html(data.Table[0].AvgBatTemp);
            $("#AvgEngTemp").html(data.Table[0].AvgEngTemp);
            if (data.Table[0].Action1 == '1') {
                $('#Action1').prop('checked', true);
            }
            if (data.Table[0].Action2 == '1') {
                $('#Action2').prop('checked', true);
            }
            if (data.Table[0].Action3 == '1') {
                $('#Action3').prop('checked', true);
            }
            if (data.Table[0].Action4 == '1') {
                $('#Action4').prop('checked', true);
            }
            if (data.Table[0].Action5 == '1') {
                $('#Action5').prop('checked', true);
            }
        }
    });
}

//function FillPaymentHistoryChartData() {
//    $.ajax({
//        type: "GET",
//        url: "/Site/GetList",
//        success: function (data) {
//            var slNo = 1;
//            $('#Sitetable').DataTable({
//                "order": [],
//                destroy: true,
//                autoWidth: true,
//                scrollX: true,
//                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
//                dom: 'Bfrtip',
//                buttons: [
//                    'pageLength',
//                    {
//                        extend: 'excel',
//                        exportOptions: {
//                            columns: 'th:not(:last-child)'
//                        }
//                    }, {
//                        extend: 'csv',
//                        exportOptions: {
//                            columns: 'th:not(:last-child)'
//                        }
//                    }
//                ],
//                "aaData": data.response,
//                "columns": [

//                    {
//                        "data": "sINo",
//                        render: function (data, type, row, meta) {
//                            return meta.row + meta.settings._iDisplayStart + 1;
//                        }
//                    },
//                    { "data": "companyName" },
//                    { "data": "mobile" },
//                    { "data": "email" },
//                    { "data": "address" },

//                ],
//                initComplete: function () {
//                    // Move Search To Panel Header
//                    let _container = $(this).parents('.console-panel').find('.get_dt_search');
//                    let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');

//                    $("#Sitetable_wrapper .dataTables_filter input").appendTo(_container);
//                    $("#Sitetable_wrapper .dt-filters").css("display", "none");
//                    $(_container).find("input").attr('placeholder', 'Search From Table');
//                    $("#Sitetable .dt-bottom").appendTo(_bottom_container);

//                    $(colvis.button()).insertAfter(_container);
//                }
//            });
//        }
//    });
//}
//function FillPaymentHistoryChartData() {
//    $.ajax({
//        type: "GET",
//        url: "/Company/GetList",
//        success: function (data) {
//            var slNo = 1;
//            $('#alarmsstable ').DataTable({
//                "order": [],
//                destroy: true,
//                autoWidth: true,
//                scrollX: true,
//                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
//                dom: 'Bfrtip',
//                buttons: [
//                    'pageLength',
//                    {
//                        extend: 'excel',
//                        exportOptions: {
//                            columns: 'th:not(:last-child)'
//                        }
//                    }, {
//                        extend: 'csv',
//                        exportOptions: {
//                            columns: 'th:not(:last-child)'
//                        }
//                    }
//                ],
//                "aaData": data.response,
//                "columns": [

//                    {
//                        "data": "sINo",
//                        render: function (data, type, row, meta) {
//                            return meta.row + meta.settings._iDisplayStart + 1;
//                        }
//                    },
//                    { "data": "companyName" },
//                    { "data": "mobile" },
//                    { "data": "email" },
//                    { "data": "address" },

//                ],
//                initComplete: function () {
//                    // Move Search To Panel Header
//                    let _container = $(this).parents('.console-panel').find('.get_dt_search');
//                    let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');

//                    $("#alarmsstable_wrapper .dataTables_filter input").appendTo(_container);
//                    $("#alarmsstable_wrapper .dt-filters").css("display", "none");
//                    $(_container).find("input").attr('placeholder', 'Search From Table');
//                    $("#alarmsstable .dt-bottom").appendTo(_bottom_container);

//                    $(colvis.button()).insertAfter(_container);
//                }
//            });
//        }
//    });
//}
//function renderLineChart(data) {
//    var ctx = document.getElementById("donutchart1").getContext('2d');
//    var myChart = new Chart(ctx, {
//        type: 'pie',
//        data: {
//            labels: data.Table1.map(d => d.title),
//            datasets: [{
//                data: data.Table1.map(d => d.value),
//                backgroundColor: [
//                    '#afd6fa',
//                    '#82b1dd'
//                ]
//            }]
//        },
//        options: {
//            title: {
//                display: false,
//            },
//            tooltips: {
//                mode: 'nearest',
//                intersect: false,
//                position: 'nearest',
//                xPadding: 10,
//                yPadding: 10,
//                caretPadding: 10
//            },
//            legend: {
//                display: false
//            },
//            responsive: true,
//            maintainAspectRatio: true,
//            scales: {
//                xAxes: [{
//                    display: false,
//                    gridLines: false,
//                    scaleLabel: {
//                        display: true,
//                        labelString: 'Month'
//                    }
//                }],
//                yAxes: [{
//                    display: false,
//                    gridLines: false,
//                    scaleLabel: {
//                        display: true,
//                        labelString: 'Value'
//                    },
//                    ticks: {
//                        beginAtZero: true
//                    }
//                }]
//            }
//        }
//    });
//    var ctx = document.getElementById("donutchart2").getContext('2d');
//    var myChart = new Chart(ctx, {
//        type: 'doughnut',
//        data: {
//            labels: data.Table2.map(d => d.title),
//            datasets: [{
//                label: 'Running On',
//                data: data.Table2.map(d => d.value),
//                backgroundColor: [
//                    '#afd6fa',
//                    '#82b1dd',
//                    '#6ea1cf'
//                ]
//            }]
//        },
//        options: {
//            title: {
//                display: false,
//            },
//            tooltips: {
//                mode: 'nearest',
//                intersect: false,
//                position: 'nearest',
//                xPadding: 10,
//                yPadding: 10,
//                caretPadding: 10
//            },
//            legend: {
//                display: false
//            },
//            responsive: true,
//            maintainAspectRatio: true,
//            scales: {
//                xAxes: [{
//                    display: false,
//                    gridLines: false,
//                    scaleLabel: {
//                        display: true,
//                        labelString: 'Month'
//                    }
//                }],
//                yAxes: [{
//                    display: false,
//                    gridLines: false,
//                    scaleLabel: {
//                        display: true,
//                        labelString: 'Value'
//                    },
//                    ticks: {
//                        beginAtZero: true
//                    }
//                }]
//            }
//        }
//    });
//}

var alarmsstable;
$(window).on("load", function () {
    alarmsstable = $('#alarmsstable').DataTable({
        //"ajax": '/js/JSON/data1.json',
        "ajax": {
            "url": '/Site/GetCardDataList',
            "dataSrc": function (json) {
                debugger;
                var data = $.parseJSON(json.response);
                // Manipulate the JSON response data if needed
                return data.Table1; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [
            { "data": "srNo" },
            { "data": "alarms" },
            { "data": "alarmsDate" },
            { "data": "severvity" },
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
        "createdRow": function (row, data, dataIndex) {
            debugger;
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
        initComplete: function () {
            // Move Search To Panel Header
            let _container = $(this).parents('.console-panel').find('.get_dt_search')
            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container')

            $("#alarmsstable_wrapper .dataTables_filter input").appendTo(_container);
            $("#alarmsstable_wrapper  .dt-filters").css("display", "none");
            $(_container).find("input").attr('placeholder', 'Search From Table');
            $("#alarmsstable_wrapper  .dt-bottom").appendTo(_bottom_container);
            dashboardFilters();

            $(colvis.button()).insertAfter(_container);

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
                    alarmsstable.column(i).search(regExSearch, true, false).draw();
                });
            alarmsstable.column(i).data().unique().sort().each(function (d, j) {
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
    var colvis = new $.fn.dataTable.ColVis(alarmsstable, {
        showAll: "Restore Defaults"
    });

    //$('#alarmsstable').on('click', 'tbody tr', function () {
    //    // Get the data of the clicked row
    //    let rowData = alarmsstable.row(this).data();

    //    // Extract the URL from the row data (assuming the URL is stored in a specific column)
    //    let url = rowData.urlColumn; // Replace 'urlColumn' with the actual column name or index

    //    // Navigate to the URL
    //    window.location.href = "/SiteDashboard.html";
    //});
});