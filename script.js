// Smooth Scrolling Functionality
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Highlight the active tab
        document.querySelectorAll('nav ul li a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Highlight the Current Section on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust offset for navbar height
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            // Update the active class in the navigation bar
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Contact Button Interaction
document.querySelector('.contact-button')?.addEventListener('click', () => {
    alert('Thank you for reaching out! I will get back to you soon.');
});
