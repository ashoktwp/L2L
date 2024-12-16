$(document).ready(function() {
  $('.mfp-image').magnificPopup({
    type: 'image'
    // other options
  });

  $('.popout.video, .play-button.popout').magnificPopup({
    type: 'iframe'
    // other options
  });
});