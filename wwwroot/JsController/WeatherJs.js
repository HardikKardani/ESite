$(document).ready(function () {
    
    
    
})

var SCtables;
$(window).on("load", function () {
    debugger
    SCtables = $('#Wtables').DataTable({
        //"ajax": '/js/JSON/data1.json',
        "ajax": {
            "url": '/Site/GetWeather',
            "dataSrc": function (json) {
                debugger;
                var data = $.parseJSON(json.response);
                return data.Table; 
            }
        },
        "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [
            { "data": "Sl No" },
            { "data": "Region" },
            { "data": "SiteId" },
            { "data": "SiteName" },
            { "data": "DateTime" },
            { "data": "Temperature" },
            { "data": "Wind Speed" },
            { "data": "Weather" },
            { "data": "Precipitation" },
            {
                "data": "Sl No", "orderable": false, visible: true, "render": function (data) {
                    var trhtml = '';

                    trhtml += ' <a class="btn p-0 text-primary btnedit" href="javascript:void(0);" onClick="EditSite(' + data + ')" data-toggle="tooltip" data-placement="top" title="Edit" style="font-size: 1.06rem!important;"><i class="fas fa-edit"></i></a>'

             
                    return trhtml;
                }
            }
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
            let _container = $(this).parents('.card').find('.get_dt_search')
            let _bottom_container = $(this).parents('.card').find('.dt-bottom-container')

            $("#Wtables_wrapper .dataTables_filter input").appendTo(_container);
            $("#Wtables_wrapper  .dt-filters").css("display", "none");
            $(_container).find("input").attr('placeholder', 'Search From Table');
            $("#Wtables_wrapper  .dt-bottom").appendTo(_bottom_container);

        }
    });
    
});
function EditSite(id) {
    // When the user clicks the button, open the modal and initialize DataTable
    
        var id = $(this).data('id');
        // Fetch data or do other operations based on the ID if needed
    $('.WeatherModel').modal('show');
    
}