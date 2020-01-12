/////////maps code for searchbox and autocomplete taken mainly from developers.google.com 
//and adjusted to work for current webpage//////

let pos;
let map;
let markers = [];





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




    // Location bias added to the SearchBox results towards current map's viewport.



    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });




    searchBox.addListener('places_changed', function() {

        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        removeMarkers()




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
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }

        });
        map.fitBounds(bounds);

    });



}





////below function will , onclick , display the marker of the recommended location on google maps
/// and move viewpoint on the map , when clicking on marker infowindow will be displayed


let locations = {
    seaPlaneHarbour: [59.4516884, 24.7383098, '<a href="http://meremuuseum.ee/lennusadam/en/the-museum/the-seaplane-harbours-story/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    proto: [59.4383745, 24.7283514, '<a href="https://prototehas.ee/en/home/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    fotografiska: [59.4383745, 24.7283514, '<a href="https://www.fotografiska.com/tallinn/en/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    telliskivi: [59.439518, 24.7284773, '<a href="https://telliskivi.cc/en/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    kumu: [59.4361949, 24.7961812, '<a href="https://kumu.ekm.ee/en/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    ratasKaevu: [59.4369154, 24.7424514, '<a href="http://rataskaevu16.ee/en/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    parrot: [59.4354577, 24.7452601, '<a href="https://www.facebook.com/parrotminibar/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    mathiasD: [59.4520651, 24.7282848, '<a href="https://180degrees.ee/restaurant" target=_"blank">' +
        'Click here to read more</a> '
    ],
    koht: [59.4382365, 24.7438458, '<a href="https://www.facebook.com/tubakas" target=_"blank">' +
        'Click here to read more</a> '
    ],
    mannaLaRoosa: [59.437424, 24.7526194, '<a href="http://www.mannalaroosa.com/front.html" target=_"blank">' +
        'Click here to read more</a> '
    ],
    frankU: [59.4359316, 24.7477253, '<a href="http://www.frankbistro.ee/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    kiviP: [59.438617, 24.7280598, '<a href="http://kivipaber.ee/en/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    shvips: [59.4389384, 24.7260338, '<a href="http://www.shvips.ee/" target=_"blank">' +
        'Click here to read more</a> '
    ],
    saund: [59.4362423, 24.7480849, '<a href="https://www.facebook.com/saundmusicbar/">' +
        'Click here to read more</a> '
    ],
    teater: [59.4327102, 24.7447364, '<a href="http://www.klubiteater.ee/en/about-teater" target=_"blank">' +
        'Click here to read more</a> '
    ],

}

function markerDisplayLocation(location) {
    let lat = locations[location][0]
    let lng = locations[location][1]
    content = locations[location][2]

    let display = new google.maps.LatLng(lat, lng);
    let markerDisplay = createMarker(display);


    removeMarkers();
    markers.push(markerDisplay)
    markerDisplay.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}



function removeMarkers() {
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
    markers = [];
}


function createMarker(display) {



    let infowindow = new google.maps.InfoWindow({
        content: content
    })


    let marker = new google.maps.Marker({
        position: display,
        map: map,
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);

    });
    return marker;

}

$('.show-marker').on('click', function() {
    let location = $(this).attr('id')
    markerDisplayLocation(location)

})