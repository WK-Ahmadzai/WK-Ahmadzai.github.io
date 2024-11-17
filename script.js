// Tab navigation functionality
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Add active class to clicked tab and corresponding content
            const targetTab = event.target.getAttribute("data-tab");
            document.querySelector(`#${targetTab}`).classList.add("active");
            event.target.classList.add("active");
        });
    });
});
