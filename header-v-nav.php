<header class="z-50 absolute left-0 right-0 top-0 flex flex-wrap justify-between items-center lg:items-start">
    <div class="max-w-[70%] lg:max-w-[180px] xl:max-w-full mt-5 ml-5">
        <?php
        if (function_exists('the_custom_logo')) {
            the_custom_logo();
        }
        ?>
    </div>

    <button class="fixed right-0 menu-toggle -mt-[1.25rem] py-[1.25rem] pl-[1.25rem] pr-[1.25rem] z-50 group space-y-1.5 lg:hidden" aria-controls="primary-menu" aria-expanded="false">
        <span class="group-[&.toggled]:rotate-45 group-[&.toggled]:translate-y-[5px] transition-all w-8 h-1 bg-white block rounded-sm"></span>
        <span class="group-[&.toggled]:hidden w-8 h-1 bg-white block rounded-sm"></span>
        <span class="group-[&.toggled]:-rotate-45 group-[&.toggled]:-translate-y-[5px] transition-all w-8 h-1 bg-white block rounded-sm"></span>
    </button>
    <nav id="site-navigation" class="[&.toggled]:flex [&.toggled]:left-0 lg:[&.toggled]:right-0 [&.toggled]:opacity-100 opacity-0 flex flex-col justify-between bg-white p-5 fixed w-full h-full top-0 left-[-100%] lg:left-auto right-[-100%] max-w-[18.75rem] transition-all lg:right-0 lg:max-w-full lg:opacity-100 lg:w-auto lg:h-auto lg:p-0 overflow-auto">
        <?php
        $mobile_logo = get_theme_mod('mobile_logo');
        if ($mobile_logo) {
            echo '<a href="' . esc_url(home_url('/')) . '"><img src="' . esc_url($mobile_logo) . '" class="w-[11.25rem] h-auto lg:hidden" alt="Additional Logo"></a>';
        }
        ?>

        <?php
        wp_nav_menu(
            array(
                'theme_location' => 'menu-main',
                'menu_id'        => 'primary-menu',
                'menu_class'     => 'bg-white lg:bg-bgNavMenu flex flex-wrap gap-y-[1rem] flex-col lg:flex-row lg:gap-y-0 lg:px-[1.25rem] text-fontSizeNavMenuMobile lg:text-fontSizeNavMenu my-12 lg:my-0',
                'container'      => false,
                'li_class'       => 'lg:text-center current-main-menu duration-200',
            )
        );
        ?>

        <div class="lg:hidden">
            <div class="mb-5">
                <?php
                $mobile_popup_title_popup_2 = get_field('mobile-popup-title-popup-2', pll_current_language());
                if ($mobile_popup_title_popup_2) : ?>
                    <h4 class="mb-4 font-bold text-mobilePopup"><?php echo $mobile_popup_title_popup_2; ?></h4>
                <?php endif; ?>
                <div>
                    <?php
                    $mobile_popup_numer_telefonu_1 = get_field('mobile-popup-numer-telefonu-1', pll_current_language());

                    if ($mobile_popup_numer_telefonu_1) : ?>
                        <a class="text-mobilePopup" href="tel:<?php echo str_replace(' ', '', $mobile_popup_numer_telefonu_1); ?>"><span><?php echo $mobile_popup_numer_telefonu_1; ?></span></a>
                    <?php endif; ?>
                    <?php
                    $mobile_popup_numer_telefonu_2 = get_field('mobile-popup-numer-telefonu-2', pll_current_language());

                    if ($mobile_popup_numer_telefonu_2) : ?>
                        <a class="text-mobilePopup" href="tel:<?php echo str_replace(' ', '', $mobile_popup_numer_telefonu_2); ?>"><span><?php echo $mobile_popup_numer_telefonu_2; ?></span></a>
                    <?php endif; ?>
                </div>
                <div>
                    <?php
                    $mobile_popup_email = get_field('mobile-popup-email', pll_current_language());
                    if ($mobile_popup_email) : ?>
                        <a class="text-mobilePopup" href="mailto:<?php echo $mobile_popup_email; ?>"><?php echo $mobile_popup_email; ?></a>
                    <?php endif; ?>
                </div>
            </div>
            <div class="mb-[2.625rem]">
                <?php
                $mobile_popup_title_popup_1 = get_field('mobile-popup-title-popup-1', pll_current_language());
                if ($mobile_popup_title_popup_1) : ?>
                    <h4 class="mb-4 font-bold text-mobilePopup"><?php echo $mobile_popup_title_popup_1; ?></h4>
                <?php endif; ?>
                <?php
                $mobile_popup_company_data = get_field('mobile-popup-company-data', pll_current_language());
                if ($mobile_popup_company_data) : ?>
                    <p class="text-mobilePopup"></p><?php echo $mobile_popup_company_data; ?></p>
                <?php endif; ?>
            </div>
        </div>
    </nav>
</header>
<!-- JavaScript -->
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