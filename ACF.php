<!-- Text -->
<?php
$section_5_title = get_field('section_5_title');
if ($section_5_title) : ?>
    <h2 class="text-titleH2Mob lg:text-titleH2 font-bold text-white mb-[1.875rem]"><?php echo $section_5_title; ?></h2>
<?php endif; ?>
<!-- Text без лиишнего <p> -->
<?php
$block_1_content = get_field('block_1_content', pll_current_language(), false);

if ($block_1_content) : ?>
    <p class="descr"><?php echo $block_1_content; ?></p>
<?php endif; ?>
<!-- Btn -->
<?php
$link = get_field('hp-section-3-btn');
if ($link) :
    $link_url = esc_url($link[ 'url' ]);
    $link_title = esc_html($link[ 'title' ]);
    $link_target = $link[ 'target' ] ? esc_attr($link[ 'target' ]) : '_self';
    ?>
    <a class="btn-yellow opacity-0 init-animate-2" href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><?php echo $link_title; ?></a>
<?php endif; ?>

<!-- img -->
<?php
$image = get_field('investment-section-3-image');
if (! empty($image)) :
    $url = $image[ 'url' ];
    echo '<img src="' . $url . '" alt="' . $image[ 'alt' ] . '" class="w-full h-auto  " />';
endif;
?>
<!-- v2 -->
<?php
$image = get_field('logo_nav_fixed', pll_current_language());
if (! empty($image)) :
    $url = $image[ 'url' ];
    ?>
    <a href="/" class="logo-header-fixed">
        <img src="<?php echo $url; ?>" alt="<?php echo $image[ 'alt' ]; ?>" />
    </a>
    <?php
endif;
?>

<!-- swiper -->
<?php if (have_rows('hero-slider-homepage')) : ?>
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <?php while ( have_rows('hero-slider-homepage') ) :
                the_row();
                $image = get_sub_field('slide_foto');
                $title = get_sub_field('slide_foto_title');
                $description = get_sub_field('slide_foto_description');
                $title_color = get_sub_field('slide_foto_title_color');

                ?>
                <div class="swiper-slide relative">
                    <?php if (! empty($image)) : ?>
                        <img src="<?php echo esc_url($image[ 'url' ]); ?>" alt="<?php echo esc_attr($image[ 'alt' ]); ?>" />
                    <?php endif; ?>
                    <div class="absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/4 bg-bgTextSlider shadow-lg p-5 rounded-lg w-[40rem]">
                        <?php if (! empty($title)) : ?>
                            <div class='text-[1.5rem] font-bold mb-5' style="color: <?php echo esc_attr($title_color); ?>;"><?php echo esc_html($title); ?></div>
                        <?php endif; ?>
                        <?php if (! empty($description)) : ?>
                            <div class=''><?php echo esc_html($description); ?></div>
                        <?php endif; ?>
                    </div>

                </div>

            <?php endwhile; ?>
        </div>
        <div class="swiper-pagination"></div>
    </div>
<?php endif; ?>


<!-- Мультиязычность -->
<?php
$footer_title = get_field('footer_title', pll_current_language());
if ($footer_title) : ?>
    <h2 class="text-titleh2Mobile lg:text-titleh2 font-bold text-textBlack opacity-0 init-animate-5-5" data-delay="0.1s" data-time="1s"><?php echo $footer_title; ?></h2>
<?php endif; ?>



<!-- Повторяемое поле -->
<div class="w-full xl:w-10/12 mx-auto">
    <?php if (have_rows('section_5_list')) : ?>
        <?php
        ?>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-[1.875rem] gap-y-[3.875rem] mb-[4.683rem]">
            <?php while ( have_rows('section_5_list') ) :
                the_row();
                $icon = get_sub_field('icon');
                $description = get_sub_field('icon_description_hover');

                ?>
                <li class="flex flex-col justify-start items-center">
                    <?php if ($icon) : ?>
                        <img src="<?php echo esc_url($icon[ 'url' ]); ?>" alt="<?php echo esc_attr($icon[ 'alt' ]); ?>" class="w-[5.626rem] h-[5.626rem] mb-[1.688rem]" />
                    <?php endif; ?>
                    <div>
                        <?php if (! empty($description)) : ?>
                            <p class="text-center text-white text-textCardsItem font-medium">
                                <?php echo $description; ?>
                            </p>
                        <?php endif; ?>
                    </div>
                </li>
            <?php endwhile; ?>
        </ul>
    <?php endif; ?>
