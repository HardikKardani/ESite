$(window).on("load", function () {
    CompanyDataTable = $('#CompanyDataTable').DataTable({
        //"ajax": '/js/JSON/data1.json',
        "ajax": {
            "url": '/Company/GetList',
            "dataSrc": function (json) {
                debugger;
                // Manipulate the JSON response data if needed
                return json.response; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
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
        initComplete: function () {
            // Move Search To Panel Header
            let _container = $(this).parents('.console-panel').find('.get_dt_search')
            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container')

            $("#CompanyDataTable_wrapper .dataTables_filter input").appendTo(_container);
            $("#CompanyDataTable_wrapper  .dt-filters").css("display", "none");
            $(_container).find("input").attr('placeholder', 'Search From Table');
            $("#CompanyDataTable_wrapper  .dt-bottom").appendTo(_bottom_container);
           

            $(colvis.button()).insertAfter(_container);

        },
        "createdRow": function (row, data, dataIndex) {
            // Add Edit and Delete buttons as the last <td> within each row
            let editButton = '<a data-title="Add Company" class="get_pn"  href="AddCompany.html"><button class="btn btn-primary btn-sm edit-btn">Edit</button><a>';
            let deleteButton = '<button class="confirm btn btn-danger btn-sm delete-btn">Delete</button>';
            $('td', row).eq(-1).after('<td>' + editButton + ' ' + deleteButton + '</td>');
        }
    });
    $('#CompanyDataTable thead tr').append('<th>Action</th>');

    // ======= Filters Code Start ======= //
   
    // ======= Filters Code End ======= //

    // Enable Column Show Hide Option
    var colvis = new $.fn.dataTable.ColVis(CompanyDataTable, {
        showAll: "Restore Defaults"
    });

    //$('#CompanyDataTable').on('click', 'tbody tr', function () {
    //    // Get the data of the clicked row
    //    let rowData = CompanyDataTable.row(this).data();

    //    // Extract the URL from the row data (assuming the URL is stored in a specific column)
    //    let url = rowData.urlColumn; // Replace 'urlColumn' with the actual column name or index

    //    // Navigate to the URL
    //    window.location.href = "/SiteDashboard.html";
    //});
});
