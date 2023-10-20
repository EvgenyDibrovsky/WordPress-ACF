/* eslint-disable no-undef */
export default function initializeGoogleMap() {
    const mapOptions = {
        zoom: 17.75,
        center: new google.maps.LatLng(50.088798, 19.902615),
        disableDefaultUI: true,
        styles: [
            {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                    {
                        saturation: '-100',
                    },
                    {
                        lightness: '-12',
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'labels.icon',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
        ],
    };

    const mapElement = document.getElementById('map');
    const map = new google.maps.Map(mapElement, mapOptions);

    new google.maps.Marker({
        position: new google.maps.LatLng(50.088798, 19.902615),
        map: map,
        icon: { url: 'img/marker.png' },
    });
}
