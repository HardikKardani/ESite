$(document).on("click",".confirm",function(e){
      $.confirm({
          title: 'Confirm!',
          content: 'Are you sure you want to Delete?',
          buttons: {
              confirm: function () {
                  $.alert('Record Deleted!');
              },
              cancel: function () {
                  $.alert('Canceled!');
              },
              
          }
      });

      e.preventDefault();
});
