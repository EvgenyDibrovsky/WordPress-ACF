export default function initializeModal() {
    if (!document.querySelector('[data-toggle="modal"]')) return;

    const modalButton = document.querySelectorAll('[data-toggle="modal"]');
    const closeButton = document.querySelectorAll('[data-close]');
    let assignedId;
    let modal;

    function toggleModal() {
        modal.classList.toggle('active');
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    for (let i = 0; modalButton.length > i; i++) {
        modalButton[i].onclick = function () {
            assignedId = this.getAttribute('data-for');
            modal = document.getElementById(assignedId);
            toggleModal();
        };
    }

    for (let i = 0; closeButton.length > i; i++) {
        closeButton[i].addEventListener('click', toggleModal);
    }

    window.addEventListener('click', windowOnClick);

    window.addEventListener('keyup', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            toggleModal();
        }
    });
}
