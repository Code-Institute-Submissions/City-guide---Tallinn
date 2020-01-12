//click on top nav button to move further down the page to specific section//



function moveTo() {
    let findOnPage = document.getElementById("recommendations");
    findOnPage.scrollIntoView();
};

function moveToTravel() {
    let findOnPage = document.getElementById("travel");
    findOnPage.scrollIntoView();

};




///travel section customer counter function, can count up to max 9 passengers which is travel industry standard per reservation///



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





///newsletter signup functions, generates email to site owner, if no email or incorrect format provided alert is displayed///
/// if successful sign up also alert is displayed that




function registerToNewsLetter() {

    var emailValidator = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var inputEmail = document.getElementById('newsletter-signup').value;

    if (inputEmail === "") {
        alert('You need to fill in e-mail address')
    } else if (inputEmail !== emailValidator) {
        alert('Invalid e-mail address provided')
    } else {
        emailjs.send("gmail", "newsletter_signup", {
            "e_mail": inputEmail
        })
        alert('Sign up successful')
    }
};





//click function to hides and show recommendatios section when clicked on specific option// 




$(document).ready(function() {


    $('#recommended-event').on('click', function() {
        $('.events').toggle('slow')
        $('.places, .food-drinks, .nightlife').hide('slow')

    })

    $('#recommended-places').on('click', function() {
        $('.places').toggle('slow')
        $('.events, .food-drinks, .nightlife').hide('slow')
    })

    $('#recommended-food-drink').on('click', function() {
        $('.food-drinks').toggle('slow')
        $('.places, .events, .nightlife').hide('slow')
    })

    $('#recommended-nightlife').on('click', function() {
        $('.nightlife').toggle('slow')
        $('.places, .food-drinks, .events').hide('slow')
    })
})