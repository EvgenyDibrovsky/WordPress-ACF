// // import Swiper and modules
// import Swiper, { Navigation, Pagination, Thumbs, FreeMode, Autoplay } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/controller';

// // configure Swiper to use modules
// Swiper.use([Navigation, Pagination, Thumbs, FreeMode, Autoplay]);

// export default function initSwiper() {
//     const swiper = new Swiper('.mySwiper', {
//         spaceBetween: 10,
//         slidesPerView: 2,
//         breakpoints: {
//             // when window width is >= 1280px
//             1280: {
//                 slidesPerView: 3,
//             },
//         },
//         freeMode: true,
//         watchSlidesProgress: true,
//         grabCursor: false,
//     });

//     const swiper2 = new Swiper('.mySwiper2', {
//         spaceBetween: 10,
//         navigation: {
//             nextEl: '.swiper-btn-next',
//             prevEl: '.swiper-btn-prev',
//         },
//         thumbs: {
//             swiper,
//         },
//         autoplay: {
//             delay: 115000,
//         },
//     });
// }
// import Swiper and modules
// import Swiper and modules
import Swiper, { Navigation, Pagination, Thumbs, FreeMode, Autoplay, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Thumbs, FreeMode, Autoplay, Scrollbar]);

export default function initSwiper() {
    const swiper = new Swiper('.mySwiper', {
        spaceBetween: 10,
        slidesPerView: 2,
        breakpoints: {
            // when window width is >= 1280px
            1024: {
                slidesPerView: 3,
            },
        },
        freeMode: true,
        watchSlidesProgress: true,
        grabCursor: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });

    const swiper2 = new Swiper('.mySwiper2', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        },
        thumbs: {
            swiper,
        },
        autoplay: {
            delay: 115000,
        },
    });

    const tabSliders = document.querySelectorAll('.tabSwiper');
    tabSliders.forEach((slider) => {
        const mySwiper2 = slider.querySelector('.mySwiperTab2');
        const mySwiper = slider.querySelector('.mySwiperTab');

        const swiper = new Swiper(mySwiper, {
            spaceBetween: 10,
            slidesPerView: 2,
            breakpoints: {
                // when window width is >= 1280px
                1024: {
                    slidesPerView: 3,
                },
            },
            freeMode: true,
            watchSlidesProgress: true,
            grabCursor: false,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
        });

        const swiper2 = new Swiper(mySwiper2, {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            thumbs: {
                swiper,
            },
            autoplay: {
                delay: 115000,
            },
        });
    });
}
