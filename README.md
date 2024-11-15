<meta name="description" content="Wali Khan Ahmadzai's portfolio showcasing work experience, research, and contact information.">
<meta name="keywords" content="Wali Khan Ahmadzai, portfolio, Agricultural Economics, research, contact">
<meta name="author" content="Wali Khan Ahmadzai">
<title>Wali Khan Ahmadzai - Portfolio</title>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wali Khan Ahmadzai's Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Add some basic styles for the contact section and icons */
        .contact-social {
            display: flex;
            gap: 15px;
            justify-content: center;
        }
        .social-icon {
            width: 40px;
            height: 40px;
            display: block;
            background-size: cover;
            transition: opacity 0.3s;
        }
        .facebook { background-image: url('facebook-icon.png'); }
        .twitter { background-image: url('x-icon.png'); }
        .instagram { background-image: url('instagram-icon.png'); }
        .linkedin { background-image: url('linkedin-icon.png'); }
        .google-scholar { background-image: url('google-scholar-icon.png'); }

        .contact-social a:hover .social-icon {
            opacity: 0.7;
        }

        /* Styling for the footer */
        footer p {
            position: relative;
            font-size: 14px;
        }
        footer .footer-line {
            height: 1px;
            background-color: #ccc;
            margin-bottom: 10px;
        }
        footer p::after {
            content: "© 2024 Wali Khan Ahmadzai";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            font-size: 12px;
            color: rgba(0, 0, 0, 0.3);
        }
    </style>
