export function initializeFormClear() {
  const forms = document.querySelectorAll('.contact-form-footer, .contact-form-footer-modal');

  forms.forEach(form => {
    if (!form) return;

    const allFields = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], textarea');

    const toggleClearBtn = function (e) {
      if (e.target.value !== '') {
        e.target.parentNode.nextElementSibling.classList.add('active');
      } else {
        e.target.parentNode.nextElementSibling.classList.remove('active');
      }
    };

    const clearValue = function (e) {
      const input = e.target.previousElementSibling.querySelector('input, textarea');
      e.target.classList.remove('active');
      input.value = '';
    };

    allFields.forEach(field => {
      field.addEventListener('input', toggleClearBtn);
      field.parentNode.nextElementSibling.addEventListener('click', clearValue);
    });
  });
}
