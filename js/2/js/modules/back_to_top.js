export function backToTop() {
  const backToTopBtn = document.querySelector('#back_to_top');

  window.addEventListener('scroll', function () {
    const scrolledAmount = window.pageYOffset;
    const clientHeight = document.documentElement.clientHeight;

    backToTopBtn.classList.toggle('back_to_top-show', scrolledAmount > clientHeight);
  });

  backToTopBtn.addEventListener('click', function (event) {
    event.preventDefault(); // prevents default action (href="#")
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
