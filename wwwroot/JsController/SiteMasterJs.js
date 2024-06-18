
$(document).ready(function () {
    
    FillData();
    $("#btnSave").on("click", function () {
        OnSave();
    });

    $("#btnReload").on("click", function () {
        onclear();
    });

});

function onclear() {
    
    $('#sim2Number').val("");
    $('#sim2Operator').val("");
    $('#sim1Number').val("");
    $('#sim1Operator').val("");
    $('#ipAddress').val("");
    $('#assetId').val("");
    $('#installationDate').val("");
    $('#softwareVersion').val("");
    $('#hardwareVersion').val("");
    $('#address').val("");
    $('#inCharge').val("");
    $('#long').val("");
    $('#lat').val("");
    $('#noOfTenant').val("");
    $('#noOfDG').val("");
    $('#typeOfCooling').val("");
    $('#siteType').val("");
    $('#country').val("");
    $('#state').val("");
    $('#region').val("");
    $('#SiteName').val("");
    $('#SiteId').val("");
    //sim2Number
    //sim2Operator
    //sim1Number
    //sim1Operator
    //ipAddress
    //assetId
    //installationDate
    //softwareVersion
    //hardwareVersion
    //address
    //inCharge
    //long
    //lat
    //noOfTenant
    //noOfDG
    //typeOfCooling
    //siteType
    //country
    //state
    //region
    //SiteName
    //SiteId
    $("#rectifierForm")[0].reset();
    $("#rectifierForm").validate().resetForm();
    
}

//$("#rectifierForm").validate({
//    rules: {
//        BankName: {
//            required: true,
//            CheckName: true,
//            noEmptySpaces: true
//        },

//    },
//    //For custom messages
//    messages: {
//        BankName: {
//            required: "Enter Bank Name",
//            CheckName: "Bank Name already exists."
//        },
//    },
//    errorElement: 'div',
//    errorPlacement: function (error, element) {
//        var placement = $(element).data('errors');
//        if (element.parent('.input-group').length) {
//            error.insertAfter(element.parent());      // radio/checkbox?
//        } else if (element.parent().find('div').hasClass('input-group-append')) {
//            error.insertAfter(element.parent().find('div.input-group-append').parent());  // select2
//        } else if (element.hasClass('select2-hidden-accessible')) {
//            error.insertAfter(element.next('span'));  // select2
//        } else {
//            error.insertAfter(element);
//        }
//    }
//});

