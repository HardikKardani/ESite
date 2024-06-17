var defultImg = "/content/img/NoImage.png";

$(document).ready(function () {
    //AddClass();
    //bsCustomFileInput.init();
    //$('[data-toggle="tooltip"]').tooltip();
    //if ($('.select2').length > 0) {
    //    $('.select2').select2({
    //        width: '100%'
    //    });
    //}
});

//Show and Hide Loader
function loader(id) {
    if (id == 1) {
        $('.myloader-container').show();
    }
    else {
        $('.myloader-container').hide();
    }
}
//Message Show
function Messagealert(type, msg) {
    if (type == "s")// s :  Success Message
    {
        //swal("Success", msg, "success");
        // Swal.fire('Success', msg, 'success')
        Swal.fire({
            title: 'Success',
            text: msg,
            icon: 'success',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'OK'
        })
    }
    else if (type == "w")// w :  Warning Message
    {
        //swal("Warning", msg, "warning");
        //Swal.fire("Warning", msg, "warning");
        Swal.fire({
            title: 'Warning',
            text: msg,
            icon: 'warning',
            confirmButtonColor: '#ffc107',
            confirmButtonText: 'OK'
        })
    }
    else if (type == "i")// i :  Information Message
    {
        //swal("Information", msg, "info");
        //Swal.fire("Information", msg, "info");
        Swal.fire({
            title: 'Information',
            text: msg,
            icon: 'info',
            confirmButtonColor: '#17a2b8',
            confirmButtonText: 'OK'
        })
    }
    else if (type == "e")// e :  Error Message
    {
        //swal("Error", msg, "error");
        //Swal.fire("Error", msg, "error");
        Swal.fire({
            title: 'Error',
            text: msg,
            icon: 'error',
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'OK'
        })
    }
}

function MessagealertwithRedirect(type, msg, url) {
    if (type == "s")// s :  Success Message
    {
        Swal.fire({
            title: 'Success',
            text: msg,
            icon: 'success',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'OK',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = url;
            }
        })
    }
    else if (type == "w")// w :  Warning Message
    {
        Swal.fire({
            title: 'Warning',
            text: msg,
            icon: 'warning',
            confirmButtonColor: '#ffc107',
            confirmButtonText: 'OK',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = url;
            }
        })
    }
    else if (type == "i")// i :  Information Message
    {
        Swal.fire({
            title: 'Information',
            text: msg,
            icon: 'info',
            confirmButtonColor: '#17a2b8',
            confirmButtonText: 'OK',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = url;
            }
        })
    }
    else if (type == "e")// e :  Error Message
    {
        Swal.fire({
            title: 'Error',
            text: msg,
            icon: 'error',
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'OK',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = url;
            }
        })
    }
}

function AddClass() {
    var Cont = window.location.pathname.split("/")[1];
    var pgurl = window.location.pathname.split("/")[2];
    $("#liMainMenu" + Cont + "" + pgurl).addClass('active');

    if ($("#liSubMenu" + Cont + "" + pgurl).length > 0) {

        $("#liSubMenu" + Cont + "" + pgurl).parent("ul").parent('li').find('a.mainmenu').addClass('active');
        $("#liSubMenu" + Cont + "" + pgurl).parent("ul").parent('li').addClass('menu-open');
        var subul = $("#liMenu" + Cont + "" + pgurl).parent().parent('ul');
        subul.show();
        $("#liSubMenu" + Cont + "" + pgurl + " a").addClass('active');
    }
}
function AddmanualClass(Cont, pgurl) {
    $("#liMainMenu" + Cont + "" + pgurl).addClass('active');

    if ($("#liSubMenu" + Cont + "" + pgurl).length > 0) {

        $("#liSubMenu" + Cont + "" + pgurl).parent("ul").parent('li').find('a.mainmenu').addClass('active');
        $("#liSubMenu" + Cont + "" + pgurl).parent("ul").parent('li').addClass('menu-open');
        var subul = $("#liMenu" + Cont + "" + pgurl).parent().parent('ul');
        subul.show();
        $("#liSubMenu" + Cont + "" + pgurl + " a").addClass('active');
    }
}

