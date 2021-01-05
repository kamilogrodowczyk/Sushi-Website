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

// let resizeTimer;
// window.addEventListener("resize", () => {
//     document.body.classList.add("resize-animation-stopper");
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//       document.body.classList.remove("resize-animation-stopper");
//     }, 400);  
// });

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


