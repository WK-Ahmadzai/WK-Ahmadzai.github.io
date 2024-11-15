// Handle tab switching
document.querySelectorAll('.tab-link').forEach(tabLink => {
    tabLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove 'active' class from all tabs and contents
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tabContent => tabContent.classList.remove('active'));

        // Add 'active' class to the clicked tab and its corresponding content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        this.classList.add('active');
    });
});

// Default to show the "About" section when the page loads
window.onload = () => {
    const defaultTab = document.querySelector('.tab-link[data-tab="about"]');
    if (defaultTab) {
        defaultTab.classList.add('active');
        document.getElementById('about').classList.add('active');
    }
};
