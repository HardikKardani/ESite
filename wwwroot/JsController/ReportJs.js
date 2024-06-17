  
    var simpletable;
    $(window).on("load", function () {
        simpletable = $('#simpletable').DataTable({
            "ajax": '/js/JSON/data1.json',
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
            initComplete: function () {
                // Move Search To Panel Header
                let _container = $(this).parents('.cx').find('.get_dt_search')
                let _bottom_container = $(this).parents('.cx').find('.dt-bottom-container')

                $("#simpletable_wrapper .dataTables_filter input").appendTo(_container);
                $("#simpletable_wrapper  .dt-filters").css("display", "none");
                $(colvis.button()).insertBefore(_container);
                $(_container).find("input").attr('placeholder', 'Search From Table').addClass("m-1");
                $("#simpletable_wrapper  .dt-bottom").appendTo(_bottom_container);

            }
        });

        // Create chart instance
        // Enable Column Show Hide Option
        var colvis = new $.fn.dataTable.ColVis(simpletable, {
            showAll: "Restore Defaults"
        });

    });

