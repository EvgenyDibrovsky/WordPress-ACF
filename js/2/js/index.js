/**
 * Import modules
 */
import { initializeMobileMenu } from './modules/mobile-menu';
import { googleMapInit } from './modules/google-map-init';
import initAnimation from './modules/animation-elements';
import { backToTop } from './modules/back_to_top';
import { headerTableFixed } from './modules/header-table-fixd';
import * as Tablesort from 'tablesort';
import { initializeFormClear } from './modules/form-clear';
import initializeCookieConsent from './modules/cookies';
import initializeModal from './modules/modal';
/**
 * Import Styles
 */
import '../css/style.css';

require('fslightbox');
document.addEventListener('DOMContentLoaded', function () {
  initializeMobileMenu();
  initializeCookieConsent();
  googleMapInit();
  backToTop();
  headerTableFixed();
  initializeFormClear();
  initAnimation();
  initializeModal();

  const table = document.getElementById('table-sort');
  // eslint-disable-next-line no-new

  if (table !== null) {
    // eslint-disable-next-line no-new
    new Tablesort(table);
  }
});

/**
 * Don't delete!
 * Enable Hot Module Reload for Dev
 */
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
