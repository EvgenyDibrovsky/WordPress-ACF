export default function initializeWidgetForm() {
    const btn = document.querySelector('.widget-form-btn');
    const widget = document.querySelector('.contact-form-widget');
    const closeBtn = document.querySelector('.widget-btn-close');

    if (!btn || !widget || !closeBtn) {
        return;
    }

    function hideWidget() {
        if (widget.classList.contains('active')) {
            widget.classList.remove('active');
        } else {
            widget.classList.add('active');
        }
    }

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        hideWidget();
    });

    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        widget.classList.remove('active');
    });

    // const windowHeight = document.body.scrollHeight;
    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            widget.classList.remove('active');
        }
    });

    const mql = window.matchMedia('(min-width: 992px)');
    if (mql.matches) {
        widget.classList.add('active');
    } else {
        widget.classList.remove('active');
    }

    mql.addEventListener('change', () => {
        if (mql.matches) {
            widget.classList.add('active');
        } else {
            widget.classList.remove('active');
        }
    });
}
