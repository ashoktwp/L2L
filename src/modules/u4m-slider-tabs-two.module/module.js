$(document).ready(function () {
  var timeInterval,
    tabCount = 0,
    currnetIndex = 1;

  tabCount = $(".ctvb-tabs ul").find("li a").length;
  var tabContentObj = $(".ctvb-tabcol"); // Individual tab items
  var tabRow = $(".ctvb-tabbingrow"); // Parent row
  var container = $(".page-center"); // Outer container for viewport control

  function startProgressBar() {
    const progressCircle = document.querySelector(".circle-go");
    const radius = progressCircle.getAttribute("r"); // Get the current radius from the SVG
    const circumference = 2 * Math.PI * radius; // Calculate the circumference

    // Apply the calculated circumference dynamically
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;

    // Animate the progress
    progressCircle.style.transition = "stroke-dashoffset 7s linear";
    progressCircle.style.strokeDashoffset = "0"; // Full progress
  }

  function resetProgressBar() {
    const progressCircle = document.querySelector(".circle-go");
    const radius = progressCircle.getAttribute("r"); // Get the current radius from the SVG
    const circumference = 2 * Math.PI * radius; // Calculate the circumference

    // Reset the circle
    progressCircle.style.transition = "none";
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;

    // Restart progress
    setTimeout(() => {
      startProgressBar();
    }, 50); // Small delay to reset the animation
  }

  function alignActiveTab() {
    var activeTab = tabContentObj.filter(".activetab"); // Find active tab
    var containerWidth = container.width(); // Width of the container
    var tabOffset = activeTab.position().left; // Left position of active tab
    var activeTabWidth = activeTab.outerWidth(true); // Full width of the active tab

    // Calculate the transform amount to keep active tab within container
    var translateX = Math.min(0, containerWidth - tabOffset - activeTabWidth);
    translateX = Math.max(translateX, -tabOffset);

    // Apply transform to the parent
    tabRow.css({
      transform: `translateX(${translateX}px)`,
      transition: "transform 0.5s ease-in-out",
    });
  }

  function changeTabIndex() {
    if (currnetIndex > tabCount) currnetIndex = 1;
    if (currnetIndex < 1) currnetIndex = tabCount;

    tabContentObj.removeClass("activetab"); // Remove previous active class
    var currentTab = tabContentObj.eq(currnetIndex - 1);
    currentTab.addClass("activetab"); // Add active class to current tab

    $(".ctvb-tabs ul li").removeClass("active");
    $(".ctvb-tabs ul li")
      .eq(currnetIndex - 1)
      .addClass("active");

    alignActiveTab(); // Align active tab
  }

  // Previous Arrow Click
  $(".tab-prev-arrow").on("click", function () {
    currnetIndex--;
    changeTabIndex();
    resetProgressBar();
    resetAutoplay();
  });

  // Next Arrow Click
  $(".tab-next-arrow").on("click", function () {
    currnetIndex++;
    changeTabIndex();
    resetProgressBar();
    resetAutoplay();
  });

  // Click on Tab Item
  $(".ctvb-tabcol").on("click", function (e) {
    e.preventDefault(); // Prevent default behavior to avoid scrolling
    currnetIndex = $(this).index() + 1;
    changeTabIndex();
    resetProgressBar();
    resetAutoplay();
  });

  // Click on Tab Link
  $(".ctvb-tabs ul a").on("click", function (e) {
    e.preventDefault(); // Prevent default anchor tag behavior
    var tabId = $(this).attr("tab-item"); // Get tab-item attribute
    var tabIndex = tabContentObj
      .filter(`[id="${tabId.replace("#", "")}"]`)
      .index(); // Find tab index by ID
    if (tabIndex !== -1) {
      currnetIndex = tabIndex + 1;
      changeTabIndex();
      resetProgressBar();
      resetAutoplay();
    }
  });

  // Autoplay Function
  function startAutoplay() {
    timeInterval = setInterval(function () {
      currnetIndex++;
      changeTabIndex();
      resetProgressBar();
    }, 7000);
  }

  function resetAutoplay() {
    clearInterval(timeInterval);
    startAutoplay();
  }

  // Initialize
  tabContentObj.eq(0).addClass("activetab");
  changeTabIndex();
  startProgressBar();
  startAutoplay();
});

$(document).on("click", ".ctvb-tabcol.activetab .ctvb-playbtn", function () {
  $(".ctvb-tabcol.activetab .ctvb-vdo").css({ "z-index": 1, opacity: 1 });
  var atpl = $(this).next(".ctvb-vdo").find("iframe").attr("data-src");
  atpl = $(this).next(".ctvb-vdo").find("iframe").attr("data-src");
  $(this).next(".ctvb-vdo").find("iframe").attr("src", atpl);
  $(
    ".ctvb-tabcol.activetab .ctvb-tabplaceholder , .ctvb-tabcol.activetab .ctvb-btnicon , .ctvb-tabcol.activetab .ctvb-tabottom"
  ).addClass("hidetabdetail");
});
const iframes = document.querySelectorAll("iframe[data-src]");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const iframe = entry.target;
      iframe.src = iframe.dataset.src;
      observer.disconnect();
    }
  });
});
iframes.forEach((iframe) => {
  observer.observe(iframe);
});
$(".ctvb-tabcol:last-child , .ctvb-tabs ul li:last-child").click(function () {
  $(".ctvb-tabbingrow").addClass("activetablast");
});
