export default function stickyHeader() {

    const header = document.querySelector('.header');
        
    if(window.scrollY > header.offsetHeight) {
        document.body.style.paddingTop = `${header.offsetHeight}px`;
        header.classList.add('header-sticky');
    } else {
        document.body.style.paddingTop = 0;
        header.classList.remove('header-sticky');
    }
}