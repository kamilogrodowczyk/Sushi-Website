import stickyHeader from './stickyHeader.js';

export default function hiddenOverflow() {

    const image = document.querySelector('.header__image')

    if(this.checked) {
        document.body.style.overflowY = 'hidden';
        image.classList.add('filtred');
    } else {
        document.body.style.overflowY = 'scroll';
        image.classList.remove('filtred');
        stickyHeader();
    }
}