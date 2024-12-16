// Form Listener
window.addEventListener('message', function (event) {
  if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
    $("body").last().addClass("form-submitted");
  }
});