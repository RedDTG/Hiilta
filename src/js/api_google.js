"use strict";

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
window.initMap = function() {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapTypeControl: false,
        center: {
            lat: -33.8688,
            lng: 151.2195
        },
        zoom: 13
    });
    var directionsService = new google.maps.DirectionsService;
    var directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: true,
        map: map,
        panel: document.getElementById('right-panel')
    });
    new AutocompleteDirectionsHandler(map);


    directionsRenderer.addListener('directions_changed', function () {
        computeTotalDistance(directionsRenderer.getDirections());
    });

}



class AutocompleteDirectionsHandler {
    constructor(map) {
        var marker;
        this.map = map;
        this.originPlaceId = "";
        this.destinationPlaceId = "";
        this.travelMode = google.maps.TravelMode.WALKING;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.directionsRenderer.setMap(map);
        const originInput = document.getElementById("origin-input");
        const destinationInput = document.getElementById("destination-input");
        const modeSelector = document.getElementById("mode-selector");
        const originAutocomplete = new google.maps.places.Autocomplete(
            originInput
        ); // Specify just the place data fields that you need.

        originAutocomplete.setFields(["place_id"]);
        const destinationAutocomplete = new google.maps.places.Autocomplete(
            destinationInput
        ); // Specify just the place data fields that you need.


        destinationAutocomplete.setFields(["place_id"]);
        this.setupClickListener(
            "changemode-walking",
            google.maps.TravelMode.WALKING
        );
        this.setupClickListener(
            "changemode-transit",
            google.maps.TravelMode.TRANSIT
        );
        this.setupClickListener(
            "changemode-driving",
            google.maps.TravelMode.DRIVING
        );
        this.setupClickListener(
            "changemode-cycling",
            google.maps.TravelMode.CYCLING
        );
        this.setupPlaceChangedListener(originAutocomplete, "ORIG");
        this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
            originInput
        );
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
            destinationInput
        );
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
            modeSelector
        );
    } // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.

    setupClickListener(id, mode) {
        const radioButton = document.getElementById(id);
        radioButton.addEventListener("click", () => {
            this.travelMode = mode;
            this.route();
        });
    }

    setupPlaceChangedListener(autocomplete, mode) {
        autocomplete.bindTo("bounds", this.map);
        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            console.log(place);

            if (!place.place_id) {
                window.alert("Please select an option from the dropdown list.");
                return;
            }

            if (mode === "ORIG") {
                this.originPlaceId = place.place_id;


            } else {
                this.destinationPlaceId = place.place_id;
            }
            this.route();

            });



            /*displayRoute(this.originPlaceId, this.destinationPlaceId, this.directionsService,
                this.directionsRenderer );*/

    }

    route() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
            return;
        }

        const me = this;
        console.log(this.originPlaceId);
        this.directionsService.route(
            {

                origin: {

                    placeId: this.originPlaceId
                },
                destination: {
                    placeId: this.destinationPlaceId
                },
                travelMode: this.travelMode
            },
            (response, status) => {
                console.log(status);
                console.log(this.originPlaceId);
                console.log(this.route);
                if (status === "OK") {
                    me.directionsRenderer.setDirections(response);
                } else {
                    window.alert("Directions request failed due to " + status);
                }
            }
        );
    }
}
function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    document.getElementById('total').innerHTML = total + ' km';
}




function displayRoute(origin, destination, service, display) {
    service.route({
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING',
        avoidTolls: true
    }, function(response, status) {
        if (status === 'OK') {
            display.setDirections(response);
        } else {
            alert('Could not display directions due to: ' + status);
        }
    });
}