function FillMasterDropdown(type, id, elementClass, firstoptionText) {
    $.ajax({
        url: '/Common/' + type + '/' + id,
        type: "GET",
        async: false,
        success: function (data) {
            var result = data.response;
            $("." + elementClass).empty();
            if (firstoptionText.length > 0) {
                $("." + elementClass).get(0).options[0] = new Option(firstoptionText, 0);
            }
            $.each(result, function (i, Result) {
                $("." + elementClass).append('<option value="' + Result.value + '">' + Result.name + '</option>');
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
}

function FillChildDropdown(e, type, elementClass, firstoptionText = '') {
    var pid = $(e).val();
    if (pid != "0") {
        if (firstoptionText.length > 0) {
            FillMasterDropdown(type, pid, elementClass, firstoptionText);
        }
        else {
            FillMasterDropdown(type, pid, elementClass, 'Select ' + type);
        }
    }
    else {
        $("." + elementClass).empty();
        if (firstoptionText.length > 0) {
            $("." + elementClass).get(0).options[0] = new Option(firstoptionText, 0);
        }
        else {
            $("." + elementClass).get(0).options[0] = new Option("Select " + type, 0);
        }
        $("." + elementClass).trigger('change')
    }
}

//$("#frmMapAddress").validate({
//    rules: {
//        MapAddress: {
//            required: true,
//        },
//        maplatitude: {
//            required: true,
//        },
//        maplongitude: {
//            required: true,
//        }
//    },
//    //For custom messages
//    messages: {
//        MapAddress: {
//            required: "Enter Address",
//        },
//        maplatitude: {
//            required: "Select the address in the map",
//        },
//        maplongitude: {
//            required: "Select the address in the map",
//        }
//    },
//    errorElement: 'div',
//    errorPlacement: function (error, element) {
//        var placement = $(element).data('errors');
//        if (element.parent('.input-group').length) {
//            error.insertAfter(element.parent());      // radio/checkbox?
//        } else if (element.hasClass('select2-hidden-accessible')) {
//            error.insertAfter(element.next('span'));  // select2
//        } else {
//            error.insertAfter(element);
//        }
//    }
//});

function DateTimeConvert(strDate) {
    var d = strDate.split('-');
    return new Date(d[2] + "-" + d[1] + "-" + d[0]);
}

function ModelViewImage(e, title) {
    $('.divivtitle').html(title);
    var imgutl = $(e).attr('src');
    $('.modelimgview').attr('src', imgutl);
    $('#model_ViewImage_modal').modal('show');
}

function ModelViewPdf(url, title) {
    $('.divpdftitle').html(title);
    $('.modepdfViewer').attr('src', url);
    $('#model_ViewPDF_modal').modal('show');
}

function CloseModelViewPdf() {
    $('.divpdftitle').html('');
    $('.modepdfViewer').attr('src', '');
    $('#model_ViewPDF_modal').modal('hide');

}

function handleAjaxError(xhr, status, error) {
    loader(0);
    // Handle errors
    if (xhr.status === 401) {
        // Unauthorized access
        MessagealertwithRedirect("e", "Login expired. please log in again.", "/Login/LoginIndex");
    } else if (xhr.status === 404) {
        // Resource not found
        Messagealert('e', 'Resource not found');
    } else if (xhr.status === 500) {
        // Internal server error
        Messagealert('e', 'Internal server error');
    } else {
        // Other error codes
        Messagealert('e', 'Error : ' + xhr.status + " " + xhr.statusText);

    }
}
function IntlCkeditor(id) {
    CKEDITOR.replace(id, {
        //skin: 'moono',//moono,kama
        toolbar: [
            { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo'] },
            //{ name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
            //{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
            //'/',
            { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike'] },
            { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
            { name: 'colors', items: ['TextColor', 'BGColor'] },
            { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
            // { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
            { name: 'links', items: ['Link', 'Unlink'] },
            { name: 'insert', items: ['Image', 'Table'] },
            //{ name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
            //'/',
            { name: 'tools', items: ['Maximize', 'ShowBlocks', '-', 'Source'] },
            // { name: 'document', items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
            //{ name: 'about', items: [ 'About' ] }
        ]
    });

}
//$.ajaxSetup({
//    error: handleAjaxError
//});


function iswithoutminus(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode == 45)
        return false;
    else
        return true;
}

function isNumberKeyWithStar(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 42)
        return false;
    return true;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function isNumberKeyWithMinus(evt, txt) {
    // alert(txt.count('-'));
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var vl = evt.target.value;
    //alert(vl.indexOf('-'));
    if (charCode == 45 || charCode == 46) {
        if (evt.target.value.search(/\./) > -1 && charCode == 46)
            return false;
        else if (evt.target.value.search(/\-/) > -1 && charCode == 45) {
            return false;
        } else
            return true;
    }
    else if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function iswithoutminus(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode == 45)
        return false;
    else
        return true;
}
function isNumberKeyForAmount(evt) {

    var charCode = (evt.which) ? evt.which : event.keyCode;
    var vl = evt.target.value;

    if (charCode == 45 || charCode == 46) {
        if (evt.target.value.search(/\./) > -1 && charCode == 46)
            return false;
        //else if (evt.target.value.search(/\-/) > -1 && charCode == 45) {
        else if (charCode == 45) {
            return false;
        }
        else
            return true;
    }
    else if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
        return false;

    return true;
}
function isContact(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 43)
        return false;
    return true;
}
function isNumberKey0To5(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 53))
        return false;
    return true;
}

function isCharNumDashKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode == 8 || charCode == 45 || (charCode > 47 && charCode < 58) || (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
        return true;
    return false;
}

//Custom jquery validation

////Email Validation
//jQuery.validator.addMethod("emailExt", function (value, element, param) {
//    if (value.length) {
//        return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{1,}$/);
//    }
//    else {
//        return true;
//    }
//}, 'Your E-mail is wrong');

////dropdown validation 
//$.validator.addMethod("CmbValid", function (Cmb, element) {
//    return this.optional(element) || Cmb != 0
//}, "Selected value not valid");

////not allowed @ character
//$.validator.addMethod("noAttheratesign", function (value, element) {
//    return !/[@@]/.test(value);
//}, "@ character are not allowed");
////not allowed Spaces 
//$.validator.addMethod("noSpace", function (value, element) {
//    return value.indexOf(" ") < 0 && value != "";
//}, "Spaces are not allowed");
////not allowed Empty Spaces 
//$.validator.addMethod("noEmptySpaces", function (value, element) {
//    return $.trim(value) !== "";
//}, "Enter a non-empty value.");
////File size validaiton
////$.validator.addMethod('maxfilesize', function (value, element, param) {
////    return this.optional(element) || (element.files[0].size <= param * 1000000)
////}, 'File size must be less than {0} MB');
////Date jquery validation

function dateConvert(date) {
    var dateParts = date.split("-");
    var year = parseInt(dateParts[2]);
    var month = parseInt(dateParts[1]) - 1;
    var day = parseInt(dateParts[0]);
    var selectedDate = new Date(year, month, day);
    return selectedDate;
}

//$.validator.addMethod("DateEqualGreaterThan", function (value, element, params) {
//    var fdate = $(params).val();
//    var fromDate = new Date(dateConvert(fdate));
//    var toDate = new Date(dateConvert(value));
//    return toDate >= fromDate;
//}, "To date should be equal to or greater than the from date");

//$.validator.addMethod("DateGreaterThan", function (value, element, params) {
//    var fdate = $(params).val();
//    var fromDate = new Date(dateConvert(fdate));
//    var toDate = new Date(dateConvert(value));
//    return toDate > fromDate;
//}, "To date should be greater than the from date");

//$.validator.addMethod("DateEqualLessThan", function (value, element, params) {
//    var fdate = $(params).val();
//    var fromDate = new Date(dateConvert(fdate));
//    var toDate = new Date(dateConvert(value));
//    return toDate <= fromDate;
//}, "To date should be equal to or less than the from date");
//$.validator.addMethod("DateLessThan", function (value, element, params) {
//    var fdate = $(params).val();
//    var fromDate = new Date(dateConvert(fdate));
//    var toDate = new Date(dateConvert(value));
//    return toDate < fromDate;
//}, "To date should be less than the from date");

function formatNumber(num) {
    input = num.toFixed(2);
    var n1, n2;
    num = num + '' || '';
    // works for integer and floating as well
    n1 = num.split('.');
    n2 = n1[1] || null;
    n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    num = n2 ? n1 + '.' + n2 : n1;
    return num;
}
function Amountformat(amt) {
    if (amt == null || amt == undefined) {
        return '';
    }
    var components = amt.toFixed(2).toString().split(".");
    components[0] = components[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return components.join(".");
}
function removeAmountformat(amt) {
    return amt.replace(/,/g, "");
}
function Qtyformat(qty, decimal) {
    if (!qty) {
        qty = 0;
    }
    return qty.toFixed(decimal);
}


