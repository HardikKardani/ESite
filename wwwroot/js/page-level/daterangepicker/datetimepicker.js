$(window).on("load",function(){

   
    $('#timepicker').daterangepicker({
        timePicker : true,
        timePicker24Hour : true,
        timePickerIncrement : 1,
        timePickerSeconds : true,
        locale : {
            format : 'HH:mm:ss'
        }
    }).on('show.daterangepicker', function(ev, picker) {
        picker.container.find(".calendar-table").hide();
});
});


