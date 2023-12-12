<!-- Text -->
<?php
$section_5_title = get_field('section_5_title');
if ($section_5_title) : ?>
    <h2 class="text-titleH2Mob lg:text-titleH2 font-bold text-white mb-[1.875rem]"><?php echo $section_5_title; ?></h2>
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
if (!empty($image)) :
    $url = $image['url'];
?>
    <a href="/" class="logo-header-fixed">
        <img src="<?php echo $url; ?>" alt="<?php echo $image['alt']; ?>"/>
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