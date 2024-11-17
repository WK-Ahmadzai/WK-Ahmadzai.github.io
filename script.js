// JavaScript to manage active tab highlight
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('selected'));
        tab.classList.add('selected');
    });
});
