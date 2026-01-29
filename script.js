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

// HEADER HIDE / SHOW
let lastScroll = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  const current = window.pageYOffset;
  header.style.top = current > lastScroll ? "-120px" : "0";
  lastScroll = current;

  // FOOTER SHOW ONLY AT BOTTOM
  const footer = document.getElementById('main-footer');
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    footer.style.bottom = "0";
  } else {
    footer.style.bottom = "-100px";
  }
});

// RESET TO ABOUT
document.getElementById('homeBtn').addEventListener('click', () => {
  location.reload();
});
