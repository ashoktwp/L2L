window.addEventListener("DOMContentLoaded", function () {
  let getLIstingWrap = document.querySelector(".resourcesListingWrap .main-listing");

  setTimeout(function () {
    getLIstingWrap.classList.add("loaddedList");
  });
});

var filterlabeln = document.querySelectorAll(".filter_label");

filterlabeln.forEach((label) => {
  label.addEventListener("click", (event) => {
    event.currentTarget.parentElement.classList.toggle("dropdownopen");
  });
});

document.querySelectorAll(".filter_label").forEach((filterLabel) => {
  filterLabel.addEventListener("click", function (e) {
    const selctArrow = this.parentElement;
    const siblings = Array.from(selctArrow.parentElement.children).filter(
      (child) => child !== selctArrow
    );
    siblings.forEach((sibling) => sibling.classList.remove("dropdownopen"));
    e.stopPropagation();
  });
});

document.body.addEventListener("click", function () {
  document.querySelectorAll(".selctArrow").forEach((selctArrow) => {
    selctArrow.classList.remove("dropdownopen");
  });
});

document.querySelectorAll(".filter_label").forEach((filterLabel) => {
  filterLabel.addEventListener("click", function () {
    const selctArrow = this.parentElement;
    const siblings = Array.from(selctArrow.parentElement.children).filter(
      (child) => child !== selctArrow
    );
    siblings.forEach((sibling) => sibling.classList.remove("dropdownopen"));
  });
});

