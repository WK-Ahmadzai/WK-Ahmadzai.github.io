// Wait for the document to load
document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to show the content of the clicked tab
    function showTabContent(tab) {
        tabContents.forEach(content => content.classList.remove('active')); // Hide all content
        tabLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links

        // Show content of the clicked tab and mark the link as active
        const tabContent = document.getElementById(tab);
        tabContent.classList.add('active');
        document.querySelector(`.tab-link[data-tab="${tab}"]`).classList.add('active');
    }

    // Add click event listeners to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const tabId = event.target.getAttribute('data-tab');
            showTabContent(tabId);
        });
    });

    // Initially show the content of the first tab (About)
    showTabContent('about');
});
