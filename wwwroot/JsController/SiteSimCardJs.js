$(document).ready(function () {
    
    
    
})

function FillCardDataList(data) {
    $("#BCurrent").html(data[0].BCurrent);
    $("#YCurrent").html(data[0].YCurrent);
    $("#RCurrent").html(data[0].RCurrent);
    $("#BVoltage").html(data[0].BVoltage);
    $("#YVoltage").html(data[0].YVoltage);
    $("#RVoltage").html(data[0].RVoltage);
    $("#DRO").html(data[0].DRO);
    $("#Frequency").html(data[0].Frequency);
    
    
    
    
}

var SCtables;
$(window).on("load", function () {
    debugger
    SCtables = $('#SCtables').DataTable({
        //"ajax": '/js/JSON/data1.json',
        "ajax": {
            "url": '/Site/GetSimCard',
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
            { "data": "Sim1 No" },
            { "data": "Sim1 Operator" },
            { "data": "Last Recharged On" },
            { "data": "Next Recharge" },
            { "data": "Sim2 No" },
            { "data": "Sim2 Operator" },
            { "data": "Last Recharged On" },
            { "data": "Next Recharge" },
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

            $("#SCtables_wrapper .dataTables_filter input").appendTo(_container);
            $("#SCtables_wrapper  .dt-filters").css("display", "none");
            $(_container).find("input").attr('placeholder', 'Search From Table');
            $("#SCtables_wrapper  .dt-bottom").appendTo(_bottom_container);

        }
    });
    
});
function EditSite(id) {
    // When the user clicks the button, open the modal and initialize DataTable
    
        var id = $(this).data('id');
        // Fetch data or do other operations based on the ID if needed
    $('.SimcardModel').modal('show');
    
}