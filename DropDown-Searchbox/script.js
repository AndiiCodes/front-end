const dropdownElem = document.getElementById("dropdown");
const dropdownListElem = document.getElementById("dropdown-list");
const dropdownSelectElem = document.getElementById("dropdown-selected");
const dropdownOptionElems = dropdownListElem.querySelectorAll("li");
const dropdownToggle = document.getElementById("dropdown-toggle");

dropdownToggle.addEventListener("input", (e) => {
  if (e.target.checked) {
    dropdownElem.setAttribute("data-open", true);
  } else {
    dropdownElem.setAttribute("data-open", false);
  }
});

dropdownListElem.addEventListener("click", (e) => {
  // check if user clicked on options
  if (e.target.dataset.option) {
    // first, remove all highlighted option
    dropdownOptionElems.forEach((option) => {
      option.classList.remove("active");
    });

    // ...then, highlight the selected option
    e.target.classList.add("active");
    
    // update the text to selected option
    dropdownSelectElem.innerHTML = e.target.textContent;

    // close the dropdown
    dropdownToggle.checked = false;
    dropdownElem.setAttribute("data-open", false);
  }
});
