//click on top nav button to move further down the page to specific section//
function moveTo() {
    let findOnPage = document.getElementById("recommended-event");
    findOnPage.scrollIntoView();

};

function moveToTravel() {
    let findOnPage = document.getElementById("travel");
    findOnPage.scrollIntoView();

};


let counter = document.getElementById('count'),
    count = 0;

function incrementCounter() {
    if (count < 9) {
        count += 1;
    }
    counter.innerHTML = count;
};

function decrementCounter() {
    if (count > 0) {
        count -= 1;
    }
    counter.innerHTML = count;
};


///travel section calendar function///

$(document).ready(function() {
    $('#choose_outbound').datepicker();
    $('#choose_return').datepicker();
});