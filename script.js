// JavaScript for Tab Navigation
const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove 'active' class from all tabs and contents
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked tab and its content
        tab.classList.add('active');
        const targetContent = document.querySelector(tab.getAttribute('href'));
        targetContent.classList.add('active');
    });
});
