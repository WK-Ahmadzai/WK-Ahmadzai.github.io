// JavaScript to manage header and footer behavior
let lastScrollTop = 0;
const header = document.getElementById('header');
const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling Down
        header.classList.add('hidden');
        footer.classList.add('stretched');
    } else {
        // Scrolling Up
        header.classList.remove('hidden');
        footer.classList.remove('stretched');
    }
    lastScrollTop = scrollTop;
});

// Highlight tab on hover
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('selected'));
        tab.classList.add('selected');
    });
});
