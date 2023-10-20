import Scrollbar from 'smooth-scrollbar';

export default function initSmoothScrollbar() {
    const scrollContainer = document.querySelector('.scrollbar');

    if (scrollContainer) {
        Scrollbar.init(scrollContainer, {
            damping: 0.03, // Параметр затухания (меньшее значение - плавнее прокрутка)
            thumbMinSize: 20, // Минимальный размер ползунка
            renderByPixels: true, // Всегда рендерить скролл по пикселям
            alwaysShowTracks: true, // Всегда показывать полосу прокрутки
            continuousScrolling: true, // Продолжать прокрутку при достижении края
        });
    }
}
