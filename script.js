// Tab switching functionality
const tabs = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.style.display = 'none');

        document.getElementById(tab.dataset.tab).style.display = 'block';
        tab.classList.add('active');
    });
});

// Activate the first tab by default
document.querySelector('.tab-link').classList.add('active');
document.getElementById(tabs[0].dataset.tab).style.display = 'block';
