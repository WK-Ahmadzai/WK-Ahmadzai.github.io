// TAB SWITCHING
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        document.querySelectorAll('.tab-link').forEach(l => {
            l.classList.remove('active');
        });

        document.getElementById(link.dataset.tab).classList.add('active');
        link.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// HEADER AUTO-HIDE
let lastScroll = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = current;
});

// CLICK NAME → REFRESH & ABOUT
document.getElementById('homeBtn').addEventListener('click', () => {
    window.location.reload();
});
