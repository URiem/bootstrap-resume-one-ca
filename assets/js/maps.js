function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 53.34981, lng: -6.26031 },
    });
    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            position,
            label,
        });

        // markers can only be keyboard focusable when they have click listeners
        // open info window when marker is clicked
        marker.addListener("click", () => {
            infoWindow.setContent(label);
            infoWindow.open(map, marker);
        });
        return marker;
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map });
}

const locations = [
    { lat: 53.3420, lng: -6.2867 },
    { lat: 53.3438, lng: -6.2546 },
    { lat: 53.2663, lng: -6.2696 },
];

window.initMap = initMap;