document.querySelectorAll(".filter_dropdown").forEach((filterDropdown) => {
  filterDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

// ========================

const wrapper = document.querySelector(".resourceList");
const pagination = document.querySelector(".pagination");
const items = Array.from(document.querySelectorAll(".resourceCard"));
let filteredItems = items;
let currPage = 1;
const TagSelect = document.querySelector(".resourceSelect");
const TopicSelect = document.querySelector(".topicSelect");
const TopicSelectValueAttr = $(TopicSelect).attr("data-value");

const TypeSelectCheck = document.querySelectorAll(".typeSelect .filter_input");
const searchField = document.querySelector(".resourceInput");
const TypeSelectLabel = document.querySelector(".type_filter_label");
const TopicSelectLabel = document.querySelector(".topic_filter_label");

// ========================

let typeArrayValues = "";

function typeArrayUpdate(value) {
  typeArrayValues = value;
}

function printTypeArrayUpdate() {
  return typeArrayValues;
}

var params = new URLSearchParams(window.location.search);
var typeParam = params.get("type");

var typeArray = typeParam?.length > 0 ? typeParam?.split(",") : [];

// ========================

// ========================

$(document).on("change", ".typeSelect .filter_input", function (event) {
  const value = $(this).val();

  var url = window.location.href.split("?")[0];
  var newUrl;

  const inputValue = searchField.value;
  let topicSelectValue = $(".topicSelect").attr("data-value");

  if ($(this).is(":checked")) {
    if (value?.length > 0) {
      typeArray.push(value);
    }
  } else {
    $(this).prop("checked", false);
    typeArray.splice(typeArray.indexOf(value), 1);
  }

  var printValue = typeArray;



  var printValue = typeArray;
  if (typeArray != "") {
    TypeSelectLabel.textContent = printValue
      ?.map((tag) => tag.trim())
      ?.map((tag) =>
            tag
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
           )
      .join(", ");
  } else {
    TypeSelectLabel.textContent = "Filter by Topic";
  }
  //   

  if (typeArray.length > 0 || topicSelectValue.length > 0) {
    console.log("check");
    if (window.location.href.indexOf("?") > 0) {
      newUrl = url + "?topic=" + topicSelectValue + "&type=" + typeArray.join(",");
    } else {
      newUrl = url + "?topic=" + topicSelectValue + "&type=" + typeArray.join(",");
    }
    window.history.pushState({ path: newUrl }, "", newUrl);
    $(".listing-wrap .cardSctn").load(newUrl + " .listing-wrap .cardSctn .resourceList");
    $(".pagination").load(newUrl + " .pagination .nav-links");
    //     $(".main-listing .listing-wrap").load(url + " .main-listing .listing-wrap");
  } else {
    window.history.pushState({ path: url }, "", url);
    $(".listing-wrap .cardSctn").load(url + " .listing-wrap .cardSctn .resourceList");
    $(".pagination").load(url + " .pagination .nav-links");
    //     $(".main-listing .listing-wrap").load(url + " .main-listing .listing-wrap");
  }
  typeArrayUpdate(typeArray);
});

//======== 
$(".topic_ele").each(function (f) {
  $(this).click(function (f) {
    f.preventDefault();

    const getValue = $(this).attr("data-topic");
    const getValueLabel = $(this).attr("data-topic-label");


    var url = window.location.href.split("?")[0];

    if(getValueLabel != ""){
      $('.filter_label.topic_filter_label').text(getValueLabel)
    }
    else{
      $('.filter_label.topic_filter_label').text("Filter by Type")
    }

    const inputValue = searchField.value;

    typeArray = [];

    $('.filter_label.type_filter_label').text("Filter by Topic")



    if (typeArray != "" || getValue != "") {
      if (window.location.href.indexOf("?") > 0) {
        newUrl = url + "?topic=" + getValue + "&type=" + typeArray.join(",");
      } else {
        newUrl = url + "?topic=" + getValue + "&type=" + typeArray.join(",");
      }
      window.history.pushState({ path: newUrl }, "", newUrl);
      $(".listing-wrap .cardSctn").load(newUrl + " .listing-wrap .cardSctn .resourceList");
      $(".pagination").load(newUrl + " .pagination .nav-links");


      $(".tag-col .type_filter").load(newUrl + " .tag-col .type_filter > div");
      $(TopicSelect).attr("data-value", getValue);
    } else {
      window.history.pushState({ path: url }, "", url);
      $(".listing-wrap .cardSctn").load(url + " .listing-wrap .cardSctn .resourceList");
      //       $(".main-listing .listing-wrap").load(url + " .main-listing .listing-wrap");
      $(".tag-col .type_filter").load(url + " .tag-col .type_filter > div");
      $(".pagination").load(url + " .pagination .nav-links");
      typeArray = [];
      $(TopicSelect).attr("data-value", "");
    }
  });
});

// ===================


// $(".pagi_wranation .nav-links a").each(function (f) {
$(document).on("click", ".pagi_wranation .nav-links a", function (event) {
  event.preventDefault();
  const currentPageWithQuery = $(this).attr("href");
  window.history.pushState({ path: currentPageWithQuery }, "", currentPageWithQuery);
  $(".listing-wrap .cardSctn").load(currentPageWithQuery + " .listing-wrap .cardSctn .resourceList");
  $(".pagination").load(currentPageWithQuery + " .pagination .nav-links");
  $(".tag-col .type_filter").load(currentPageWithQuery + " .tag-col .type_filter > div");
});



const debounce = (fn, delay = 1000) => {
  let timerId = null;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};


const onInput = debounce(function(currentTarget) {

  const getSearchValue = currentTarget.val();
  const formattedValue = getSearchValue.replace(/\s+/g, "+");
  const getPageNum = currentTarget.data("page-num");


  var url = window.location.href.split("?")[0];

  let topicSelectValue = $(".topicSelect").attr("data-value");



  if(getSearchValue != ""){
    if (window.location.href.indexOf("?") > 0) {
      newUrl = url + "?topic=" + topicSelectValue + "&type=" + typeArray.join(",") + "&search="+ formattedValue;
    } else {
      newUrl = url + "?topic=" + topicSelectValue + "&type=" + typeArray.join(",") + "&search="+ formattedValue;
    }
    window.history.pushState({ path: newUrl }, "", newUrl);
    $(".listing-wrap .cardSctn").load(newUrl + " .listing-wrap .cardSctn .resourceList");
    $(".pagination").load(newUrl + " .pagination .nav-links");
    $(".tag-col .type_filter").load(newUrl + " .tag-col .type_filter > div");

  } else {
    window.history.pushState({ path: url }, "", url);
    $(".listing-wrap .cardSctn").load(url + " .listing-wrap .cardSctn .resourceList");
    $(".tag-col .type_filter").load(url + " .tag-col .type_filter > div");
    $(".pagination").load(url + " .pagination .nav-links");
    typeArray = [];
  }

}, 500);


$('.srchSection .resourceInput').on('keyup', function(event) {
  event.preventDefault();
  onInput($(this));
});



// ==============
function loadEvents() {
  const url = window.location.href;
  const path = new URL(url).pathname;
  const parts = path.split("/resources");

  var topicText = parts.length > 1 ? parts[1].replace("/", "") : null;

  console.log('topicText', topicText);

  $(".topic_ele").each(function() {
    var getTopic = $(this).attr("data-topic-url");
    if (getTopic === topicText) {
      $(this).click();
    }
  });

  console.log('loadEvents loaded');
}

$(document).ready(function() {
  loadEvents();
});

