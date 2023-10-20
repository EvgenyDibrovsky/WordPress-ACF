export default function topicFormApartList() {
    const buttons = Array.from(document.querySelectorAll('.topic-btn'));

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let { title } = e.target.dataset;
            if (!title && e.target.parentNode.dataset.title) {
                title = e.target.parentNode.dataset.title;
            }
            const topicInput = document.getElementById('topic');
            if (topicInput) {
                topicInput.value = title;
            }
        });
    });
}