function OnSave() {

    var form = $("#rectifierForm");
    debugger;
    //form.validator('validate');
    //var elmErr = form.find('.has-error');
    //if (elmErr && elmErr.length > 0) {
    //    Swal.fire({
    //        icon: "error",
    //        title: "Oops...",
    //        text: "Please fill required feilds",
    //    });
    //    return false;
    //} else {
    var dataModel = {
        SimCardNo2: $('#sim2Number').val(),
        SimOperator2: $('#sim2Operator').val(),
        SimCardNo1: $('#sim1Number').val(),
        SimOperator1: $('#sim1Operator').val(),
        IpAddress: $('#ipAddress').val(),
        AssetId: $('#assetId').val(),
        InstallationDate: $('#installationDate').val(),
        Softwareversion: $('#softwareVersion').val(),
        HardwareVersion: $('#hardwareVersion').val(),
        Address: $('#address').val(),
        //inCharge: $('#inCharge').val(),
        Long: $('#long').val(),
        Lat: $('#lat').val(),
        //noOfTenant: $('#noOfTenant').val(),
        //noOfDG: $('#noOfDG').val(),
        CoolingType: $('#typeOfCooling').val(),
        SiteType: $('#siteType').val(),
        Country: $('#country').val(),
        State: $('#state').val(),
        RegionId: $('#region').val(),
        SiteName: $('#SiteName').val(),
        SiteId: $('#SiteId').val()
    }
    $.ajax({
        type: "POST",
        url: '/Site/SaveSite',
        data: dataModel,
        success: function (data) {
            debugger;
            if (data.status) {
                Messagealert('s', data.message);
                window.location.href = data.response;
            }
            else {
                debugger;
                Messagealert('w', data.message);
            }
        },
        error: function (req, status, err) {
            Messagealert('e', 'something went wrong' + status + err);
        }
    })

    return false;
    //}


}
function FillData() {
    SiteDataTable = $('#SiteDataTable').DataTable({
        "ajax": {
            type: "GET",
            url: "/Site/GetList",
            "dataSrc": function (json) {
                debugger
                // Manipulate the JSON response data if needed
                return json.response; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [

            {
                "data": "slNo",
                render: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                }
            },
            { "data": "siteId" },
            { "data": "siteName" },
            { "data": "siteTypeNavigation" },
            { "data": "countryNavigation" },
            { "data": "region" },
            { "data": "stateNavigation" },
            { "data": "coolingTypeNavigation" },
            {
                "data": "slNo", "orderable": false, visible: true, "render": function (data) {
                    var trhtml = '';

                    trhtml += ' <a class="btn p-0 text-primary btnedit" href="javascript:void(0);" onClick="EditBank(' + data + ')" data-toggle="tooltip" data-placement="top" title="Edit" style="font-size: 1.06rem!important;"><i class="fas fa-edit"></i></a>'

                    trhtml += '<a class="btn p-0 ml-1 text-danger" href = "javascript:void(0);" onClick="DeleteBank(' + data + ')" data - toggle="tooltip" data - placement="top" title = "Delete" style = "font-size: 1.06rem!important;" > <i class="fas fa-trash"></i></a>';

                    return trhtml;
                }
            }
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
            let _container = $(this).parents('.console-panel').find('.get_dt_search')
            let _bottom_container = $(this).parents('.console-panel').find('.dt-bottom-container')

            $("#SiteDataTable_wrapper .dataTables_filter input").appendTo(_container);
            $("#SiteDataTable_wrapper  .dt-filters").css("display", "none");
            $(_container).find("input").attr('placeholder', 'Search From Table');
            $("#SiteDataTable_wrapper  .dt-bottom").appendTo(_bottom_container);
            $("#SiteDataTable_wrapper  .top").css("display", "none");
            

        }
    });

    //$.ajax({
    //    type: "GET",
    //    url: "/Site/GetList",
    //    success: function (data) {
    //        debugger;
    //        var slNo = 1;
    //        $('#SiteDataTable').DataTable({
    //            "order": [],
    //            destroy: true,
    //            autoWidth: true,
    //            scrollX: true,
    //            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
    //            dom: 'Bfrtip',
    //            buttons: [
    //                'pageLength',
    //                {
    //                    extend: 'excel',
    //                    exportOptions: {
    //                        columns: 'th:not(:last-child)'
    //                    }
    //                }, {
    //                    extend: 'csv',
    //                    exportOptions: {
    //                        columns: 'th:not(:last-child)'
    //                    }
    //                }
    //            ],
    //            "aaData": data.response,
    //            "columns": [

    //                {
    //                    "data": "slNo",
    //                    render: function (data, type, row, meta) {
    //                        return meta.row + meta.settings._iDisplayStart + 1;
    //                    }
    //                },
    //                { "data": "siteId" },
    //                { "data": "siteName" },
    //                { "data": "siteTypeNavigation" },
    //                { "data": "countryNavigation" },
    //                { "data": "region" },
    //                { "data": "stateNavigation" },
    //                { "data": "coolingTypeNavigation" },
    //                {
    //                    "data": "slNo", "orderable": false, visible:  true , "render": function (data) {
    //                        var trhtml = '';
                            
    //                            trhtml += ' <a class="btn p-0 text-primary btnedit" href="javascript:void(0);" onClick="EditBank(' + data + ')" data-toggle="tooltip" data-placement="top" title="Edit" style="font-size: 1.06rem!important;"><i class="fas fa-edit"></i></a>'
                            
    //                            trhtml += '<a class="btn p-0 ml-1 text-danger" href = "javascript:void(0);" onClick="DeleteBank(' + data + ')" data - toggle="tooltip" data - placement="top" title = "Delete" style = "font-size: 1.06rem!important;" > <i class="fas fa-trash"></i></a>';
                            
    //                        return trhtml;
    //                    }
    //                }
    //            ]

    //        });

          
    //    }
    //});

}

function EditSite(id) {
    onclear();
    
    $.ajax({
        type: 'GET',
        url: "/Site/Getdatabyid/?id=" + id,
        success: function (data) {
            if (data.status) {
                $('#sim2Number').val(data.response.sim2Number);
                $('#sim2Operator').val(data.response.sim2Operator);
                $('#sim1Number').val(data.response.sim1Number);
                $('#sim1Operator').val(data.response.sim1Operator);
                $('#ipAddress').val(data.response.ipAddress);
                $('#assetId').val(data.response.assetId);
                $('#installationDate').val(data.response.installationDate);
                $('#softwareVersion').val(data.response.softwareVersion);
                $('#hardwareVersion').val(data.response.hardwareVersion);
                $('#address').val(data.response.address);
                $('#inCharge').val(data.response.inCharge);
                $('#long').val(data.response.long);
                $('#lat').val(data.response.lat);
                $('#noOfTenant').val(data.response.noOfTenant);
                $('#noOfDG').val(data.response.noOfDG);
                $('#typeOfCooling').val(data.response.typeOfCooling);
                $('#siteType').val(data.response.siteType);
                $('#country').val(data.response.country);
                $('#state').val(data.response.state);
                $('#region').val(data.response.region);
                $('#SiteName').val(data.response.SiteName);
                $('#SiteId').val(data.response.SiteId);
            }
            else {
                Messagealert('w', data.message);
            }
            loader(0);
        }
    });
}

function DeleteSite(id) {

    Swal.fire({
        title: 'Are you sure?',
        text: "Once deleted, you will not be able to recover this data.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            loader(1);
            $.ajax({
                type: 'GET',
                url: "/Site/Deletedatabyid/?id=" + id,
                success: function (data) {
                    if (data.status) {
                        Messagealert('s', data.message);
                        FillData();
                    }
                    else {
                        Messagealert('w', data.message);
                    }
                }
            });
        }
    })

}