</head>
<body>
    <header>
        <div class="header-wrapper">
            <h1 class="portfolio-name">Wali Khan Ahmadzai</h1>
            <nav class="tabs-nav">
                <ul>
                    <li><a href="#" class="tab-link" data-tab="about">About</a></li>
                    <li><a href="#" class="tab-link" data-tab="work">Work Experience</a></li>
                    <li><a href="#" class="tab-link" data-tab="research">Research</a></li>
                    <li><a href="#" class="tab-link" data-tab="cv">CV</a></li>
                    <li><a href="#" class="tab-link" data-tab="contact">Contact</a></li>
                    <li><a href="#" class="tab-link" data-tab="outreach">Professional Development</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div id="about" class="tab-content active">
            <h2>About Me</h2>
            <div class="about-box">
                <img src="Profile.jpg" alt="Wali Khan Ahmadzai" class="profile-pic">
                <p><strong>Current Position:</strong> Master's Degree Student in Agricultural Economics at the <a href="https://www.tsukuba.ac.jp/" target="_blank">University of Tsukuba</a>, Japan</p>
                <p><strong>Email:</strong> <a href="mailto:ah.walikhan@gmail.com">ah.walikhan@gmail.com</a>, <a href="mailto:wk.ahmadzai.szu.edu.af">wk.ahmadzai.szu.edu.af</a></p>
                <p><strong>Education:</strong></p>
                <ul>
                    <li><strong>MSc. Agricultural Economics</strong>, <a href="https://www.tsukuba.ac.jp/" target="_blank">University of Tsukuba</a> (2023-2025, expected)</li>
                    <li><strong>BSc. Agricultural Economics and Extension</strong>, <a href="https://www.pu.edu.af/" target="_blank">Paktia University</a>, Afghanistan (2015-2018)</li>
                    <li><strong>Non-degree Research Student</strong>, Agricultural Economics, <a href="https://www.tsukuba.ac.jp/" target="_blank">University of Tsukuba</a> (April 2022 - March 2023)</li>
                </ul>
                <p><strong>Short Bio:</strong></p>
                <div class="bio-box">
                    <p>I hold a Master’s degree in Agricultural Economics from the University of Tsukuba, Japan. Previously, I served as a lecturer at Shaikh Zayed University, Afghanistan, where I contributed to the academic community for three years, honing my skills in teaching and research.</p>
                    <p>Currently in my second year of graduate studies, my research centers on the intersection of Agricultural Economics and Behavioral Economics, enriched by coursework in Sustainability, Development Economics, and Environmental Economics.</p>
                    <p>I am actively seeking Ph.D. opportunities to engage in multidisciplinary research that fosters impactful change in Agricultural Economics and related fields. My ultimate goal is to leverage my expertise to support sustainable development and economic resilience.</p>
                </div>
            </div>
        </div>

        <div id="work" class="tab-content">
            <h2>Work Experience & Teaching</h2>
            <p><strong>Teaching Assistant</strong>, <a href="https://szu.edu.af/en" target="_blank">Shaikh Zayed University</a>, Afghanistan (April 2019 - March 2022)</p>
            <p><strong>Research Assistant</strong>, University of Tsukuba, Japan (2022-Present)</p>
            <p><strong>Courses Taught:</strong></p>
            <ul>
                <li>AgEc520 - Development Economics (Spring 2019)</li>
                <li>AgEc731 - Production Economics (Fall 2019)</li>
                <li>AgEc418 - Econometrics (Spring 2020)</li>
                <li>AgEc630 - Applied Econometrics (Spring 2021)</li>
                <li>Econometrics Using R Programming (2023 - Present)</li>
            </ul>
        </div>

        <div id="research" class="tab-content">
            <h2>Research</h2>
            <p><strong>Publications:</strong></p>
            <ul>
                <li>Ahmadzai, W. K., & Aryobi, H. G. (2023). "Natural and Socio-economic Factors Affecting the Household Food Security in Rural Areas of Paktia Province, Afghanistan." <i>Asian Journal of Agricultural Extension, Economics & Sociology</i>, 39(2), 1-11.</li>
            </ul>
            <p><strong>Work in Progress:</strong></p>
            <ul>
                <li>Empowering Afghan Women through the Saffron Industry (Submission Stage)</li>
                <li>Japanese Consumers' Preferences for Afghan Saffron (Data Collection Stage)</li>
                <li>Afghan Consumer’s Perception of Genome-Edited Food (Analysis Stage)</li>
            </ul>
        </div>

        <div id="cv" class="tab-content">
            <h2>Curriculum Vitae</h2>
            <a href="Ahmadzai_CV.pdf" class="cv-link" download>Download My CV</a>
        </div>

        <div id="contact" class="tab-content">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch with me, please use the contact information below:</p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:ah.walikhan@gmail.com">ah.walikhan@gmail.com</a>, <a href="mailto:wk.ahmadzai.szu.edu.af">wk.ahmadzai.szu.edu.af</a></li>
            </ul>
            <div class="contact-social">
                <a href="https://www.linkedin.com/in/wali-khan-ahmadzai-b179961a2/" target="_blank" class="social-icon linkedin"></a>
                <a href="https://www.researchgate.net/profile/Wali-Khan-Ahmadzai" target="_blank" class="social-icon researchgate"></a>
                <a href="https://x.com/WKAhmadzai1" target="_blank" class="social-icon twitter"></a>
                <a href="https://www.facebook.com/AhmadziWaliKhan" target="_blank" class="social-icon facebook"></a>
                <a href="https://scholar.google.com/citations?user=yPdG7nsAAAAJ&hl=en&oi=ao" target="_blank" class="social-icon google-scholar"></a>
            </div>
        </div>

        <div id="outreach" class="tab-content">
            <h2>Professional Development</h2>
            <p>Professional Development and Workshops Attended</p>
            <ul>
                <li><a href="https://www.jica.go.jp/english/">JICA Workshops</a></li>
                <li><a href="https://www.undp.org/afghanistan">UNDP Social Cohesion Workshop</a></li>
            </ul>
        </div>
    </main>

    <footer>
        <div class="footer-line"></div>
        <p>Created by Wali Khan Ahmadzai</p>
    </footer>
</body>
</html>
