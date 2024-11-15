// Function to switch between tabs
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    // Add click event listener to each tab link
    tabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            // Remove active class from all tabs and contents
            tabs.forEach(tab => tab.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add active class to clicked tab and corresponding content
            tab.classList.add("active");
            const targetId = tab.getAttribute("href").substring(1); // Get target section ID
            const targetContent = document.getElementById(targetId);
            targetContent.classList.add("active");
        });
    });

    // Optionally, you can also set the first tab as active by default
    if (tabs.length > 0 && tabContents.length > 0) {
        tabs[0].classList.add("active");
        tabContents[0].classList.add("active");
    }
});
