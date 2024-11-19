// Insert custom CSS styles dynamically
const style = document.createElement('style');
style.innerHTML = `
  /* Basic Reset */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  /* Body */
  body {
      font-family: Arial, sans-serif;
      background-color: #f4f8fb;
      color: #333;
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
  }

  /* Header */
  header {
      background-color: #00bcd4;
      color: #fff;
      padding: 15px 20px;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 999;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .portfolio-name {
      font-size: 2rem;
      font-weight: bold;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }

  .tabs-nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
  }

  .tabs-nav li a {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      padding: 5px 10px;
      transition: color 0.3s ease, transform 0.3s ease;
  }

  .tabs-nav li a:hover {
      color: #00acc1;
      transform: scale(1.1);
  }

  .tabs-nav li a.active {
      border-bottom: 2px solid #fff;
      font-weight: bold;
  }

  /* Tab Content */
  .tab-content {
      display: none;
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .tab-content.active {
      display: block;
      opacity: 1;
      transform: translateY(0);
      padding-top: 80px;
  }

  /* Boxes for Content */
  .about-box,
  .bio-box,
  .work-box,
  .research-box {
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .about-box:hover,
  .bio-box:hover,
  .work-box:hover,
  .research-box:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .profile-pic {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 15px;
      border: 3px solid #00bcd4;
  }

  /* Footer */
  footer {
      margin-top: auto;
      text-align: center;
      background-color: #333;
      color: white;
      padding: 10px 0;
      font-size: 0.9rem;
  }

  .footer-line {
      width: 100%;
      height: 3px;
      background-color: #000;
      margin-top: 20px;
  }

  footer p {
      font-size: 0.8rem;
      margin-top: 5px;
  }

  /* Cursor Styles */
  .cursor {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #00bcd4;
      pointer-events: none;
      transform: translate(-50%, -50%);
      transition: all 0.3s ease;
  }

  .cursor.hover {
      width: 20px;
      height: 20px;
      background-color: #0097a7;
  }
`;

document.head.appendChild(style);

// Handle tab switching with enhancements
document.querySelectorAll('.tab-link').forEach(tabLink => {
    tabLink.addEventListener('click', function(event) {
        event.preventDefault();

        // Hide all tab content sections
        document.querySelectorAll('.tab-content').forEach(tabContent => {
            tabContent.classList.remove('active');
            tabContent.setAttribute('aria-hidden', 'true');
        });

        // Show the clicked tab's content
        const tabId = this.getAttribute('data-tab');
        const targetTabContent = document.getElementById(tabId);
        targetTabContent.classList.add('active');
        targetTabContent.setAttribute('aria-hidden', 'false');

        // Highlight the active tab
        document.querySelectorAll('.tab-link').forEach(link => {
            link.classList.remove('active');
            link.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
    });
});

// Default to show the "About" section when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const defaultTab = document.getElementById('about');
    const defaultTabLink = document.querySelector('.tab-link[data-tab="about"]');

    // Ensure the default tab is active
    if (defaultTab && defaultTabLink) {
        defaultTab.classList.add('active');
        defaultTab.setAttribute('aria-hidden', 'false');
        defaultTabLink.classList.add('active');
        defaultTabLink.setAttribute('aria-selected', 'true');
    }
});

// Create custom cursor and add interactivity
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll("a, button, .tabs-nav li").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
        });
        item.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
        });
    });
});
