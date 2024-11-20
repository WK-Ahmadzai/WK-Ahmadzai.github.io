// Handle tab switching with accessibility enhancements
document.querySelectorAll('.tab-link').forEach(tabLink => {
    tabLink.addEventListener('click', function (event) {
        event.preventDefault();

        // Hide all tab content sections
        document.querySelectorAll('.tab-content').forEach(tabContent => {
            tabContent.classList.remove('active');
            tabContent.setAttribute('aria-hidden', 'true'); // Accessibility enhancement
        });

        // Show the clicked tab's content
        const tabId = this.getAttribute('data-tab');
        const targetTabContent = document.getElementById(tabId);
        if (targetTabContent) {
            targetTabContent.classList.add('active');
            targetTabContent.setAttribute('aria-hidden', 'false'); // Accessibility enhancement
        }

        // Highlight the active tab
        document.querySelectorAll('.tab-link').forEach(link => {
            link.classList.remove('active');
            link.setAttribute('aria-selected', 'false'); // Accessibility enhancement
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true'); // Accessibility enhancement
    });
});

// Set default active tab and ensure accessibility compliance
window.addEventListener('DOMContentLoaded', () => {
    const defaultTab = document.getElementById('about');
    const defaultTabLink = document.querySelector('.tab-link[data-tab="about"]');

    if (defaultTab && defaultTabLink) {
        defaultTab.classList.add('active');
        defaultTab.setAttribute('aria-hidden', 'false'); // Accessibility enhancement
        defaultTabLink.classList.add('active');
        defaultTabLink.setAttribute('aria-selected', 'true'); // Accessibility enhancement
    }
});
