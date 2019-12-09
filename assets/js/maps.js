//parts of below code is taken from developer.google.com as it's a part of google.maps API documentation
//and is required to make google maps function
function initMap() {

    infowindow = new google.maps.InfoWindow();

    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 59.4370, lng: 24.7536 },
        zoom: 10
    });
};