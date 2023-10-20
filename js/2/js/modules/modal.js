export default function initializeModal() {
    if (!document.querySelector('[data-toggle="modal"]')) return;

    const modalButton = document.querySelectorAll('[data-toggle="modal"]');
    const closeButton = document.querySelectorAll('[data-close]');
    const modal = document.getElementById('modal');

    function toggleModal() {
        modal.classList.toggle('active');
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    for (let i = 0; modalButton.length > i; i++) {
        modalButton[i].addEventListener('click', toggleModal);
    }

    for (let i = 0; closeButton.length > i; i++) {
        closeButton[i].addEventListener('click', toggleModal);
    }

    window.addEventListener('click', windowOnClick);
}
