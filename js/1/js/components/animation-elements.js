export default function initializeAnimateOnScroll() {
    function onEntry(entries) {
        entries.forEach((entry) => {
            const target = entry.target;
            if (entry.isIntersecting) {
                if (target.classList.contains('init-fade')) {
                    target.classList.add('animate-fade');
                } else if (target.classList.contains('init-fade-up')) {
                    target.classList.add('animate-fade-up');
                } else if (target.classList.contains('init-fade-down')) {
                    target.classList.add('animate-fade-down');
                } else if (target.classList.contains('init-fade-left')) {
                    target.classList.add('animate-fade-left');
                } else if (target.classList.contains('init-fade-right')) {
                    target.classList.add('animate-fade-right');
                }

                target.style.opacity = '1'; 
            }
        });
    }

    const observer = new IntersectionObserver(onEntry, {
        threshold: 0.1,
        rootMargin: '0px 0px -5% 0px',
    });

    const elements = Array.from(document.querySelectorAll('.init-fade, .init-fade-up, .init-fade-down, .init-fade-left, .init-fade-right'));

    elements.forEach((element) => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}
