import hiddenOverflow from '/modules/hiddenOverflow.js';
import stickyHeader from '/modules/stickyHeader.js';
import resize from '/modules/resize.js';
import slideGallery from '/modules/slideGallery.js';
import showMap from '/modules/showMap.js';

function init() {

    const togglerCheckbox = document.querySelector('.toggler[type="checkbox"]');
    slideGallery();
    showMap();
    window.addEventListener("resize", resize);
    togglerCheckbox.addEventListener('click', hiddenOverflow);
    window.addEventListener('scroll', stickyHeader);

}

window.addEventListener('load', init)