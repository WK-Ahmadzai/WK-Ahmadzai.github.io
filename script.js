document.querySelectorAll(".tab-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    document.querySelectorAll(".tab-link").forEach(l => l.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));

    link.classList.add("active");
    document.getElementById(link.dataset.tab).classList.add("active");
  });
});
