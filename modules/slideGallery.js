export default function slideGallery() {
    const gallery = document.querySelector('.gallery');
    const imageAll = [...document.querySelectorAll('.gallery__image')];

    const images = imageAll.splice(1, imageAll.length - 2);

    let isDown = false;
    let point;
    let scrollLeft;

    images.forEach(image => {

        bound(image);

        gallery.addEventListener('scroll', () => {
            bound(image);
        })

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
                bound(image);
        });
    })

    function bound(element) {
        let rect = element.getBoundingClientRect()
        if(window.innerWidth > 1000) {
            if((rect.left > 100) && (rect.right < window.innerWidth - 90)) {
                element.style.opacity = 1;
            } else {
                element.style.opacity = 0.3;
            }
        } else return;
    }    
}