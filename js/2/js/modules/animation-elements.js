export default function animateElements() {
  function onEntry(entries) {
    entries.forEach(entry => {
      const target = entry.target;
      if (entry.isIntersecting) {
        let animateClass;
        const duration = target.getAttribute('data-time') || '1s';
        const delay = target.getAttribute('data-delay') || '0s';
        const delayInMilliseconds = parseFloat(delay) * 1000;

        if (target.classList.contains('init-animate-1')) {
          animateClass = 'animate-animate-1';
        } else if (target.classList.contains('init-animate-1-1')) {
          animateClass = 'animate-animate-1-1';
        } else if (target.classList.contains('init-animate-2')) {
          animateClass = 'animate-animate-2';
        } else if (target.classList.contains('init-animate-2-2')) {
          animateClass = 'animate-animate-2-2';
        } else if (target.classList.contains('init-animate-3')) {
          animateClass = 'animate-animate-3';
        } else if (target.classList.contains('init-animate-3-3')) {
          animateClass = 'animate-animate-3-3';
        } else if (target.classList.contains('init-animate-4')) {
          animateClass = 'animate-animate-4';
        } else if (target.classList.contains('init-animate-4-4')) {
          animateClass = 'animate-animate-4-4';
        } else if (target.classList.contains('init-animate-5')) {
          animateClass = 'animate-animate-5';
        } else if (target.classList.contains('init-animate-5-5')) {
          animateClass = 'animate-animate-5-5';
        }

        if (animateClass) {
          target.classList.remove('not-animated');
          target.style.animationDuration = duration;

          setTimeout(() => {
            target.classList.remove('opacity-0');
            target.classList.add(animateClass);
          }, delayInMilliseconds);
        }
      }
    });
  }

  const observer = new IntersectionObserver(onEntry, {
    threshold: 0.1,
    rootMargin: '0px 0px -5% 0px',
  });

  const elements = Array.from(
    document.querySelectorAll(
      '.init-animate-1, .init-animate-1-1, .init-animate-2, .init-animate-2-2, .init-animate-3, .init-animate-3-3, .init-animate-4, .init-animate-4-4, .init-animate-5, .init-animate-5-5'
    )
  );

  elements.forEach(element => {
    element.classList.add('not-animated');
    observer.observe(element);
  });
}
