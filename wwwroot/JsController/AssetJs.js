
$(document).ready(function () {
   
    $("#btnSave").on("click", function () {
        OnSave();
    });

});


}
function onclear() {
    $('#nextService').val("");
    $('#remarks').val("");
    $('#warrantyEndDate').val("");
    $('#warrantyStartDate').val("");
    $('#nextServiceOn').val("");
    $('#lastServicedOn').val("");
    $('#manufacture').val(0);
    $('#model').val("");
    $('#make').val("");
    $('#type').val("");
    $('#noOfRectifier').val("");
    $("#rectifierForm")[0].reset();
    $("#rectifierForm").validate().resetForm();
}

function OnSave() {
    debugger;
    var form = $("#rectifierForm");
    if (form.valid()) {
        loader(1);
        var dataModel = {
            Notify : $('#nextService').val(),
            Remarks: $('#remarks').val(),
            warrantyEndDate: $('#warrantyEndDate').val(),
            warrantyStartDate: $('#warrantyStartDate').val(),
            NextServiceOn: $('#nextServiceOn').val(),
            LastServicedOn: $('#lastServicedOn').val(),
            Manufacturer: $('#manufacture').val(),
            Model: $('#model').val(),
            Make: $('#make').val(),
            Type: $('#type').val(),
            NoOfRecitifier: $('#noOfRectifier').val(),
        }
        $.ajax({
            type: 'POST',
            url: '/Asset/Save',
            data: dataModel,
            success: function (data) {
                if (data.status) {
                    Messagealert('s', data.message);
                    onclear();
                }
                else {
                    Messagealert('w', data.message);
                }
            }
        });
    }
    
}

function EditOwnerType(id) {
    onclear();
    $.ajax({
        type: 'GET',
        url: "/Asset/GetRectifierdata",
        success: function (data) {
            if (data.status) {
                $('#txtmainId').val(data.response.slNo);
                $('#txtOwnerType').val(data.response.ownerTypeName);
                $('.h5modaltitle').html('Edit Owner Type');
                $('#MdlAddUpdate').modal('show');
            }
            else {
                Messagealert('w', data.message);
            }
        }
    });
}

