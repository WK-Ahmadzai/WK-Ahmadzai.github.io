document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const brandName = document.getElementById('refresh-brand');
    let lastScroll = 0;

    // 1. Refresh Page on Name Click
    brandName.addEventListener('click', () => {
        window.location.reload();
    });

    // 2. Tab Switching Logic
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-tab');

            // Update Active Link
            tabLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show Content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    });

    // 3. Smart Header (Hides on Scroll Down, Shows on Scroll Up)
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('header-hidden');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('header-hidden')) {
            // Scrolling Down
            header.classList.add('header-hidden');
        } else if (currentScroll < lastScroll && header.classList.contains('header-hidden')) {
            // Scrolling Up
            header.classList.remove('header-hidden');
        }
        lastScroll = currentScroll;
    });
});
