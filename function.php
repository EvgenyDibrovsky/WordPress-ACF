<!-- Таксономия -->
// news taxonomy
function news_taxonomy()
{
register_taxonomy(
'news_category',
'news',
array(
'label' => __('Рубрики новин'),
'rewrite' => array('slug' => 'news-category'),
'hierarchical' => true,
)
);
}
add_action('init', 'news_taxonomy');
function create_news_post_type()
{
register_post_type(
'news',
array(
'labels' => array(
'name' => __('Новини'),
'singular_name' => __('Новина')
),
'public' => true,
'has_archive' => true,
'rewrite' => array('slug' => 'news'),
'taxonomies' => array('news_category'),
'show_in_rest' => true,
'show_in_menu' => true,
'menu_position' => 4,

)
);
}
add_action('init', 'create_news_post_type');
// news taxonomy
// gallery taxonomy
function create_gallery_post_type()
{
register_post_type(
'gallery',
array(
'labels' => array(
'name' => __('Галерея'),
'singular_name' => __('Галерея')
),
'public' => true,
'has_archive' => true,
'rewrite' => array('slug' => 'gallery'),
'show_in_rest' => true,
'show_in_menu' => true,
'menu_position' => 5,
)
);
}
add_action('init', 'create_gallery_post_type');

<!-- // gallery taxonomy -->

// news taxonomy
function news_taxonomy()
{
register_taxonomy(
'news_category',
'news',
array(
'label' => __('Рубрики новин'),
'rewrite' => array('slug' => 'news-category'),
'hierarchical' => true,
)
);
}
add_action('init', 'news_taxonomy');
function create_news_post_type()
{
register_post_type(
'news',
array(
'labels' => array(
'name' => __('Новини'),
'singular_name' => __('Новина')
),
'public' => true,
'has_archive' => true,
'rewrite' => array('slug' => 'news'),
'taxonomies' => array('news_category'),
'show_in_rest' => true,
'show_in_menu' => true,
'menu_position' => 4,

)
);
}
add_action('init', 'create_news_post_type');
// news taxonomy
// gallery taxonomy
function create_gallery_post_type()
{
register_post_type(
'gallery',
array(
'labels' => array(
'name' => __('Галерея'),
'singular_name' => __('Галерея')
),
'public' => true,
'has_archive' => true,
'rewrite' => array('slug' => 'gallery'),
'show_in_rest' => true,
'show_in_menu' => true,
'menu_position' => 5,
)
);
}
add_action('init', 'create_gallery_post_type');

// gallery taxonomy