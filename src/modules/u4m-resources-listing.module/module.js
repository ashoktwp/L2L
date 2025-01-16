window.addEventListener("DOMContentLoaded", function () {
  let getLIstingWrap = document.querySelector(
    ".resourcesListingWrap .main-listing"
  );

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

//

const wrapper = document.querySelector(".resourceList");
const pagination = document.querySelector(".pagination");
const items = Array.from(document.querySelectorAll(".resourceCard"));
let filteredItems = items;
let currPage = 1;
const TagSelect = document.querySelector(".resourceSelect");
const TopicSelect = document.querySelector(".topicSelect");
const TypeSelectCheck = document.querySelectorAll(".typeSelect .filter_input");
const searchField = document.querySelector(".resourceInput");
const TypeSelectLabel = document.querySelector(".type_filter_label");

// ===================
function filterItems(el, keyword, type, topic) {
  const title = el.querySelector(".restitle").innerText.toLowerCase();
  const hasKeyword = !keyword || title.includes(keyword);

  const isOfType =
    !type?.length || type.some((filter) => el.classList.contains(filter));
  const isOfTopic = !topic || el.classList.contains(topic);

  console.log(hasKeyword);
  return hasKeyword && isOfType && isOfTopic;
}

let typeArrayValues = "";

function typeArrayUpdate(value) {
  typeArrayValues = value;
}

function printTypeArrayUpdate() {
  return typeArrayValues;
}

function MainLogic(reset = false, inputValue, typeValues, topicValues) {
  const keywordText = inputValue || searchField.value;
  const keyword = keywordText.toLowerCase();
  const typeCheck = typeValues;
  const topic = topicValues;

  filteredItems = reset
    ? items
    : items.filter((el) => filterItems(el, keyword, typeCheck, topic));

  currPage = 1;

  if (filteredItems.length !== 0) {
    pagination.style.display = "flex";
    setHTML(filteredItems);
  } else {
    pagination.style.display = "none";
    wrapper.innerHTML = "<p class='col statusCnt'>Coming soon.</p>";
  }
}

function calculatePagination(
  totalItems,
  currentPage = 1,
  pageSize = 6,
  maxPages = 4
) {
  let startPage,
    endPage,
    totalPages = Math.ceil(totalItems / pageSize);

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  return {
    totalItems: totalItems,
    currentPage: currentPage,
    pageSize: pageSize,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages,
  };
}

function setHTML(items) {
  wrapper.innerHTML = "";
  pagination.innerHTML = "";

  const {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
  } = calculatePagination(items.length, currPage, 6, 6);

  const nav = document.createElement("nav");
  nav.classList.add(
    "relative",
    "z-0",
    "inline-flex",
    "rounded-md",
    "shadow-sm",
    "-space-x-px"
  );

  let paginationHTML = "";
  paginationHTML += `<button ${currentPage === 1 && "disabled"
    } class="prev-link ${currentPage === 1 ? "cursor-not-allowed" : "prev"
    } prevnext">\n<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
						<path d="M6.85403 0.145971L11.854 5.14597C11.9005 5.19241 11.9374 5.24755 11.9626 5.30825C11.9877 5.36895 12.0007 5.43401 12.0007 5.49972C12.0007 5.56543 11.9877 5.63049 11.9626 5.69119C11.9374 5.75189 11.9005 5.80704 11.854 5.85347L6.85403 10.8535C6.76021 10.9473 6.63296 11 6.50028 11C6.3676 11 6.24035 10.9473 6.14653 10.8535C6.05271 10.7597 6 10.6324 6 10.4997C6 10.367 6.05271 10.2398 6.14653 10.146L10.7934 5.49972L6.14653 0.853472C6.10007 0.807016 6.06322 0.751866 6.03808 0.69117C6.01294 0.630473 6 0.565419 6 0.499722C6 0.434024 6.01294 0.36897 6.03808 0.308273C6.06322 0.247577 6.10007 0.192427 6.14653 0.145971C6.19298 0.0995159 6.24813 0.0626669 6.30883 0.0375252C6.36953 0.0123835 6.43458 -0.000556946 6.50028 -0.000556946C6.56598 -0.000556946 6.63103 0.0123835 6.69173 0.0375252C6.75242 0.0626669 6.80757 0.0995159 6.85403 0.145971Z" fill="#2E2E2E"/>
						<path d="M0.854028 0.145971L5.85403 5.14597C5.90052 5.19241 5.9374 5.24755 5.96256 5.30825C5.98772 5.36895 6.00067 5.43401 6.00067 5.49972C6.00067 5.56543 5.98772 5.63049 5.96256 5.69119C5.9374 5.75189 5.90052 5.80704 5.85403 5.85347L0.854028 10.8535C0.760208 10.9473 0.63296 11 0.500278 11C0.367596 11 0.240348 10.9473 0.146528 10.8535C0.0527074 10.7597 0 10.6324 0 10.4997C0 10.367 0.0527074 10.2398 0.146528 10.146L4.7934 5.49972L0.146528 0.853472C0.100073 0.807016 0.0632225 0.751866 0.0380812 0.69117C0.0129398 0.630473 0 0.565419 0 0.499722C0 0.434024 0.0129398 0.36897 0.0380812 0.308273C0.0632225 0.247577 0.100073 0.192427 0.146528 0.145971C0.192983 0.0995159 0.248133 0.0626669 0.30883 0.0375252C0.369526 0.0123835 0.434581 -0.000556946 0.500278 -0.000556946C0.565975 -0.000556946 0.63103 0.0123835 0.691726 0.0375252C0.752423 0.0626669 0.807573 0.0995159 0.854028 0.145971Z" fill="#2E2E2E"/>
						</svg>\n</button>`;

  pages.forEach((page) => {
    paginationHTML +=
      currentPage === page
        ? `<button class=" active para gray_border black_color light_bg z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" page="${page}" disabled>${page}</button>`
        : `<button class="para gray_border black_color light_bg page bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" page="${page}">${page}</button>`;
  });

  paginationHTML += `<button ${currentPage === endPage && "disabled"
    } class="next-link ${currentPage === endPage ? "cursor-not-allowed" : "next "
    } prevnext">\n<svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
						<path d="M6.85403 0.145971L11.854 5.14597C11.9005 5.19241 11.9374 5.24755 11.9626 5.30825C11.9877 5.36895 12.0007 5.43401 12.0007 5.49972C12.0007 5.56543 11.9877 5.63049 11.9626 5.69119C11.9374 5.75189 11.9005 5.80704 11.854 5.85347L6.85403 10.8535C6.76021 10.9473 6.63296 11 6.50028 11C6.3676 11 6.24035 10.9473 6.14653 10.8535C6.05271 10.7597 6 10.6324 6 10.4997C6 10.367 6.05271 10.2398 6.14653 10.146L10.7934 5.49972L6.14653 0.853472C6.10007 0.807016 6.06322 0.751866 6.03808 0.69117C6.01294 0.630473 6 0.565419 6 0.499722C6 0.434024 6.01294 0.36897 6.03808 0.308273C6.06322 0.247577 6.10007 0.192427 6.14653 0.145971C6.19298 0.0995159 6.24813 0.0626669 6.30883 0.0375252C6.36953 0.0123835 6.43458 -0.000556946 6.50028 -0.000556946C6.56598 -0.000556946 6.63103 0.0123835 6.69173 0.0375252C6.75242 0.0626669 6.80757 0.0995159 6.85403 0.145971Z" fill="#2E2E2E"/>
						<path d="M0.854028 0.145971L5.85403 5.14597C5.90052 5.19241 5.9374 5.24755 5.96256 5.30825C5.98772 5.36895 6.00067 5.43401 6.00067 5.49972C6.00067 5.56543 5.98772 5.63049 5.96256 5.69119C5.9374 5.75189 5.90052 5.80704 5.85403 5.85347L0.854028 10.8535C0.760208 10.9473 0.63296 11 0.500278 11C0.367596 11 0.240348 10.9473 0.146528 10.8535C0.0527074 10.7597 0 10.6324 0 10.4997C0 10.367 0.0527074 10.2398 0.146528 10.146L4.7934 5.49972L0.146528 0.853472C0.100073 0.807016 0.0632225 0.751866 0.0380812 0.69117C0.0129398 0.630473 0 0.565419 0 0.499722C0 0.434024 0.0129398 0.36897 0.0380812 0.308273C0.0632225 0.247577 0.100073 0.192427 0.146528 0.145971C0.192983 0.0995159 0.248133 0.0626669 0.30883 0.0375252C0.369526 0.0123835 0.434581 -0.000556946 0.500278 -0.000556946C0.565975 -0.000556946 0.63103 0.0123835 0.691726 0.0375252C0.752423 0.0626669 0.807573 0.0995159 0.854028 0.145971Z" fill="#2E2E2E"/>
						</svg>\n</button>`;

  nav.innerHTML = paginationHTML;
  pagination.append(nav);

  nav.classList.add("count" + totalPages);
  const start = (currentPage - 1) * pageSize;
  const end = currentPage * pageSize;
  items.slice(start, end).forEach((el) => {
    wrapper.append(el);
  });
}

var params = new URLSearchParams(window.location.search);
var typeParam = params.get("type");

var typeArray = typeParam?.length > 0 ? typeParam?.split(",") : [];

// ==========

searchField.addEventListener("keyup", (g) => {
  g.preventDefault();
  const getInputVaue = $(this).value;
  const topicSelectValue = TopicSelect.value;
  MainLogic(
    typeArray?.length > 0 || topicSelectValue?.length > 0 ? false : true,
    getInputVaue,
    typeArray,
    topicSelectValue
  );
});

TypeSelectCheck.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const value = event.target.value;
    var url = window.location.href.split("?")[0];
    var newUrl;

    const inputValue = searchField.value;

    let topicSelectValue = TopicSelect.value;

    if (event.target.checked) {
      if (value?.length > 0) {
        typeArray.push(value);
      }
    } else {
      event.target.removeAttribute("checked");
      typeArray.splice(typeArray.indexOf(value), 1);
    }

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

    if (typeArray != "" || topicSelectValue != "") {
      if (window.location.href.indexOf("?") > 0) {
        newUrl =
          url + "?topic=" + topicSelectValue + "&type=" + typeArray.join(",");
      } else {
        newUrl =
          url + "?topic=" + topicSelectValue + "&type=" + typeArray.join(",");
      }
      window.history.pushState({ path: newUrl }, "", newUrl);
    } else {
      window.history.pushState({ path: url }, "", url);
    }
    typeArrayUpdate(typeArray);
    MainLogic(
      typeArray?.length > 0 || topicSelectValue?.length > 0 ? false : true,
      inputValue,
      typeArray,
      topicSelectValue
    );
  });
});

