"use strict";

var userSearch = document.getElementById("user-search");
var dropDown = document.getElementById("select-drop");
var listFAQ = document.querySelectorAll(".faq-container");
var noResult = document.querySelectorAll(".no-result-text");
var valueTracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

userSearch.addEventListener("change", function () {

    var userSearchValue = userSearch.value.toLowerCase();

    for (var i = 0; i < listFAQ.length; i++) {

        for (var n = 0; n < listFAQ[i].children.length; n++) {
            var listH3 = listFAQ[i].children[n].children[0].textContent.toLowerCase();
            var listP = listFAQ[i].children[n].children[1].textContent.toLowerCase();

            // if (listH3.includes(userSearchValue) || listP.includes(userSearchValue)) {
            if (listH3.indexOf(userSearchValue) > -1 || listP.indexOf(userSearchValue) > -1) {
                listFAQ[i].children[n].style.display = "block";
            } else {
                listFAQ[i].children[n].style.display = "none";
                valueTracker[i]++;
            }
        }

        if (userSearchValue == "") {
            noResult[i].innerHTML = "";
            noResult[i].style.display = "none";
        } else if (valueTracker[i] == listFAQ[i].children.length) {
            noResult[i].innerHTML = "No results found.";
            noResult[i].style.display = "block";
            valueTracker[i] = 0;
        } else {
            noResult[i].innerHTML = "";
            noResult[i].style.display = "none";
            valueTracker[i] = 0;
        }
    }
});

// Dropdown
dropDown.addEventListener("change", function () {
    var value = dropDown.options[dropDown.selectedIndex].value;

    var hideList = document.querySelectorAll('.faq-section-container');
    var showItem = document.querySelectorAll("." + value);

    for (var i = 0; i < hideList.length; i++) {
        hideList[i].style.display = "none";
    }

    for (var _i = 0; _i < showItem.length; _i++) {
        showItem[_i].style.display = "block";
    }
});