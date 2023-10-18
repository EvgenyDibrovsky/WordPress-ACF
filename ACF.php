<!-- swiper -->
<?php if (have_rows('hero-slider-homepage')) : ?>
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <?php while (have_rows('hero-slider-homepage')) : the_row();
                $image = get_sub_field('slide_foto');
                $title = get_sub_field('slide_foto_title');
                $description = get_sub_field('slide_foto_description');
                $title_color = get_sub_field('slide_foto_title_color');

            ?>
                <div class="swiper-slide relative">
                    <?php if (!empty($image)) : ?>
                        <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                    <?php endif; ?>
                    <div class="absolute top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/4 bg-bgTextSlider shadow-lg p-5 rounded-lg w-[40rem]">
                        <?php if (!empty($title)) : ?>
                            <div class='text-[1.5rem] font-bold mb-5' style="color: <?php echo esc_attr($title_color); ?>;"><?php echo esc_html($title); ?></div>
                        <?php endif; ?>
                        <?php if (!empty($description)) : ?>
                            <div class=''><?php echo esc_html($description); ?></div>
                        <?php endif; ?>
                    </div>

                </div>

            <?php endwhile; ?>
        </div>
        <div class="swiper-pagination"></div>
    </div>
<?php endif; ?>