export default function initializeLightboxGallery() {
    const SimpleLightbox = require('simple-lightbox');
    new SimpleLightbox({elements: '[data-lightbox]'});
}
