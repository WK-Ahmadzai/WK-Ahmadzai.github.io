// Mouse Move Effect to Create Interactive Experience
document.addEventListener('mousemove', function(e) {
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');

    // Move header and footer based on mouse position
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // Example of dynamic changes on mouse movement
    header.style.transform = `translateX(${mouseX / 10}px) translateY(${mouseY / 15}px)`;
    footer.style.transform = `translateX(${mouseX / 15}px) translateY(${mouseY / 20}px)`;

    // Add subtle opacity effect based on mouse position
    header.style.opacity = 1 - (mouseY / window.innerHeight);
    footer.style.opacity = 1 - (mouseY / window.innerHeight);
});
