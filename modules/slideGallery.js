export default function slideGallery() {
    const gallery = document.querySelector('.gallery');

    let isDown = false;
    let point;
    let scrollLeft;

    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        point = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
        gallery.classList.add('grabbing');
    });

    gallery.addEventListener('mouseleave', () => {
        isDown = false;
    });

    gallery.addEventListener('mouseup', () => {
        isDown = false;
        gallery.classList.remove('grabbing');
    });

    gallery.addEventListener('mousemove', (e) => {
        if(!isDown) return; 
            e.preventDefault();
            const x = e.pageX - gallery.offsetLeft;
            const walk = x - point;
            gallery.scrollLeft = scrollLeft - walk;
    });
}