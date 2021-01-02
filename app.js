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

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);  
});

const header = document.querySelector('.header');


function stickyHeader() {
    if(window.scrollY > header.offsetHeight) {
        document.body.style.paddingTop = `${header.offsetHeight}px`;
        header.classList.add('header-sticky');
    } else {
        document.body.style.paddingTop = 0;
        header.classList.remove('header-sticky');
    };
}

window.addEventListener('scroll', stickyHeader);

const navbar = document.querySelector('.nav');
const navbars = navbar.querySelectorAll('li');
const image = document.querySelector('.header__image')
const nav = document.querySelector('.nav__menu');

function toggleNav() {
    nav.classList.toggle('active');
    opacityNav(image, 'filter', 'invert(0)', 'invert(1)', 300);
    opacityNav(navbars, 'opacity', 0, 1, 500);
}

let opacityTimer;
function opacityNav(bar, attribute, startResult, endResult, time) {
    

    if(nav.classList.contains('active')) {
        opacityTimer = setTimeout(() => {
            if(bar.length > 1) {
                bar.forEach(element => element.style[attribute] = endResult);
            } else {
                bar.style[attribute] = endResult;
            }
        }, time);
    } else {
        if(bar.length > 1) {
            bar.forEach(element => element.style[attribute] = startResult);
        } else {
            bar.style[attribute] = startResult;
        }
        clearTimeout(opacityTimer);
    }    
}

navbar.addEventListener('click', toggleNav)


