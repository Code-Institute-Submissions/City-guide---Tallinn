//click on top nav button to move further down the page to specific section//
function moveTo() {
    let findOnPage = document.getElementById("recommended-event");
    findOnPage.scrollIntoView();
};

function moveToTravel() {
    let findOnPage = document.getElementById("travel");
    findOnPage.scrollIntoView();

};


///travel section customer counter function///

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


///newsletter signup functions///

function registerToNewsLetter() {

    var inputEmail = document.getElementById('newsletter-signup').value;

    if (inputEmail === "") {
        alert('You need to fill in e-mail address')
    } else {
        emailjs.send("gmail", "newsletter_signup", {
            "e_mail": inputEmail
        })
        alert('Sign up successful')
    }
};


//click function to hides and show recommendatios section// 


$(document).ready(function() {


    $('#recommended-event').click(function() {
        if ($('.events').css('visibility') == 'hidden')
            $('.events').css('visibility', 'visible');
        else
            $('.events').css('visibility', 'hidden');
    });

    $('#recommended-places').click(function() {
        if ($('.places').css('visibility') == 'hidden')
            $('.places').css('visibility', 'visible');
        else
            $('.places').css('visibility', 'hidden');
    });

    $('#recommended-food-drink').click(function() {
        if ($('.food-drinks').css('visibility') == 'hidden')
            $('.food-drinks').css('visibility', 'visible');
        else
            $('.food-drinks').css('visibility', 'hidden');
    });


    $('#recommended-nightlife').click(function() {
        if ($('.nightlife').css('visibility') == 'hidden')
            $('.nightlife').css('visibility', 'visible');
        else
            $('.nightlife').css('visibility', 'hidden');
    });

})