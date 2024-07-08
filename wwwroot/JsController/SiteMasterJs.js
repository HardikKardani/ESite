
$(document).ready(function () {

    FillData(); EditSiteID();
    //$("#btnSaves").on("click", function () {
    //    OnSave();
    //});

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
        CreateNavTab();
       
    });
    $.validator.addMethod("CheckName", function (value, element) {
        var duplicate = false;
        duplicate = myValidator( value);
        return duplicate;
    }, "Name  already exists.");

    



    $("#rectifierForm").validate({
        
        rules: {
            SiteName: {
                required: true,
                CheckName: true
            },
            SiteId: {
                required: true,
                CheckName: true
            },
            Region: {
                required: true,
            }, 
            State: {
                required: true,
            }, 
            Country: {
                required: true,
            },
            SiteType: {
                required: true,
            },
            Address: {
                required: true,
            },
            InCharge: {
                required: true,
            },
            Long: {
                required: true,
            },
            Lat: {
                required: true,
            },
            TypeOfCooling: {
                required: true,
            },
            NoOfDG: {
                required: true,
            },
            NoOfTenant: {
                required: true,
            }, 
        }, messages: {
            SiteName: {
                required: "Enter SiteName",
            },
            SiteId: {
                required: "Enter SiteId",
            },
            Region: {
                required: "Select Region",
            },
            State: {
                required: "Select State",
            },
            Country: {
                required: "Select Country",
            },
            SiteType: {
                required: "Select SiteType",
            },
            Address: {
                required: "Enter Address",
            },
            InCharge: {
                required: "Enter InCharge",
            },
            Long: {
                required: "Enter Long",
            },
            Lat: {
                required: "Enter Lat",
            },
            TypeOfCooling: {
                required: "Select  Type Of Cooling",
            },
            NoOfDG: {
                required: "Enter No of DG",
            },
            NoOfTenant: {
                required: "Enter No of Tenant",
            }

        },
        errorElement: 'div',
        errorPlacement: function (error, element) {
            var placement = $(element).data('errors');
            $(error).addClass("text-danger");

            // Remove validation-error class from all elements initially
            $('.validation-error').removeClass('validation-error');

            // Check if the element is within an input group (for radio/checkbox)
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent()); // Place error after the input group
                element.parent().addClass('validation-error'); // Add validation-error class to parent
            }
            // Check if the element is within an input group append (for Select2)
            else if (element.parent().find('div').hasClass('input-group-append')) {
                error.insertAfter(element.parent().find('div.input-group-append').parent()); // Place error after the input group append div
                element.parent().addClass('validation-error'); // Add validation-error class to parent
            }
            // Check if the element is a Select2 element
            else if (element.hasClass('select2-hidden-accessible')) {
                error.insertAfter(element.next('span')); // Place error after the Select2 span
                element.addClass('validation-error'); // Add validation-error class to Select2 element
            }
            // Default placement
            else {
                error.insertAfter(element); // Place error after the element
                element.addClass('validation-error'); // Add validation-error class to element
            }
        },
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
    $('#GridRemarks').val("");
    $('#GeneratorRemarks').val("");
    $('#BatteryRemarks').val("");
    $('#SolarRermarks').val("");
    $('#RectifierRemarks').val("");
    $('#PortableBatteryRemarks').val("");
    $('#hRmsSlno').val(0);
    $('#hTenantSiteAssetSlno').val(0);
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

