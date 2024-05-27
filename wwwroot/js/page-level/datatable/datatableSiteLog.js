var EActable;
var ESolartable;
var ELoadtablel;
var EBatterytable;
$(window).on("load", function () {
      EActable = $('#EActable').DataTable({
            "ajax": '/js/JSON/EActable.json',
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
                  let _bottom_container = $(this).parents('.console-panel').find('.EActable')

                  $("#EActable_wrapper .dataTables_filter input").appendTo(_container);
                  $("#EActable_wrapper  .dt-filters").css("display", "none");
                  $(_container).find("input").attr('placeholder', 'Search From Table');
                  $("#EActable_wrapper  .dt-bottom").appendTo(_bottom_container);
            }
      });

      ESolartable = $('#ESolartable').DataTable({
        "ajax": 'js/JSON/ESolartable.json',
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
              let _bottom_container = $(this).parents('.console-panel').find('.ESolartable')

              $("#ESolartable_wrapper .dataTables_filter input").appendTo(_container);
              $("#ESolartable_wrapper  .dt-filters").css("display", "none");
              $(_container).find("input").attr('placeholder', 'Search From Table');
              $("#ESolartable_wrapper  .dt-bottom").appendTo(_bottom_container);
        }
  });

  ELoadtable = $('#ELoadtable').DataTable({
    "ajax": '/js/JSON/ELoadtable.json',
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
          let _bottom_container = $(this).parents('.console-panel').find('.ELoadtable')

          $("#ELoadtable_wrapper .dataTables_filter input").appendTo(_container);
          $("#ELoadtable_wrapper  .dt-filters").css("display", "none");
          $(_container).find("input").attr('placeholder', 'Search From Table');
          $("#ELoadtable_wrapper  .dt-bottom").appendTo(_bottom_container);
    }
});

EBatterytable = $('#EBatterytable').DataTable({
    "ajax": '/js/JSON/EBatterytable.json',
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
          let _bottom_container = $(this).parents('.console-panel').find('.EBatterytable')

          $("#EBatterytable_wrapper .dataTables_filter input").appendTo(_container);
          $("#EBatterytable_wrapper  .dt-filters").css("display", "none");
          $(_container).find("input").attr('placeholder', 'Search From Table');
          $("#EBatterytable_wrapper  .dt-bottom").appendTo(_bottom_container);
    }
});



});
