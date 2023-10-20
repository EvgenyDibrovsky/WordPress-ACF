let divAdded = false;
export default function addClassToElementAfterScroll(element, offsetTop) {
    if (!element) return;

    const headerHeight = element.offsetHeight;
    const div = document.createElement('div');
    div.style.height = headerHeight + 'px';
    div.classList.add('filler');
    const scrollTop = window.pageYOffset;

    if (scrollTop > offsetTop) {
        element.classList.add('fixed');
        if (divAdded === false) {
            divAdded = !divAdded;
            element.parentNode.insertBefore(div, element);
        }
    } else {
        element.classList.remove('fixed');
        if (divAdded === true) {
            divAdded = !divAdded;
            element.previousElementSibling.remove();
        }
    }
}