function OnSaveSite() {

    debugger;
    var form = $("#rectifierForm");
    if (form.valid()) {
        debugger;
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
            NoOfTenant: $('#noOfTenant').val(),
            TankCapacity: $('#tankCapacity').val(),
            LandMark: $('#landMark').val(),
            SiteInChargeName: $('#inCharge').val(),
            ContactNo: $('#contactNo').val()
        };
        var tenants = [];
        $('#textboxContainer input').each(function (index) {
            var dataId = $(this).attr('data-id');
            var tenant = {
                id: dataId ? parseInt(dataId, 10) : 0,  // Use dataId if it's not null, otherwise default to 0
                tenantName: $(this).val()
            };
            tenants.push(tenant);
        });

        
        siteViewModel.Tenants = tenants;
        $.ajax({
            url: '/Site/SaveSite',
            type: 'POST',
            data: { _Model: siteViewModel },
            success: function (response) {
                console.log('Success:', response);
                
                $('#hslNo').val(response.response);
                $("#Details").removeClass("active show").addClass("fade");
                $("#AssetConfig").removeClass("fade").addClass("active show");
                
                
                
                // Handle success - maybe update the UI or show a message
            },
            error: function (xhr, status, error) {
                console.log('Error:', error);
                // Handle error - maybe show an error message
            }
        });
    }
    //$('#rectifierForm').submit(function (event) {
    //    event.preventDefault(); // Prevent the default form submission

    //    // Prepare the data from the form
       
    //});
    return false;
}
function OnSaveSiteAsset() {
    var noOfTenant = $("#noOfTenant").val();
    var textBoxData = [];

    $('#textboxContainer input').each(function () {
        var dataId = $(this).attr('data-id');
        var value = $(this).val();

        // Create an object with data-id and value
        var textBoxInfo = {
            dataId: dataId,
            value: value
        };

        textBoxData.push(textBoxInfo);
    });

    var dataArray = [];
    // Iterate through each tenant
    for (let i = 0; i <= noOfTenant-1; i++) {
      
        // For each tenant, extract data from the form fields
        let tabData = {
            sections: []
        };

        // Example: Extracting data for each section (e.g., Grid, Generator, Battery, etc.)
        let sections = document.querySelectorAll(`#SiteAssets${textBoxData[i].dataId} .row`);

        sections.forEach(section => {
            let sectionData = {
                    SlNo: section.querySelector('[name="hTenantSiteAssetSlno"]').value,
                    SiteId: $("#hslNo").val(),
                    TenantId: textBoxData[i].dataId,
                    IsGridAvailable: section.querySelector('[name="IsGridAvailable"]').value,
                    IsGridVisible: section.querySelector('[name="IsGridVisible"]').value,
                    GridRemarks: section.querySelector('[name="GridRemarks"]').value,
                    IsGeneratorAvailable: section.querySelector('[name="IsGeneratorAvailable"]').value,
                    IsGeneratorVisible: section.querySelector('[name="IsGeneratorVisible"]').value,
                    GeneratorRemarks: section.querySelector('[name="GeneratorRemarks"]').value,
                    IsBatteryAvailable: section.querySelector('[name="IsBatteryAvailable"]').value,
                    IsBatteryVisible: section.querySelector('[name="IsBatteryVisible"]').value,
                    BatteryRemarks: section.querySelector('[name="BatteryRemarks"]').value,
                    IsSolarAvailable: section.querySelector('[name="IsSolarAvailable"]').value,
                    IsSolarVisible: section.querySelector('[name="IsSolarVisible"]').value,
                    SolarRermarks: section.querySelector('[name="SolarRermarks"]').value,
                    IsRectifierAvailable: section.querySelector('[name="IsRectifierAvailable"]').value,
                    IsRectifierVisible: section.querySelector('[name="IsRectifierVisible"]').value,
                    RectifierRemarks: section.querySelector('[name="RectifierRemarks"]').value,
                    IsPortableBatteryAvailable: section.querySelector('[name="IsPortableBatteryAvailable"]').value,
                    IsPortableBatteryVisible: section.querySelector('[name="IsPortableBatteryVisible"]').value,
                    PortableBatteryRemarks: section.querySelector('[name="PortableBatteryRemarks"]').value,
            };
            dataArray.push(sectionData);
        });
        
    }
    
    var RMSAssets = [];
    var record = {
        Slno: $('#hRmsSlno').val(),
        SiteId: $("#hslNo").val(),
        IsAirconController1Available: $("#IsAirconController1Available").val(),
        AirconController1Visible: $("#AirconController1Visible").val(),
        AirconController1Remarks: $("#AirconController1Remarks").val(),
        IsAirconController2Available: $("#IsAirconController2Available").val(),
        AirconController2Visible: $("#AirconController2Visible").val(),
        AirconController2Remarks: $("#AirconController2Remarks").val(),
        IsDGControlllerAvailable: $("#IsDGControlllerAvailable").val(),
        DGControlllerVisible: $("#DGControlllerVisible").val(),
        DGControlllerRemarks: $("#DGControlllerRemarks").val(),
        IsEnclosureAvailable: $("#IsEnclosureAvailable").val(),
        EnclosureVisible: $("#EnclosureVisible").val(),
        EnclosureRemarks: $("#EnclosureRemarks").val(),
        IsCameraAvailable: $("#IsCameraAvailable").val(),
        CameraVisible: $("#CameraVisible").val(),
        CameraType: $("#CameraType").val(),
        CameraIPAddress: $("#CameraIPAddress").val(),
        IsCameraAvailable1: $("#IsCameraAvailable1").val(),
        CameraVisible1: $("#CameraVisible1").val(),
        CameraType1: $("#CameraType1").val(),
        CameraIPAddress1: $("#CameraIPAddress1").val(),
        IsCameraAvailable2: $("#IsCameraAvailable2").val(),
        CameraVisible2: $("#CameraVisible2").val(),
        CameraType2: $("#CameraType2").val(),
        CameraIPAddress2: $("#CameraIPAddress2").val(),
        IsCameraAvailable3: $("#IsCameraAvailable3").val(),
        CameraVisible3: $("#CameraVisible3").val(),
        CameraType3: $("#CameraType3").val(),
        CameraIPAddress3: $("#CameraIPAddress3").val(),
    };
    debugger;
    RMSAssets.push(record);
    dataArray[0].RMSAssets = RMSAssets;
    
    // Convert formData array to JSON
 /*   let jsonData = JSON.stringify(dataArray, null, 2);*/
    debugger;
    $.ajax({
        url: '/Site/SaveSiteAsset',
        type: 'POST',
        data: { model: dataArray },
        success: function (response) {
            console.log('Success:', response);

            $('#hslNo').val(response.response);
            $("#Details").removeClass("active").removeClass("show").addClass("fade");
            $("#AssetConfig").removeClass("active").removeClass("show").addClass("fade");
            $("#Images").removeClass("fade").addClass("active show");



            // Handle success - maybe update the UI or show a message
        },
        error: function (xhr, status, error) {
            console.log('Error:', error);
            // Handle error - maybe show an error message
        }
    });

}

