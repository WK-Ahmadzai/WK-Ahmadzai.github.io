document.addEventListener("DOMContentLoaded", function() {
  // Select all tab links and the content sections
  const tabs = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('div[id]');

  // Loop through all tabs and add click event listener
  tabs.forEach(tab => {
    tab.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Remove the 'active' class from all tabs
      tabs.forEach(t => t.classList.remove('active'));

      // Add 'active' class to the clicked tab
      tab.classList.add('active');

      // Hide all sections
      sections.forEach(section => {
        section.style.display = 'none';
      });

      // Get the ID of the section to display
      const targetId = tab.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      // Show the selected section
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });

  // Set the first tab as active and display its content by default
  tabs[0].classList.add('active');
  sections[0].style.display = 'block';
});