// ==============
TopicSelect.addEventListener("change", (f) => {
  f.preventDefault();
  const getValue = f.target.value;
  var url = window.location.href.split("?")[0];
  const inputValue = searchField.value;

  if (typeArray != "" || getValue != "") {
    if (window.location.href.indexOf("?") > 0) {
      newUrl = url + "?topic=" + getValue + "&type=" + typeArray.join(",");
    } else {
      newUrl = url + "?topic=" + getValue + "&type=" + typeArray.join(",");
    }
    window.history.pushState({ path: newUrl }, "", newUrl);
  } else {
    window.history.pushState({ path: url }, "", url);
  }
  MainLogic(
    typeArray?.length > 0 || getValue?.length > 0 ? false : true,
    inputValue,
    typeArray,
    getValue
  );
});

document.addEventListener("click", (e) => {
  const $this = e.target;
  if ($this.classList.contains("page")) {
    const pageNumber = $this.getAttribute("page");
    if (pageNumber) {
      currPage = parseInt(pageNumber);
      setHTML(filteredItems);
    }
  }
  if ($this.classList.contains("next")) {
    currPage += 1;
    setHTML(filteredItems);
  }
  if ($this.classList.contains("prev")) {
    currPage -= 1;
    setHTML(filteredItems);
  }
});

