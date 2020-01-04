/////////code copied from developers.google.com and adjusted to work for current webpage//////

let pos;
let map;


function initMap() {

    pos = { lat: 59.4370, lng: 24.7536 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 12
    });

    getNearbyPlaces(pos);
}


function getNearbyPlaces(position) {

    let request = {
        location: position,
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: 'linnahall'
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
}



function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarkers(results);
    }

}



function createMarkers(places) {
    places.forEach(place => {
        let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
        });


    });

}