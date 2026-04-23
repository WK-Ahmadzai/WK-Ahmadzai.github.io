const body = document.body;
const header = document.getElementById('main-header');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');
const progressBar = document.getElementById('scroll-progress');
const themeToggle = document.getElementById('themeToggle');
const revealItems = document.querySelectorAll('.reveal-up');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    const headerHeight = header.offsetHeight;

    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');

    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

document.getElementById('homeBtn').addEventListener('click', event => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

let lastScrollY = window.scrollY;

function updateOnScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 150) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  lastScrollY = currentScrollY;

  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;

  let currentSection = 'home';
  document.querySelectorAll('main section[id]').forEach(section => {
    const rect = section.getBoundingClientRect();
    const triggerPoint = header.offsetHeight + 90;
    if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === currentSection);
  });
}

window.addEventListener('scroll', updateOnScroll);
window.addEventListener('load', updateOnScroll);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach(item => observer.observe(item));
