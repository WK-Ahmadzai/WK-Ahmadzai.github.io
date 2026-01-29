let lastScroll = window.scrollY;
const header = document.querySelector("header");
const footer = document.querySelector("footer");

/* Header hide/show */
window.addEventListener("scroll", () => {
    if (window.scrollY > lastScroll) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScroll = window.scrollY;

    /* Footer only at bottom */
    const scrollBottom = window.innerHeight + window.scrollY;
    if (scrollBottom >= document.body.offsetHeight - 5) {
        footer.classList.add("show");
    } else {
        footer.classList.remove("show");
    }
});

/* Tabs */
document.querySelectorAll(".tab-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        document.querySelectorAll(".tab-content").forEach(tab =>
            tab.classList.remove("active")
        );
        document.querySelectorAll(".tab-link").forEach(l =>
            l.classList.remove("active")
        );

        document.getElementById(link.dataset.tab).classList.add("active");
        link.classList.add("active");

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

/* Name click = home */
document.querySelector(".portfolio-name").addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tab =>
        tab.classList.remove("active")
    );
    document.getElementById("about").classList.add("active");

    document.querySelectorAll(".tab-link").forEach(l =>
        l.classList.remove("active")
    );
    document.querySelector('[data-tab="about"]').classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
});
