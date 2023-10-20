export default function initializeLightboxGallery() {
  const SimpleLightbox = require('simple-lightbox');
  // eslint-disable-next-line no-new
  new SimpleLightbox({ elements: '[data-lightbox]' });
}
