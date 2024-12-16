// Form Listener
window.addEventListener('message', function(event) {
  if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
    $("body").last().addClass("form-submitted");
  }
});



window.addEventListener('message', event => {
  if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
    var windowHeight = window.innerHeight;
    var formHeight = $(".form-fixed .inner").height();
    console.log(formHeight);
    if (windowHeight > formHeight) {
      $("body").addClass("stuck-form");
      var Sticky = new hcSticky('.form-fixed .inner', {
        stickTo: '.form-fixed',
        followScroll: false
      });
    }
  }
});