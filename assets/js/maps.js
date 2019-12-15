//most parts of below code is taken from developer.google.com from google.maps API documentation


function initMap() {


    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 59.4370, lng: 24.7536 },
        zoom: 10
    });

    var searchInput = document.getElementById('map_search');

    //autocomplete and search function code has been taken from codexworld solution
    //with some adjustments made to personalise for this site

    var autocomplete = new google.maps.places.Autocomplete(searchInput);
    autocomplete.bindTo('bounds', map)

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(59.4370, 24.7536)
    })




    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("No geometry provided for location!")
            return;
        }
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(16);
        }
        marker.setIcon(({
            url: place.icon,
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);





    })



    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
};

var locations = [
    { lat: 59.4516884, lng: 24.7383098 },
    { lat: 59.4515258, lng: 24.7296698 },
    { lat: 59.4383745, lng: 24.7283514 },
    { lat: 59.439518, lng: 24.7284773 },
    { lat: 59.4361949, lng: 24.7961812 },
    { lat: 59.4369154, lng: 24.7424514 },
    { lat: 59.4354577, lng: 24.7452601 },
    { lat: 59.4520651, lng: 24.7282848 },
    { lat: 59.4382365, lng: 24.7438458 },
    { lat: 59.437424, lng: 24.7526194 },
    { lat: 59.4359316, lng: 24.7477253 },
    { lat: 59.438617, lng: 24.7280598 },
    { lat: 59.4389384, lng: 24.7260338 },
    { lat: 59.4392068, lng: 24.7279627 },
    { lat: 59.4327102, lng: 24.7447364 },

]