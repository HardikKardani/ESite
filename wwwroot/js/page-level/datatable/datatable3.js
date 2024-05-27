var roleTable;
$(window).on("load", function () {
      roleTable =$('#roleTable').DataTable({
            "ajax": 'js/JSON/data2.json',
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
                let _container = $(this).parents('.console-panel').find('.get_dt_search');
                let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container');
        
                $("#roleTable_wrapper .dataTables_filter input").appendTo(_container);
                $("#roleTable_wrapper .dt-filters").css("display", "none");
                $(_container).find("input").attr('placeholder', 'Search From Table');
                $("#roleTable_wrapper .dt-bottom").appendTo(_bottom_container);
                dashboardFilters();
        
                $(colvis.button()).insertAfter(_container);
            },
            "createdRow": function (row, data, dataIndex) {
                // Add Edit and Delete buttons as the last <td> within each row
                let editButton = '<button class="prompt btn btn-primary btn-sm edit-btn">Edit</button>';
                let deleteButton = '<button class="confirm btn btn-danger btn-sm delete-btn">Delete</button>';
                $('td', row).eq(-1).after('<td>' + editButton + ' ' + deleteButton + '</td>');
            }
        });
        
        // Add a <th> element with title "Action" above the Edit and Delete buttons row
        $('#roleTable thead tr').append('<th>Action</th>');
        
        

      // ======= Filters Code Start ======= //
      function dashboardFilters() {
            $(".filterhead").each(function (i) {
                  var select = $('<select multiple class="multiselect"></select>')
                  .appendTo($(this).empty())
                  .on('change', function () {
                        var term = $(this).val() || [];
                        regExSearch = '^(' + term.join('|') + ')';
                        roleTable.column(i).search(regExSearch, true, false).draw();
                  });
                  roleTable.column(i).data().unique().sort().each(function (d, j) {
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
      var colvis = new $.fn.dataTable.ColVis(roleTable, {
            showAll: "Restore Defaults"
      });


});
