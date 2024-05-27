

var DGtables;
$(window).on("load", function () {
    DGtables = $('#DGtables').DataTable({
            "ajax": '/js/JSON/dg.json',
            "dom": '<"top">rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
            "columnDefs": [{
                "targets": 'no-sort',
                "orderable": false,
            }],
            "responsive": true,
            "colReorder": {
                realtime: false
            },
            "stateSave": false,
            "lengthMenu": [[ 10, 25, 50, -1], [ 10, 25, 50, "All"]], // Customize the options for records per page
           
        });
            


});

