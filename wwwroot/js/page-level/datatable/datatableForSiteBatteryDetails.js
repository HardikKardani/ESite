

var BatteryDetailstables;
var BatteryPerformance;
var Siteloadtable;

var RectGeneralStatus;
var RectIndivualStatus;
var InputStatus;
var RunhrsTable;
var SolarGeneralStatus;
var SolarIstatus;
$(window).on("load", function () {
     


        BatteryDetailstables = $('#BatteryDetailstables').DataTable({
            "ajax": '/js/JSON/dataBatteryDeatils.json',
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
        
                $("#BatteryDetailstables_wrapper .dataTables_filter input").appendTo(_container);
                $("#BatteryDetailstables_wrapper .dt-filters").css("display", "none");
                $(_container).find("input").attr('placeholder', 'Search From Table');
                $("#BatteryDetailstables_wrapper .dt-bottom").appendTo(_bottom_container);
                
            },
           
        });

        BatteryPerformance= $('#BatteryPerformance').DataTable({
            "ajax": '/js/JSON/dataBatteryperformance.json',
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
        
        Siteloadtable= $('#Siteloadtable').DataTable({
            "ajax": '/js/JSON/dataSiteLoad.json',
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

        RectGeneralStatus= $('#RectGeneralStatus').DataTable({
            "ajax": '/js/JSON/datarect.json',
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
        RectIndivualStatus= $('#RectIndivualStatus').DataTable({
            "ajax": '/js/JSON/datarectstatus.json',
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
        InputStatus= $('#InputStatus').DataTable({
            "ajax": '/js/JSON/datainputstatus.json',
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
        RunhrsTable= $('#RunhrsTable').DataTable({
            "ajax": '/js/JSON/datarunhrs.json',
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
        SolarGeneralStatus= $('#SolarGeneralStatus').DataTable({
            "ajax": '/js/JSON/datasolarstatus.json',
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
        SolarIstatus= $('#SolarIstatus').DataTable({
            "ajax": '/js/JSON/datasolaristatus.json',
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

