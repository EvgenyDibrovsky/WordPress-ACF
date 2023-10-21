  <button class="fixed top-10 right-10 menu-toggle z-50 group space-y-1.5 lg:hidden" aria-controls="primary-menu" aria-expanded="false">
      <span class="group-[&.toggled]:rotate-45 group-[&.toggled]:translate-y-[5px] transition-all w-8 h-1 bg-white block rounded-sm"></span>
      <span class="group-[&.toggled]:hidden w-8 h-1 bg-white block rounded-sm"></span>
      <span class="group-[&.toggled]:-rotate-45 group-[&.toggled]:-translate-y-[5px] transition-all w-8 h-1 bg-white block rounded-sm"></span>
  </button>

  <header id="site-header" class="fixed top-0 translate-x-[-100%] lg:translate-x-0 transition-transform lg:left-0 w-[18.75rem] lg:w-full z-50 h-full lg:h-[5.875rem] lg:opacity-100 items-center bg-white lg:bg-bgYellow">
      <div class="container flex items-center justify-between">
          <div class="hidden lg:flex items-center w-28 h-auto">
              <?php
                if (function_exists('the_custom_logo')) {
                    the_custom_logo();
                }
                ?>
          </div>

          <nav>
              <div class=" flex justify-between items-center w-full xl:hidden">
                  <div class="lg:hiddeon flex items-center w-28 h-auto">
                      <?php
                        $mobile_logo = get_theme_mod('mobile_logo');
                        if ($mobile_logo) {
                            echo '<a href="' . esc_url(home_url('/')) . '"><img src="' . esc_url($mobile_logo) . '" class="w-[11.25rem] h-auto lg:hidden" alt="Additional Logo"></a>';
                        }
                        ?>
                  </div>

              </div>
              <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'menu-main',
                        'menu_id'        => 'primary-menu',
                        'menu_class'     => 'gap-[1.438rem] lg:gap-0 text-black text-center flex items-start lg:items-center flex-col lg:flex-row',
                        'container'      => false,
                        'li_class'       => 'text-center current-main-menu ',
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
      </div>
  </header>



  <!-- Javascript -->
  export function initializeMobileMenu() {
  const siteHeader = document.getElementById('site-header');
  if (!siteHeader) return;

  const menuBtn = document.querySelector('.menu-toggle');
  if (!menuBtn) return;

  const menuItems = document.querySelectorAll('#site-header ul > li > a');

  const handleMenuClick = () => {
  siteHeader.classList.toggle('translate-x-0');
  menuBtn.classList.toggle('toggled');
  document.documentElement.classList.toggle('overflow-hidden');

  updateAriaAttr();
  };

  const handleMenuItemClick = () => {
  siteHeader.classList.remove('translate-x-0');
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