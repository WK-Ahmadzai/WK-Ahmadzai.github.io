// Handle tab switching
document.querySelectorAll('.tab-link').forEach(tabLink => {
    tabLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Hide all tab content sections
        document.querySelectorAll('.tab-content').forEach(tabContent => {
            tabContent.classList.remove('active');
        });

        // Show the clicked tab's content
        const tabId = this.getAttribute('data-tab');
        const targetTabContent = document.getElementById(tabId);
        targetTabContent.classList.add('active');

        // Highlight the active tab
        document.querySelectorAll('.tab-link').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Default to show the "About" section when the page loads
window.onload = () => {
    document.getElementById('about').classList.add('active');
};
