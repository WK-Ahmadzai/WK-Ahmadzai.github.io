document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();

            // Hide all tab content
            tabContents.forEach(content => content.classList.remove("active"));

            // Show the clicked tab's content
            const target = e.target.getAttribute("data-tab");
            document.getElementById(target).classList.add("active");
        });
    });
});
