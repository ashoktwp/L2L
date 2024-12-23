document.addEventListener("DOMContentLoaded", () => {
  const sliderTabsSection = document.querySelector(".u4m-slider-tabs-left");

  if (sliderTabsSection) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the functionality when the section comes into view
            initAccordionFunctionality();
            observer.disconnect(); // Stop observing after functionality starts
          }
        });
      },
      {
        root: null, // Default to viewport
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    observer.observe(sliderTabsSection);
  }
});

function initAccordionFunctionality() {
  var autoplayInterval = 10000; // 10 seconds
  var currentIndex = 0;
  var $accordionItems = $(".u4m-slider-tabs-left .acc-items");
  var totalItems = $accordionItems.length;
  var interval;

  // Function to open a specific accordion item
  function openAccordion(index) {
    var $currentItem = $accordionItems.eq(index);
    var acc_ID = $currentItem.find(".title-section").attr("acc-data");

    // Toggle the accordion state
    $currentItem.addClass("acc-open").siblings().removeClass("acc-open");
    $currentItem
      .children(".toggle_section")
      .slideDown(250)
      .parent()
      .siblings()
      .children(".toggle_section")
      .slideUp(250);

    // Reset and apply progress bar animation only to the active item
    $(".progress-line").stop(true).css({ width: 0 }); // Reset all progress bars
    $currentItem
      .find(".progress-line")
      .animate({ width: "100%" }, autoplayInterval);

    // Update the corresponding image
    $(".u4m-slider-tabs-left .slider-tabs-wrapper .left_col .img-items").each(
      function () {
        var imgData = $(this).attr("data-img");
        if (acc_ID === imgData) {
          $(this).addClass("acc-open").siblings().removeClass("acc-open");
        }
      }
    );
  }

  // Start autoplay
  function startAutoplay() {
    interval = setInterval(function () {
      currentIndex = (currentIndex + 1) % totalItems; // Loop through items
      openAccordion(currentIndex);
    }, autoplayInterval);
  }

  // Stop autoplay
  function stopAutoplay() {
    clearInterval(interval);
  }

  // Click event for accordion items
  $(".u4m-slider-tabs-left .title-section").click(function () {
    stopAutoplay(); // Stop autoplay when clicked
    currentIndex = $(this).closest(".acc-items").index(); // Update current index
    openAccordion(currentIndex); // Open the clicked item
    startAutoplay(); // Restart autoplay
  });

  // Initialize first accordion and start autoplay
  openAccordion(currentIndex);
  startAutoplay();
}
