var RActable;
var RSolartable;
var RBatterytable;
$(window).on("load", function () {
      RActable = $('#RActable').DataTable({
            "ajax": '/js/JSON/RActable.json',
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
                  let _bottom_container = $(this).parents('.console-panel').find('.RActable')

                  $("#RActable_wrapper .dataTables_filter input").appendTo(_container);
                  $("#RActable_wrapper  .dt-filters").css("display", "none");
                  $(_container).find("input").attr('placeholder', 'Search From Table');
                  $("#RActable_wrapper  .dt-bottom").appendTo(_bottom_container);
            }
      });

      RSolartable = $('#RSolartable').DataTable({
        "ajax": '/js/JSON/RSolartable.json',
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
              let _bottom_container = $(this).parents('.console-panel').find('.RSolartable')

              $("#RSolartable_wrapper .dataTables_filter input").appendTo(_container);
              $("#RSolartable_wrapper  .dt-filters").css("display", "none");
              $(_container).find("input").attr('placeholder', 'Search From Table');
              $("#RSolartable_wrapper  .dt-bottom").appendTo(_bottom_container);
        }
  });

 

RBatterytable = $('#RBatterytable').DataTable({
    "ajax": '/js/JSON/RBatterytable.json',
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
          let _bottom_container = $(this).parents('.console-panel').find('.RBatterytable')

          $("#RBatterytable_wrapper .dataTables_filter input").appendTo(_container);
          $("#RBatterytable_wrapper  .dt-filters").css("display", "none");
          $(_container).find("input").attr('placeholder', 'Search From Table');
          $("#RBatterytable_wrapper  .dt-bottom").appendTo(_bottom_container);
    }
});



});
