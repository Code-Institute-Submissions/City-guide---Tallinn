//below code is taken from developer.google.com as it's a part of google.maps API documentation
//and is required to make google maps function

function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 59.4370, lng: 24.7536 },
        zoom: 10
    });





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
    { lat: 59.451395, lng: 24.7340436 },
    { lat: 59.4514966, lng: 24.7275039 },
    { lat: 59.438427, lng: 24.726175 },
    { lat: 59.439829, lng: 24.7267392 },
    { lat: 59.436212, lng: 24.7938084 },
    { lat: 59.4369247, lng: 24.7403846 },
    { lat: 59.4354554, lng: 24.7431941 },
    { lat: 59.4520567, lng: 24.7261848 },
    { lat: 59.4382285, lng: 24.7417204 },
    { lat: 59.4374215, lng: 24.7504393 },
    { lat: 59.4385847, lng: 24.7259518 },
    { lat: 59.4389342, lng: 24.7239269 },
    { lat: 59.435945, lng: 24.7455922 },
    { lat: 59.4392169, lng: 24.7258886 },
    { lat: 59.432702, lng: 24.7426103 }
];