setHTML(filteredItems);

//

// Function to get text after /resources/ from the URL
// function getTextAfterResources(url) {
//   const path = new URL(url).pathname;
//   const parts = path.split('/resources/');
//   return parts.length > 1 ? parts[1] : null;
// }

// Function to match select option and trigger change event
// function matchAndLoadData() {
//   const url = window.location.href;
//   const resourceText = getTextAfterResources(url);

//   console.log(resourceText)

//   MainLogic( typeArray?.length > 0 || getValue?.length > 0 ? false : true, inputValue, typeArray,getValue);

//   if (resourceText) {
//     const selectElement = document.querySelector('.resourceSelect');
//     const options = selectElement.options;

//     for (let i = 0; i < options.length; i++) {
//       if (options[i].value === resourceText) {
//         selectElement.value = resourceText;

//         // Trigger change event to load data
//         const event = new Event('change');
//         selectElement.dispatchEvent(event);
//         console.log(selectElement.value,'selectElement.value')
//         break;
//         console.log("break")
//       }
//     }
//   }
// }

// Call the function on page load
window.addEventListener("DOMContentLoaded", function () {
  const url = window.location.href;

  const path = new URL(url).pathname;
  const parts = path.split("/resources");

  var topicText = parts.length > 1 ? parts[1].replace("/", "") : null;

  if (topicText != "") {
    TopicSelect.value = topicText;
    TopicSelect.dispatchEvent(new Event("change"));
  }
  if (topicText == "") {
    TopicSelect.value = "Filter by Type";
    TopicSelect.dispatchEvent(new Event("change"));
    TopicSelect.selectedIndex = 0;
  }
});
