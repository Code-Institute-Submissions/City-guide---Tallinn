/////////code copied from developers.google.com and adjusted to work for current webpage//////

let pos;
let map;




/// let searchInfo; - commented out as part of nearbyplaces function which is not used at this stage


function initMap() {

    pos = { lat: 59.4370, lng: 24.7536 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 12
    });

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(59.4407433, 24.5408145),
        new google.maps.LatLng(59.397255, 25.0244483));

    var input = document.getElementById('map_search');

    var options = {

        types: ['establishment'],
        componentRestrictions: { country: 'ee' }
    };

    var searchBox = new google.maps.places.SearchBox(input, options, {
        bounds: defaultBounds
    });

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];


    searchBox.addListener('places_changed', function() {

        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];


        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 35)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }

        });
        map.fitBounds(bounds);

    });




    // getNearbyPlaces(pos); -- commented out as nearbyplaces function not used at this stage 
}




/* code commented out as not relevant at this point

function getNearbyPlaces(position) {

    let request = {
        location: position,
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: 'kivi paber käärid'

    };


    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
}



function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarkers(results);
    }

}


function findPlaceFromQuery(query, position) {

}


function createMarkers(places) {
    places.forEach(place => {
        let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
        });


    });


} */