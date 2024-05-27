
var alarmsstable;
$(window).on("load", function () {
      alarmsstable = $('#alarmsstable').DataTable({
            "ajax": '/js/JSON/dataalarms.json',
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
            $(".multiselect").SumoSelect({search: true, searchText: 'Enter here.'});
      }

      // ======= Filters Code End ======= //

      // Enable Column Show Hide Option
      var colvis = new $.fn.dataTable.ColVis(alarmsstable, {
            showAll: "Restore Defaults"
      });


});

