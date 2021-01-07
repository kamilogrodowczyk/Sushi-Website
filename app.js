// const gallery = document.querySelector('.gallery');

// let isDown = false;
// let point;
// let scrollLeft;

// gallery.addEventListener('mousedown', (e) => {
//     isDown = true;
//     point = e.pageX - gallery.offsetLeft;
//     scrollLeft = gallery.scrollLeft;
// });

// gallery.addEventListener('mouseleave', () => {
//     isDown = false;
// });

// gallery.addEventListener('mouseup', () => {
//     isDown = false;
// });

// gallery.addEventListener('mousemove', (e) => {
//     if(!isDown) return; 
//         e.preventDefault();
//         const x = e.pageX - gallery.offsetLeft;
//         const walk = x - point;
//         gallery.scrollLeft = scrollLeft - walk;
//         console.log(walk)
// });

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWwtZ2FyZGVuIiwiYSI6ImNram1yeTQ5YTEwdmkyc3MycnQ1aWptaXUifQ.csipJUbLa2PF9ab2uYLnGA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [16.856721782929363, 52.2859369001717],
    maxZoom: 20,
    zoom: 18,
})


  

// var geojson = {
//     type: 'FeatureCollection',
//     features: [{
//       type: 'Feature',
//       geometry: {
//         type: 'Point',
//         coordinates: [16.856721782929363, 52.2859369001717]
//       },
//       properties: {
//         title: 'Katei-Sushi',
//         description: 'ul. Rynek 11, Puszczykowo'
//       }
//     }]
// };

// geojson.features.forEach(function(marker) {

//     // create a HTML element for each feature
//     var el = document.createElement('div');
//     el.className = 'marker';
  
//     // make a marker for each feature and add to the map
//     var marker = new mapboxgl.Marker(el) 
//       .setLngLat(marker.geometry.coordinates)
//       .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//       .setHTML('<p>' + marker.properties.title + '</p><p>' + marker.properties.description + '</p>'))
//       .addTo(map);
//   });


// map.doubleClickZoom.disable();
// map.addControl(new mapboxgl.NavigationControl());
// map.scrollZoom.disable();







let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);  
});

const header = document.querySelector('.header');
const image = document.querySelector('.header__image')
const togglerCheckbox = document.querySelector('.toggler[type="checkbox"]');

function stickyHeader() {
        
    if(window.scrollY > header.offsetHeight) {
        document.body.style.paddingTop = `${header.offsetHeight}px`;
        header.classList.add('header-sticky');
    } else {
        document.body.style.paddingTop = 0;
        header.classList.remove('header-sticky');
    }
}

function hiddenOverflow() {

    if(this.checked) {
        document.body.style.overflowY = 'hidden';
        image.classList.add('filtred');
    } else {
        document.body.style.overflowY = 'scroll';
        image.classList.remove('filtred');
        stickyHeader();
    }
}

togglerCheckbox.addEventListener('click', hiddenOverflow);
window.addEventListener('scroll', stickyHeader);


