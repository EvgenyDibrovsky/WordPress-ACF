/**
 * App
 */
import initializeMobileMenu from './components/mobile-menu';
import initializeLightboxGallery from './components/lightbox-gallery';
import initializeGoogleMap from './components/google-map';
import initializeFormClear from './components/form-clear';
import initializeAnimateOnScroll from './components/animation-elements';
import initializeCookieConsent from './components/cookies-consent';
import initializeWidgetForm from './components/widget-form';
import initializeModal from './components/modal';
import { initializeFormSubmit, initializeFixedFormSubmit, initializeResignFormSubmit } from './components/form-submit';

// window.initSubmit = initializeFormSubmit;
window.initMap = initializeGoogleMap;
document.addEventListener('DOMContentLoaded', function () {
    initializeMobileMenu();
    initializeLightboxGallery();
    initializeFormClear();
    initializeFormSubmit();
    initializeFixedFormSubmit();
    initializeWidgetForm();
    initializeAnimateOnScroll();
    initializeCookieConsent();
    initializeModal();
    initializeResignFormSubmit();
});
