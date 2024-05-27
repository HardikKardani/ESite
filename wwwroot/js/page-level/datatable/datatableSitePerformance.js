var Pertable;

$(window).on("load", function () {
      Pertable = $('#Pertable').DataTable({
            "ajax": '/js/JSON/Pertable.json',
            "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
            "columnDefs": [{
                  "targets": 'no-sort',
                  "orderable": false,
            }],
            "responsive":true,
            "colReorder": {
                  realtime: false
            },
            "stateSave": false,
            initComplete: function () {
                  // Move Search To Panel Header
                  let _container = $(this).parents('.console-panel').find('.get_dt_search')
                  let _bottom_container = $(this).parents('.console-panel').find('.Pertable')

                  $("#Pertable_wrapper .dataTables_filter input").appendTo(_container);
                  $("#Pertable_wrapper  .dt-filters").css("display", "none");
                  $(_container).find("input").attr('placeholder', 'Search From Table');
                  $("#Pertable_wrapper  .dt-bottom").appendTo(_bottom_container);
            }
      });

    



});
