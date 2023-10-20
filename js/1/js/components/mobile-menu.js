export default function initializeMobileMenu() {
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

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', handleMenuItemClick);
    });

    function updateAriaAttr() {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
        menuBtn.setAttribute('aria-expanded', expanded);
    }
}
