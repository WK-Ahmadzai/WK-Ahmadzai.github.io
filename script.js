// TAB SWITCHING
document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();

        document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// HEADER HIDE / SHOW ON SCROLL
let lastScroll = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    const current = window.pageYOffset;
    header.style.top = current > lastScroll ? "-120px" : "0";
    lastScroll = current;
});

// CLICK NAME = RESET TO ABOUT
document.getElementById('homeBtn').addEventListener('click', () => {
    location.reload();
});
