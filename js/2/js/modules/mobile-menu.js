export function initializeMobileMenu() {
  const siteNavigation = document.getElementById('site-navigation');
  if (!siteNavigation) return;

  const menuBtn = document.querySelector('.menu-toggle');
  if (!menuBtn) return;

  const menuItems = document.querySelectorAll('#site-navigation ul > li > a');

  const handleMenuClick = () => {
    siteNavigation.classList.toggle('toggled');
    menuBtn.classList.toggle('toggled');
    document.documentElement.classList.toggle('overflow-hidden');

    updateAriaAttr();
  };

  const handleMenuItemClick = () => {
    siteNavigation.classList.remove('toggled');
    menuBtn.classList.remove('toggled');
    document.documentElement.classList.remove('overflow-hidden');

    updateAriaAttr();
  };

  menuBtn.addEventListener('click', handleMenuClick);

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', handleMenuItemClick);
  });

  function updateAriaAttr() {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
    menuBtn.setAttribute('aria-expanded', expanded);
  }
}

// export default function initializeMobileMenu() {
//   const mobileNavigation = document.getElementById('mobile-navigation');
//   if (!mobileNavigation) return;

//   const menuBtn = document.getElementById('menu-toggle');
//   if (!menuBtn) return;

//   const closeBtn = document.getElementById('close-menu');
//   if (!closeBtn) return;

//   const headerBtn = document.getElementById('header-btn'); // кнопка "header-btn"

//   const menuItems = document.querySelectorAll('#mobile-navigation ul li a');

//   const handleMenuClick = () => {
//     mobileNavigation.classList.toggle('active');
//     document.body.classList.toggle('overflow-hidden');
//     document.documentElement.classList.toggle('overflow-hidden');
//     updateAriaAttr();
//   };

//   const handleMenuItemClick = () => {
//     mobileNavigation.classList.remove('active');
//     document.body.classList.remove('overflow-hidden');
//     document.documentElement.classList.remove('overflow-hidden');
//     updateAriaAttr();
//   };

//   menuBtn.addEventListener('click', handleMenuClick);
//   closeBtn.addEventListener('click', handleMenuItemClick);

//   if (headerBtn) {
//     // если кнопка "header-btn" найдена
//     headerBtn.addEventListener('click', handleMenuItemClick);
//   }

//   Array.from(menuItems).forEach(menuItem => {
//     menuItem.addEventListener('click', handleMenuItemClick);
//   });

//   function updateAriaAttr() {
//     const expanded = menuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
//     menuBtn.setAttribute('aria-expanded', expanded);
//   }
// }
