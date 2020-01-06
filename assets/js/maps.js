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



}


////below function will , onclick , display the marker of the recommended location on google maps
/// and scrolls user to view map




//1. Seaplane harbour

function seaplaneHarbour() {

    let seaPlane = new google.maps.LatLng(59.4516884, 24.7383098);
    let seaPlaneMarker = new google.maps.Marker({
        position: seaPlane,
    });

    seaPlaneMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}




//2. Proto Invention factory

function proto() {

    let proto = new google.maps.LatLng(59.4383745, 24.7283514);
    let protoMarker = new google.maps.Marker({
        position: proto,
    });

    protoMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}



//3. fotografiska Tallinn

function fotografiska() {

    let fotografiska = new google.maps.LatLng(59.4383745, 24.7283514);
    let fotografiskaMarker = new google.maps.Marker({
        position: fotografiska,
    });

    fotografiskaMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}




//4. telliskivi creative city

function telliskivi() {

    let telliskivi = new google.maps.LatLng(59.439518, 24.7284773);
    let telliskiviMarker = new google.maps.Marker({
        position: telliskivi,
    });

    telliskiviMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}

//5. KUMU art museum 

function kumu() {

    let kumu = new google.maps.LatLng(59.4361949, 24.7961812);
    let kumuMarker = new google.maps.Marker({
        position: kumu,
    });

    kumuMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}

//6. restaurant rataskaevu 16 

function ratasKaevu() {

    let ratasKaevu = new google.maps.LatLng(59.4369154, 24.7424514);
    let ratasKaevuMarker = new google.maps.Marker({
        position: ratasKaevu,
    });

    ratasKaevuMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}


//7. parrot minibar 

function parrot() {

    let parrot = new google.maps.LatLng(59.4354577, 24.7452601);
    let parrotMarker = new google.maps.Marker({
        position: parrot,
    });

    parrotMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}


//8. 180 degrees by Mathias Diether 

function MathiasD() {

    let mathiasD = new google.maps.LatLng(59.4520651, 24.7282848);
    let mathiasDMarker = new google.maps.Marker({
        position: mathiasD,
    });

    mathiasDMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}


//9 bar : koht 


function koht() {

    let koht = new google.maps.LatLng(59.4382365, 24.7438458);
    let kohtMarker = new google.maps.Marker({
        position: koht,
    });

    kohtMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}




//10. Manna La Roose 

function mannaLaRoosa() {

    let mannaLaRoosa = new google.maps.LatLng(59.437424, 24.7526194);
    let mannaLaRoosaMarker = new google.maps.Marker({
        position: mannaLaRoosa,
    });

    mannaLaRoosaMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}


//11. Frank Underground

function frankU() {

    let frankU = new google.maps.LatLng(59.4359316, 24.7477253);
    let frankUMarker = new google.maps.Marker({
        position: frankU,
    });

    frankUMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}


//12. restaurant / bar - Kivi Paber Kääri (rock paper scissors)

function kiviP() {

    let kiviP = new google.maps.LatLng(59.438617, 24.7280598);
    let kiviPMarker = new google.maps.Marker({
        position: kiviP,
    });

    kiviPMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}


//13.wine bar Shvips 


function shvips() {

    let shvips = new google.maps.LatLng(59.4389384, 24.7260338);
    let shvipsMarker = new google.maps.Marker({
        position: shvips,
    });

    shvipsMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();

}


//14. SAUNd music bar 

function saund() {

    let saund = new google.maps.LatLng(59.4362423, 24.7480849);
    let saundMarker = new google.maps.Marker({
        position: saund,
    });

    saundMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();

}


//15. Club Theater (teater)

function teater() {

    let teater = new google.maps.LatLng(59.4327102, 24.7447364);
    let teaterMarker = new google.maps.Marker({
        position: teater,
    });

    teaterMarker.setMap(map);
    let moveToMap = document.getElementById("map");
    moveToMap.scrollIntoView();
}