</div>

<!-- Повторяемое поле, простой вывод списка -->
<?php if (have_rows('list_1')) : ?>
    <ul class="data">
        <?php while ( have_rows('list_1') ) :
            the_row(); ?>
            <li><?php the_sub_field('list_item'); ?></li>
        <?php endwhile; ?>
    </ul>
<?php endif; ?>



<?php
$link = get_field('hero_btn');
if ($link) :
    $link_url = esc_url($link[ 'url' ]);
    $hero_btn_desc = esc_html($link[ 'hero_btn_desc' ]);
    $link_target = $link[ 'target' ] ? esc_attr($link[ 'target' ]) : '_self';
    ?>
    <a class="pr-[25px] h-[101px] text-[#A22910] uppercase absolute section-title leading-none uppercase text-[29px] bg-white justify-end border-[2px] border-[#E7DDD2] rounded-r-[50px] absolute w-[678px] lg:bottom-[30px] xl:bottom-[50px] xxl:bottom-[75px] flex flex-row items-center"
        href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><?php echo $hero_btn_desc; ?>
        <img class="max-w-[55px] ms-[30px]" src="<?php echo esc_url(get_template_directory_uri()); ?>/images/hero-button-icon.svg" </a>
    <?php endif; ?>




    <?php
    $link = get_field('hero_btn');
    if ($link) :
        $link_url = esc_url($link[ 'url' ]);
        $link_title = esc_html($link[ 'title' ]);
        $link_target = $link[ 'target' ] ? esc_attr($link[ 'target' ]) : '_self';
        ?>
        <a class="btn-yellow opacity-0 init-animate-2" href="<?php echo $link_url; ?>" target="<?php echo $link_target; ?>"><?php echo $link_title; ?></a>
    <?php endif; ?>


    <!-- bg-image -->
    <?php
    $content_img_3 = get_field('content_img_3');
    $bg_image_url = $content_img_3 ? esc_url($content_img_3[ 'url' ]) : ''; // Если поле ACF пустое, то изображение не будет установлено
    ?>
    <div class="min-h-[300px] mx-auto bg-center bg-cover rounded-[35px] w-full lg:rounded-[70px] lg:mt-[30px] max-w-[1080px] h-auto md:h-[355px] lg:h-[455px] xl:h-[555px]"
        style="background-image: url('<?php echo $bg_image_url; ?>');">
    </div>


    <!-- <br> -->
    <?php
    $page_dessert_singl_content = get_field('page_dessert_singl_content');
    if ($page_dessert_singl_content) {
        echo nl2br($page_dessert_singl_content);
    }
    ?>



    <!-- contacts -->
    <!-- phone -->
    <li class="text-contactInfo font-medium text-colorDark">mob.:
        <?php
        $footer_info_contacts_phone_number_mob = get_field('footer_info_contacts_phone_number_mob', pll_current_language());
        if ($footer_info_contacts_phone_number_mob) :
            $footer_info_contacts_phone_number_mob_link = str_replace(' ', '', $footer_info_contacts_phone_number_mob);
            ?>
            <a class="text-contactInfo font-medium text-colorDark" href="tel:<?php echo esc_attr($footer_info_contacts_phone_number_mob_link); ?>">
                <?php echo esc_html($footer_info_contacts_phone_number_mob); ?>
            </a>
        <?php endif; ?>
    </li>
    <!-- email -->
    <li class="text-contactInfo font-medium text-colorDark">e-mail:
        <?php
        $footer_info_contacts_email = get_field('footer_info_contacts_email', pll_current_language());
        if ($footer_info_contacts_email) :
            $footer_info_contacts_email_link = str_replace(' ', '', $footer_info_contacts_email);
            ?>
            <a class="text-contactInfo font-medium text-colorDark" href="mailto:<?php echo esc_attr($footer_info_contacts_email_link); ?>">
                <?php echo esc_html($footer_info_contacts_email); ?>
            </a>
        <?php endif; ?>
    </li>