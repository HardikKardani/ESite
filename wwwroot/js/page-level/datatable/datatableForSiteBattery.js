
var alarmsstables;
var Batterytables;
var alarmsstablesDG;
$(window).on("load", function () {
      alarmsstables = $('#alarmsstables').DataTable({
            "ajax": '/js/JSON/dataalarms.json',
            "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
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
                var lastCellData = data[data.length - 1]; // Get data from the last cell
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
            "lengthMenu": [[ 10, 25, 50, -1], [ 10, 25, 50, "All"]], // Customize the options for records per page
            initComplete: function () {
                // Move Search To Panel Header
                let _container = $(this).parents('.console-panel').find('.get_dt_search');
                let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');
        
                $("#alarmsstables_wrapper .dataTables_filter input").appendTo(_container);
                $("#alarmsstables_wrapper .dt-filters").css("display", "none");
                $(_container).find("input").attr('placeholder', 'Search From Table');
                $("#alarmsstables_wrapper .dt-bottom").appendTo(_bottom_container);
                
                
            },
        });
        
      
      

        Batterytables = $('#Batterytables').DataTable({
            "ajax": '/js/JSON/datacell.json',
            "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
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
            initComplete: function () {
                // Move Search To Panel Header
                let _container = $(this).parents('.console-panel').find('.get_dt_search');
                let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');
        
                $("#Batterytables_wrapper .dataTables_filter input").appendTo(_container);
                $("#Batterytables_wrapper .dt-filters").css("display", "none");
                $(_container).find("input").attr('placeholder', 'Search From Table');
                $("#Batterytables_wrapper .dt-bottom").appendTo(_bottom_container);
                
                
            },
           
        });
        alarmsstablesDG = $('#alarmsstablesDG').DataTable({
            "ajax": '/js/JSON/d.json',
            "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
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
            initComplete: function () {
                // Move Search To Panel Header
                let _container = $(this).parents('.console-panel').find('.get_dt_search');
                let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');
        
                $("#alarmsstablesDG_wrapper .dataTables_filter input").appendTo(_container);
                $("#alarmsstablesDG_wrapper .dt-filters").css("display", "none");
                $(_container).find("input").attr('placeholder', 'Search From Table');
                $("#alarmsstablesDG_wrapper .dt-bottom").appendTo(_bottom_container);
                
                
            },
        });

      


});

