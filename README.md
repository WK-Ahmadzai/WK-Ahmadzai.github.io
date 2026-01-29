<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Wali Khan Ahmadzai's Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    /* ========== BASIC RESET ========== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #f4f8fb;
      color: #333;
      line-height: 1.6;
      display: flex;
      flex-direction: column;
    }

    /* ========== HEADER ========== */
    header {
      background-color: #00bcd4;
      color: #fff;
      padding: 15px 20px;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    }

    .header-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .portfolio-name {
      font-size: 2rem;
      font-weight: bold;
    }

    .tabs-nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }

    .tabs-nav a {
      color: #fff;
      text-decoration: none;
      padding: 6px 10px;
    }

    .tabs-nav a.active {
      border-bottom: 2px solid #fff;
      font-weight: bold;
    }

    /* ========== MAIN CONTENT ========== */
    main {
      flex: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 20px 40px;
      width: 100%;
    }

    .tab-content {
      display: none;
    }

    .tab-content.active {
      display: block;
    }

    /* ========== BOXES ========== */
    .about-box, .bio-box, .work-box, .research-box {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }

    /* ========== ABOUT LAYOUT (PHOTO LEFT) ========== */
    .about-box {
      display: flex;
      gap: 25px;
      align-items: flex-start;
    }

    .profile-pic {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 3px solid #00bcd4;
      object-fit: cover;
      flex-shrink: 0;
    }

    /* ========== CV BUTTON ========== */
    .cv-link {
      display: inline-block;
      background-color: #00bcd4;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
    }

    /* ========== LANGUAGES BOX ========== */
    .languages-box {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px 20px;
      margin-top: 20px;
    }

    /* ========== FOOTER (BOTTOM ONLY) ========== */
    footer {
      width: 100%;
      background-color: #333;
      color: white;
      text-align: center;
      padding: 12px 10px;
      font-size: 0.85rem;
    }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 768px) {
      .header-wrapper {
        flex-direction: column;
        gap: 10px;
      }

      .tabs-nav ul {
        flex-direction: column;
        align-items: center;
      }

      .about-box {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  </style>
</head>

<body>

<header>
  <div class="header-wrapper">
    <div class="portfolio-name">Wali Khan Ahmadzai</div>
    <nav class="tabs-nav">
      <ul>
        <li><a href="#" class="tab-link active" data-tab="about">About</a></li>
        <li><a href="#" class="tab-link" data-tab="work">Work</a></li>
        <li><a href="#" class="tab-link" data-tab="research">Research</a></li>
        <li><a href="#" class="tab-link" data-tab="cv">CV</a></li>
        <li><a href="#" class="tab-link" data-tab="contact">Contact</a></li>
        <li><a href="#" class="tab-link" data-tab="outreach">Professional</a></li>
      </ul>
    </nav>
  </div>
</header>

<main>

<!-- ===== ABOUT ===== -->
<section id="about" class="tab-content active">
  <h2>About Me</h2>
  <div class="about-box">
    <img src="Profile.jpg" alt="Wali Khan Ahmadzai" class="profile-pic">
    <div>
      <p><strong>Current Position:</strong> Graduate Student in Agricultural Economics at the University of Tsukuba, Japan</p>
      <p><strong>Education:</strong></p>
      <ul>
        <li>MSc. Agricultural Economics, University of Tsukuba</li>
        <li>BSc. Agricultural Economics and Extension, Paktia University</li>
        <li>Non-degree Research Student, University of Tsukuba</li>
      </ul>
      <div class="bio-box">
        <p>I hold a Master’s degree in Agricultural Economics from the University of Tsukuba, Japan...</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== WORK ===== -->
<section id="work" class="tab-content">
  <h2>Work Experience & Teaching</h2>
  <!-- unchanged -->
</section>

<!-- ===== RESEARCH ===== -->
<section id="research" class="tab-content">
  <h2>Research</h2>
  <!-- unchanged -->
</section>

<!-- ===== CV ===== -->
<section id="cv" class="tab-content">
  <h2>Curriculum Vitae</h2>
  <a href="Ahmadzai_CV.pdf" class="cv-link" download>Download My CV</a>
</section>

<!-- ===== CONTACT ===== -->
<section id="contact" class="tab-content">
  <h2>Contact</h2>
  <!-- unchanged -->
</section>

<!-- ===== OUTREACH ===== -->
<section id="outreach" class="tab-content">
  <h2>Professional Development / Outreach</h2>
  <!-- unchanged -->
</section>

</main>

<footer>
  <p>&copy; 2024 Wali Khan Ahmadzai. All rights reserved.</p>
</footer>

<script>
  document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      link.classList.add('active');
      document.getElementById(link.dataset.tab).classList.add('active');
    });
  });
</script>

</body>
</html>
