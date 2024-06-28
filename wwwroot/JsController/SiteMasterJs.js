
$(document).ready(function () {

    FillData(); EditSiteID();
    $("#btnSaves").on("click", function () {
        OnSave();
    });

    $("#btnReload").on("click", function () {
        onclear();
    });

    $('#noOfTenant').on('input', function () {
        let numberOfTenants = $(this).val();
        if (numberOfTenants > 10) {
            $(this).val(10);
            numberOfTenants = 10;
        }
        if (numberOfTenants < 0) {
            $(this).val(0);
            numberOfTenants = 0;
        }
        createTextboxes(numberOfTenants);
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
    $('#hslNo').val(0);
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
    /*$("#rectifierForm")[0].reset();*/
    /*$("#rectifierForm").validate().resetForm();*/

}

function OnSave() {


    $('#rectifierForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Prepare the data from the form
        var siteViewModel = {
            SlNo: $('#hslNo').val(),
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
            Long: $('#long').val(),
            Lat: $('#lat').val(),
            CoolingType: $('#typeOfCooling').val(),
            SiteType: $('#siteType').val(),
            Country: $('#country').val(),
            State: $('#state').val(),
            RegionId: $('#region').val(),
            SiteName: $('#SiteName').val(),
            SiteId: $('#SiteId').val(),
            NoOfGenerator: $('#noOfGenerator').val(),
            TankCapacity: $('#tankCapacity').val(),
            LandMark: $('#landMark').val(),
            SiteInChargeName: $('#siteInChargeName').val(),
            ContactNo: $('#contactNo').val()
        };
        var tenants = [];
        $('#textboxContainer input').each(function () {
            tenants.push($(this).val());
        });
        siteViewModel.Tenants = tenants;
        $.ajax({
            url: '/Site/SaveSite',
            type: 'POST',
            data: { _Model: siteViewModel },
            success: function (response) {
                console.log('Success:', response);
                onclear();
                window.location.href = "/Site/SiteMasterList/";
                // Handle success - maybe update the UI or show a message
            },
            error: function (xhr, status, error) {
                console.log('Error:', error);
                // Handle error - maybe show an error message
            }
        });
    });
    return false;
}


function FillData() {
   
    debugger;
    SiteDataTable = $('#SiteDataTable').DataTable({
        "ajax": {
           url: "/Site/GetList",
            "dataSrc": function (json) {
                debugger;
                var data = $.parseJSON(json.response);

                // Manipulate the JSON response data if needed
                return data.$values ; // Assuming your data is nested under a 'data' key
            }
        },
        "dom": '<"top"<"dt-filters"f>>rFt<"dt-bottom"<"dt-information"li><"dt-pagination"p>>',
        "columns": [

            {
                "data": "SlNo",
                render: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                }
            },
            { "data": "SiteId" },
            { "data": "SiteName" },
            {
                "data": "SiteTypeNavigation",
                "render": function (data, type, row) {
                    return data ? data.SiteType : 'N/A';
                }
            },
            {
                "data": "CountryNavigation",
                "render": function (data, type, row) {
                    return data ? data.CountryName : 'N/A';
                }
            },
            {
                "data": "Region",
                "render": function (data, type, row) {
                    return data ? data.RegionName : 'N/A';
                }
            },
            {
                "data": "StateNavigation",
                "render": function (data, type, row) {
                    return data ? data.StateName : 'N/A';
                }
            },
            {
                "data": "CoolingTypeNavigation",
                "render": function (data, type, row) {
                    return data ? data.CoolingType : 'N/A';
                }
            },
            {
                "data": "SlNo", "orderable": false, visible: true, "render": function (data) {
                    var trhtml = '';

                    trhtml += ' <a class="btn p-0 text-primary btnedit" href="javascript:void(0);" onClick="EditSite(' + data + ')" data-toggle="tooltip" data-placement="top" title="Edit" style="font-size: 1.06rem!important;"><i class="fas fa-edit"></i></a>'

                    trhtml += '<a class="btn p-0 ml-1 text-danger" href="javascript:void(0);" onClick="DeleteSite(' + data + ')" data - toggle="tooltip" data - placement="top" title = "Delete" style = "font-size: 1.06rem!important;" > <i class="fas fa-trash"></i></a>';
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

    

}
function getParameterByName(name) {
    debugger
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function EditSite(id) {
    debugger
    window.location.href = "/Site/SiteMaster?id=" + id;
}
function EditSiteID() {
    
    var id = getParameterByName('id');;
    if (id != "") {
        onclear();

        $.ajax({
            type: 'GET',
            url: "/Site/Getdatabyid/?id=" + id,
            success: function (data) {
                if (data.status) {
                    $('#hslNo').val(data.response.slNo);
                    $('#sim2Number').val(data.response.simCardNo2);
                    $('#sim2Operator').val(data.response.simOperator2);
                    $('#sim1Number').val(data.response.simCardNo1);
                    $('#sim1Operator').val(data.response.simOperator1);
                    $('#ipAddress').val(data.response.ipAddress);
                    $('#assetId').val(data.response.assetId);
                    $('#installationDate').val(data.response.installationDate);
                    $('#softwareVersion').val(data.response.softwareversion);
                    $('#hardwareVersion').val(data.response.hardwareVersion);
                    $('#address').val(data.response.address);
                    $('#inCharge').val(data.response.siteInChargeName);
                    $('#long').val(data.response.long);
                    $('#lat').val(data.response.lat);
                    //$('#noOfTenant').val(data.response.noOfTenant);
                    $('#noOfDG').val(data.response.noOfGenerator);
                    $('#typeOfCooling').val(data.response.coolingType);
                    $('#siteType').val(data.response.siteType);
                    $('#country').val(data.response.country);
                    $('#state').val(data.response.state);
                    $('#region').val(data.response.regionId);
                    $('#SiteName').val(data.response.siteName);
                    $('#SiteId').val(data.response.siteId);
                }
                else {
                    /* Messagealert('w', data.message);*/
                }
                /* loader(0);*/
            }
        });
    }

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
            /*loader(1);*/
            $.ajax({
                type: 'GET',
                url: "/Site/Deletedatabyid/?id=" + id,
                success: function (data) {
                    if (data.status) {
                        /*Messagealert('s', data.message);*/
                        FillData();
                    }
                    else {
                        /*Messagealert('w', data.message);*/
                    }
                }
            });
        }
    })

}
function createTextboxes(number) {
    const container = $("#textboxContainer");
    const numberOfTenants = parseInt(number, 10);
    const maxTenants = 10;

    container.empty();

    if (isNaN(numberOfTenants) || numberOfTenants <= 0) {
        return;
    }

    const limitedTenants = Math.min(numberOfTenants, maxTenants);

    for (let i = 0; i < limitedTenants; i++) {
        if (i % 3 === 0) {
            container.append('<div class="row"></div>');
        }

        const divFormGroup = $('<div>', { class: 'form-group col-lg-4 col-md-12' });

        const label = $('<label>').text(`Tenant ${i + 1}`);
        const input = $('<input>', {
            type: 'text',
            class: 'form-control',
            placeholder: `Tenant ${i + 1} Name`
        });

        divFormGroup.append(label, input);
        container.children('.row').last().append(divFormGroup);
    }
}

$(document).ready(function () {
    $('#noOfTenant').on('input', function () {
        var noOfTenant = $(this).val();
        var nooftenanttab = $('.nooftenanttab');
        var nooftenantcontent = $('.nooftenanttab-content');
        nooftenanttab.empty();
        nooftenantcontent.empty();
        for (var i = 1; i <= noOfTenant; i++) {
            var tabHtmlt = `
     
             <li>
                 <a class="nav-link ${i === 1 ? 'active' : ''}" data-toggle="tab" href="#SiteAssets${i}">
                     Site Assets ${i}
                 </a>
             </li>`;
            nooftenanttab.append(tabHtmlt);
            var tabHtml = `
                    
                        <div class="tab-pane  ${i === 1 ? 'show active' : 'fade'}" id="SiteAssets${i}">
                            <div class="row">
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <label>1.Grid</label>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Available</option>
                                            <option value="Site1">Not Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Visible</option>
                                            <option value="Site1">Not Visible</option>
                                            <option value="Site1">Disabled</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Remarks">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <label>2.Generator</label>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Available</option>
                                            <option value="Site1">Not Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Visible</option>
                                            <option value="Site1">Not Visible</option>
                                            <option value="Site1">Disabled</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Remarks">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <label>3.Battery</label>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Available</option>
                                            <option value="Site1">Not Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Visible</option>
                                            <option value="Site1">Not Visible</option>
                                            <option value="Site1">Disabled</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Remarks">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <label>4.Solar</label>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Available</option>
                                            <option value="Site1">Not Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Visible</option>
                                            <option value="Site1">Not Visible</option>
                                            <option value="Site1">Disabled</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Remarks">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <label>5.Rectifier</label>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Available</option>
                                            <option value="Site1">Not Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Visible</option>
                                            <option value="Site1">Not Visible</option>
                                            <option value="Site1">Disabled</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Remarks">
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <label>6.Portable Battery</label>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Available</option>
                                            <option value="Site1">Not Available</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <select class="select2 form-control">
                                            <option value="Site1">Visible</option>
                                            <option value="Site1">Not Visible</option>
                                            <option value="Site1">Disabled</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Remarks">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            `;
            nooftenantcontent.append(tabHtml);
        }
    });
});

