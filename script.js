let lastScrollY = window.scrollY;
const header = document.querySelector("header");
const footer = document.querySelector("footer");

/* =======================
   SMART HEADER & FOOTER
======================= */
window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add("hide");
        footer.classList.add("hide");
    } else {
        header.classList.remove("hide");
        footer.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});

/* =======================
   TAB SWITCHING
======================= */
document.querySelectorAll(".tab-link").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        document.querySelectorAll(".tab-content").forEach(tab =>
            tab.classList.remove("active")
        );
        document.querySelectorAll(".tab-link").forEach(l =>
            l.classList.remove("active")
        );

        const target = document.getElementById(link.dataset.tab);
        if (target) {
            target.classList.add("active");
            link.classList.add("active");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
});

/* =======================
   CLICK NAME = HOME
======================= */
document.querySelector(".portfolio-name").addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tab =>
        tab.classList.remove("active")
    );
    document.querySelectorAll(".tab-link").forEach(l =>
        l.classList.remove("active")
    );

    document.getElementById("about").classList.add("active");
    document.querySelector('[data-tab="about"]').classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =======================
   DEFAULT TAB
======================= */
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("about").classList.add("active");
    document.querySelector('[data-tab="about"]').classList.add("active");
});
