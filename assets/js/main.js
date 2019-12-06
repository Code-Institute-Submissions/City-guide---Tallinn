//click on top nav button to move further down the page to specific section//
function moveTo() {
    let findOnPage = document.getElementById("recommended-event");
    findOnPage.scrollIntoView();

};

function moveToTravel() {
    let findOnPage = document.getElementById("travel");
    findOnPage.scrollIntoView();

};


///travel section calendar function///

$(document).ready(function() {
    $('#choose_outbound').datepicker();
    $('#choose_return').datepicker();
});