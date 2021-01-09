export default function showMap() {

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWwtZ2FyZGVuIiwiYSI6ImNram1yeTQ5YTEwdmkyc3MycnQ1aWptaXUifQ.csipJUbLa2PF9ab2uYLnGA';

    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [16.856721782929363, 52.2859369001717],
    minZoom: 1,
    maxZoom: 19,
    zoom: 17,
})  

    var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [16.856721782929363, 52.2859369001717]
      },
      properties: {
        title: 'Katei-Sushi',
        description: 'ul. Rynek 11, Puszczykowo'
      }
    }]
};

    geojson.features.forEach(function(marker) {

    var el = document.createElement('div');
    el.className = 'marker';
  
    new mapboxgl.Marker(el, {anchor: 'bottom'}) 
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 55 })
      .setHTML('<p>' + marker.properties.title + '</p><p>' + marker.properties.description + '</p>'))
      .addTo(map);
    });

    map.doubleClickZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();
}