function FillData() {
    var url = window.location.pathname;
    if (url != "/Site/SiteMasterList") {
        return;
    }
   
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
                debugger;
                if (data.status) {
                    $('#hslNo').val(data.response.slNo);
                    $('#sim2Number').val(data.response.simCardNo2).trigger('change');
                    $('#sim2Operator').val(data.response.simOperator2).trigger('change');
                    $('#sim1Number').val(data.response.simCardNo1).trigger('change');
                    $('#sim1Operator').val(data.response.simOperator1).trigger('change');
                    $('#ipAddress').val(data.response.ipAddress);
                    $('#assetId').val(data.response.assetId);
                    $('#installationDate').val(data.response.installationDate);
                    $('#softwareVersion').val(data.response.softwareversion);
                    $('#hardwareVersion').val(data.response.hardwareVersion);
                    $('#address').val(data.response.address);
                    $('#inCharge').val(data.response.siteInChargeName);
                    $('#long').val(data.response.long);
                    $('#lat').val(data.response.lat);
                    $('#noOfGenerator').val(data.response.noOfGenerator);
                    $('#typeOfCooling').val(data.response.coolingType).trigger('change');
                    $('#siteType').val(data.response.siteType).trigger('change');
                    $('#country').val(data.response.country).trigger('change');
                    $('#state').val(data.response.state).trigger('change');
                    $('#region').val(data.response.regionId).trigger('change');
                    $('#SiteName').val(data.response.siteName);
                    $('#SiteId').val(data.response.siteId);
                    $('#noOfTenant').val(data.response.noOfTenant);
                    createTextboxesEdit(data.response.tenants);
                    CreateNavTab();
                    // Assuming data.response.tenantSiteAsset is an array of objects
                    let tenantSiteAssets = data.response.tenantSiteAsset;
                    debugger;
                    for (let i = 0; i < tenantSiteAssets.length; i++) {
                        let sectionData = tenantSiteAssets[i];
                        let tenantId = sectionData.tenantId; // Assuming this is how you identify the tenant

                        // Select the container where tenant data should be populated
                        let container = $(`#SiteAssets${tenantId} .row`);

                     

                        // Set values based on sectionData object
                        container.find('[name="hTenantSiteAssetSlno"]').val(sectionData.slNo);
                        container.find('[name="IsGridAvailable"]').val(String(sectionData.isGridAvailable)).trigger('change');
                        container.find('[name="IsGridVisible"]').val(sectionData.isGridVisible).trigger('change');
                        container.find('[name="GridRemarks"]').val(sectionData.gridRemarks);
                        container.find('[name="IsGeneratorAvailable"]').val(String(sectionData.isGeneratorAvailable)).trigger('change');
                        container.find('[name="IsGeneratorVisible"]').val(sectionData.isGeneratorVisible).trigger('change');
                        container.find('[name="GeneratorRemarks"]').val(sectionData.generatorRemarks);
                        container.find('[name="IsBatteryAvailable"]').val(String(sectionData.isBatteryAvailable)).trigger('change');
                        container.find('[name="IsBatteryVisible"]').val(sectionData.isBatteryVisible).trigger('change');
                        container.find('[name="BatteryRemarks"]').val(sectionData.batteryRemarks);
                        container.find('[name="IsSolarAvailable"]').val(String(sectionData.isSolarAvailable)).trigger('change');
                        container.find('[name="IsSolarVisible"]').val(sectionData.isSolarVisible).trigger('change');
                        container.find('[name="SolarRermarks"]').val(sectionData.solarRermarks); // Typo: 'solarRermarks' should be 'solarRemarks'
                        container.find('[name="IsRectifierAvailable"]').val(String(sectionData.isRectifierAvailable)).trigger('change');
                        container.find('[name="IsRectifierVisible"]').val(sectionData.isRectifierVisible).trigger('change');
                        container.find('[name="RectifierRemarks"]').val(sectionData.rectifierRemarks);
                        container.find('[name="IsPortableBatteryAvailable"]').val(String(sectionData.isPortableBatteryAvailable)).trigger('change');
                        container.find('[name="IsPortableBatteryVisible"]').val(sectionData.isPortableBatteryVisible).trigger('change');
                        container.find('[name="PortableBatteryRemarks"]').val(sectionData.portableBatteryRemarks);
                    }
                    
                    $("#hRmsSlno").val(data.response.rmsasset.slNo);
                    $("#IsAirconController1Available").val(String(data.response.rmsasset.isAirconController1Available)).trigger('change');
                    $("#AirconController1Visible").val(data.response.rmsasset.airconController1Visible).trigger('change');
                    $("#AirconController1Remarks").val(data.response.rmsasset.airconController1Remarks);
                    $("#IsAirconController2Available").val(String(data.response.rmsasset.isAirconController2Available)).trigger('change');
                    $("#AirconController2Visible").val(data.response.rmsasset.airconController2Visible).trigger('change');
                    $("#AirconController2Remarks").val(data.response.rmsasset.airconController2Remarks);
                    $("#IsDGControlllerAvailable").val(String(data.response.rmsasset.isDgcontrolllerAvailable)).trigger('change');
                    $("#DGControlllerVisible").val(data.response.rmsasset.dgcontrolllerVisible).trigger('change');
                    $("#DGControlllerRemarks").val(data.response.rmsasset.dgcontrolllerRemarks);
                    $("#IsEnclosureAvailable").val(String(data.response.rmsasset.isEnclosureAvailable)).trigger('change');
                    $("#EnclosureVisible").val(data.response.rmsasset.enclosureVisible).trigger('change');
                    $("#EnclosureRemarks").val(data.response.rmsasset.enclosureRemarks);
                    $("#IsCameraAvailable").val(String(data.response.rmsasset.isCameraAvailable)).trigger('change');
                    $("#CameraVisible").val(data.response.rmsasset.cameraVisible).trigger('change');
                    $("#CameraType").val(data.response.rmsasset.cameraType).trigger('change');
                    $("#CameraIPAddress").val(data.response.rmsasset.cameraIpaddress);
                    $("#IsCameraAvailable1").val(String(data.response.rmsasset.isCameraAvailable1)).trigger('change');
                    $("#CameraVisible1").val(data.response.rmsasset.cameraVisible1).trigger('change');
                    $("#CameraType1").val(data.response.rmsasset.cameraType1).trigger('change');
                    $("#CameraIPAddress1").val(data.response.rmsasset.cameraIpaddress1);
                    $("#IsCameraAvailable2").val(String(data.response.rmsasset.isCameraAvailable2)).trigger('change');
                    $("#CameraVisible2").val(data.response.rmsasset.cameraVisible2).trigger('change');
                    $("#CameraType2").val(data.response.rmsasset.cameraType2);
                    $("#CameraIPAddress2").val(data.response.rmsasset.cameraIpaddress2);
                    $("#IsCameraAvailable3").val(String(data.response.rmsasset.isCameraAvailable3)).trigger('change');
                    $("#CameraVisible3").val(data.response.rmsasset.cameraVisible3).trigger('change');
                    $("#CameraType3").val(data.response.rmsasset.cameraType3).trigger('change');
                    $("#CameraIPAddress3").val(data.response.rmsasset.cameraIpaddress3);
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
function createTextboxesEdit(tenants) {
    const container = $("#textboxContainer");
    const maxTenants = 10;

    container.empty();

    const numberOfTenants = tenants.length;
    const limitedTenants = Math.min(numberOfTenants, maxTenants);

    for (let i = 0; i < limitedTenants; i++) {
        const tenant = tenants[i];

        if (i % 3 === 0) {
            container.append('<div class="row"></div>');
        }

        const divFormGroup = $('<div>', { class: 'form-group col-lg-4 col-md-12' });

        const label = $('<label>').text(`Tenant ${i + 1}`);
        const input = $('<input>', {
            type: 'text',
            class: 'form-control',
            placeholder: `Tenant ${i + 1} Name`,
            value: tenant.tenantName,  // Set the tenant name as the value
            'data-id': tenant.id       // Store the tenant id in the data-id attribute
        });

        divFormGroup.append(label, input);
        container.children('.row').last().append(divFormGroup);
    }
}
function CreateNavTab() {
    var noOfTenant = $("#noOfTenant").val();
    var nooftenanttab = $('.nooftenanttab');
    var nooftenantcontent = $('.nooftenanttab-content');
    nooftenanttab.empty();
    nooftenantcontent.empty();
    var textBoxData = [];

    $('#textboxContainer input').each(function () {
        var dataId = $(this).attr('data-id');
        var value = $(this).val();

        // Create an object with data-id and value
        var textBoxInfo = {
            dataId: dataId,
            value: value
        };

        textBoxData.push(textBoxInfo);
    });

    for (var i = 0; i <= noOfTenant-1; i++) {
        var tabHtmlt = `
     
      <li>
          <a class="nav-link ${i === 0 ? 'active' : ''}" data-toggle="tab" href="#SiteAssets${i+1}">
              `+ textBoxData[i].value +`
          </a>
      </li>`;
        nooftenanttab.append(tabHtmlt);
        var tabHtml = `
             
                 <div class="tab-pane  ${i === 0 ? 'show active' : 'fade'}" id="SiteAssets${i+1}">
                     <div class="row">
                        <input type="hidden" class="form-control" name="hTenantSiteAssetSlno">
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <label>1.Grid</label>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsGridAvailable" data-id="`+ textBoxData[i].dataId +`">
                                    <option value="true">Available</option>
                                     <option value="false">Not Available</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsGridVisible" data-id="`+ textBoxData[i].dataId +`">
                                     <option value="1">Visible</option>
                                     <option value="2">Not Visible</option>
                                     <option value="3">Disabled</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <input type="text" class="form-control" name="GridRemarks"  placeholder="Remarks" data-id="`+ textBoxData[i].dataId +`">
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <label>2.Generator</label>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsGeneratorAvailable" data-id="`+ textBoxData[i].dataId +`">
                                   <option value="true">Available</option>
                                     <option value="false">Not Available</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsGeneratorVisible" data-id="`+ textBoxData[i].dataId +`">
                                   <option value="1">Visible</option>
                                     <option value="2">Not Visible</option>
                                     <option value="3">Disabled</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <input type="text" class="form-control"  name="GeneratorRemarks" placeholder="Remarks" data-id="`+ textBoxData[i].dataId +`">
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <label>3.Battery</label>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsBatteryAvailable" data-id="`+ textBoxData[i].dataId +`">
                                    <option value="true">Available</option>
                                     <option value="false">Not Available</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsBatteryVisible" data-id="`+ textBoxData[i].dataId +`">
                                    <option value="1">Visible</option>
                                     <option value="2">Not Visible</option>
                                     <option value="3">Disabled</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <input type="text" class="form-control" name="BatteryRemarks"  placeholder="Remarks" data-id="`+ textBoxData[i].dataId +`">
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <label>4.Solar</label>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsSolarAvailable" data-id="`+ textBoxData[i].dataId +`">
                                  <option value="true">Available</option>
                                     <option value="false">Not Available</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsSolarVisible" data-id="`+ textBoxData[i].dataId +`">
                                    <option value="1">Visible</option>
                                     <option value="2">Not Visible</option>
                                     <option value="3">Disabled</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <input type="text" class="form-control" name="SolarRermarks" placeholder="Remarks" data-id="`+ textBoxData[i].dataId +`">
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <label>5.Rectifier</label>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsRectifierAvailable" data-id="`+ textBoxData[i].dataId +`">
                                    <option value="true">Available</option>
                                     <option value="false">Not Available</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsRectifierVisible" data-id="`+ textBoxData[i].dataId +`">
                                    <option value="1">Visible</option>
                                     <option value="2">Not Visible</option>
                                     <option value="3">Disabled</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <input type="text" class="form-control" name="RectifierRemarks" placeholder="Remarks" data-id="`+ textBoxData[i].dataId +`">
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <label>6.Portable Battery</label>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsPortableBatteryAvailable" data-id="`+ textBoxData[i].dataId +`">
                                     <option value="true">Available</option>
                                     <option value="false">Not Available</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <select class="select2 form-control" name="IsPortableBatteryVisible" data-id="`+ textBoxData[i].dataId +`">
                                   <option value="1">Visible</option>
                                     <option value="2">Not Visible</option>
                                     <option value="3">Disabled</option>
                                 </select>
                             </div>
                         </div>
                         <div class="col-lg-3 col-md-12">
                             <div class="form-group">
                                 <input type="text" class="form-control" name="PortableBatteryRemarks" placeholder="Remarks" data-id="`+ textBoxData[i].dataId +`">
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         
     `;
        nooftenantcontent.append(tabHtml);
    }
}
function myValidator(Name) {
    debugger;
    var isSuccess = false;
    $.ajax({
        url: '/Site/CheckName',
        data: {
            Name: Name.trim(),
            id: $("#hslNo").val()
        },
        async: false,
        success: function (data) {
            if (data && data.response) {
                isSuccess = false;
            } else {
                isSuccess = true;
            }
        }
    });
    return isSuccess;
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