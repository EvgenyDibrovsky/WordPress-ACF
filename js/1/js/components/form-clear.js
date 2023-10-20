export default function initializeFormClear() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const allFields = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], textarea');

    const toggleClearBtn = function (e) {
        if (e.target.value !== '') {
            e.target.nextElementSibling.classList.add('active');
        } else {
            e.target.nextElementSibling.classList.remove('active');
        }
    };

    const clearValue = function (e) {
        e.target.classList.remove('active');
        e.target.previousElementSibling.value = '';
    };

    allFields.forEach((field) => {
        field.addEventListener('input', toggleClearBtn);
        field.nextElementSibling.addEventListener('click', clearValue);
    });
}