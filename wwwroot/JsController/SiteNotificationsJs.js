$(document).ready(function () {
    
    
    
})

var notificationsTable;
$(window).on("load", function () {
    debugger
    notificationsTable = $('#notificationsTable').DataTable({
        "ajax": {
            "url": '/Site/GetNotificationsData',
            "dataSrc": function (json) {
                debugger;
                var data = $.parseJSON(json.response);
                // Manipulate the JSON response data if needed
                return data.Table; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [
            { "data": "SLNo" },
            { "data": "SiteName" },
            { "data": "SiteAddress" },
            { "data": "Alert" },
            { "data": "Severvity" },
            { "data": "Date" }
        ],
        "createdRow": function (row, data, dataIndex) {
            var secondLastCellData = data.Severvity; // Get data from the second last cell
            debugger
            var secondLastCell = $(row).children('td').eq(-2); // Select the second last cell
            var badgeHTML = ''; // Initialize HTML content
            if (secondLastCellData === 'Info') {
                badgeHTML = '<span class="badge badge-success badge-pill">Info</span>';
            } else if (secondLastCellData === 'Minor') {
                badgeHTML = '<span class="badge badge-warning badge-pill">Minor</span>';
            } else if (secondLastCellData === 'Danger') {
                badgeHTML = '<span class="badge badge-danger badge-pill">Danger</span>';
            }
            secondLastCell.html(badgeHTML);
        },

        "responsive": true,
        "colReorder": {
            realtime: false
        },
        "stateSave": false,
        "paging": true, // Enable pagination
        "searching": false, // Disable search/filter input
        "ordering": false, // Disable column ordering
        "info": false, // Disable table information display
        "autoWidth": false, // Disable automatic column width calculation
        "bLengthChange": false ,// Hide the "Show X entries" dropdown
        initComplete: function () {
            // Move Search To Panel Header
            let _bottom_container = $(this).parents('.card').find('.dt-bottom-container')

            $("#notificationsTable_wrapper  .dt-filters").css("display", "none");
            $("#notificationsTable_wrapper  .dt-bottom").appendTo(_bottom_container);
        }
    });

    $("thead").hide();

});