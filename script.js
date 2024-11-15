// Smooth Scrolling Functionality
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Highlight the active tab
        document.querySelectorAll('nav ul li a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Highlight the Current Section on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust offset for navbar height
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            // Update the active class in the navigation bar
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// About Section: Personal Information and Education
function displayAboutSection() {
    const aboutSection = document.getElementById('about');
    aboutSection.innerHTML = `
        <h2>About Me</h2>
        <p><strong>Name:</strong> Wali Khan Ahmadzai</p>
        <p><strong>Current Position:</strong> Master's Degree Student in Agricultural Economics at the University of Tsukuba, Japan</p>
        <p><strong>Email:</strong> ah.walikhan@gmail.com</p>
        <p><strong>Education:</strong></p>
        <ul>
            <li><strong>MSc. Agricultural Economics</strong>, University of Tsukuba (2023-2025, expected)</li>
            <li><strong>BSc. Agricultural Economics and Extension</strong>, Paktia University, Afghanistan (2015-2018)</li>
        </ul>
    `;
}

// Work Experience and Teaching Section
function displayWorkExperienceSection() {
    const workSection = document.getElementById('work');
    workSection.innerHTML = `
        <h2>Work Experience & Teaching</h2>
        <p><strong>Teaching Assistant</strong>, Shaikh Zayed University, Afghanistan (April 2019 - March 2022)</p>
        <p><strong>Research Assistant</strong>, University of Tsukuba, Japan (2022-Present)</p>
        <p><strong>Courses Taught:</strong></p>
        <ul>
            <li>AgEc520 - Development Economics (Spring 2019)</li>
            <li>AgEc731 - Production Economics (Fall 2019)</li>
            <li>AgEc418 - Econometrics (Spring 2020)</li>
            <li>AgEc630 - Applied Econometrics (Spring 2021)</li>
            <li>Econometrics Using R Programming (2023 - Present)</li>
        </ul>
    `;
}

// Research Section
function displayResearchSection() {
    const researchSection = document.getElementById('research');
    researchSection.innerHTML = `
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
    `;
}

// CV Section
function displayCVSection() {
    const cvSection = document.getElementById('cv');
    cvSection.innerHTML = `
        <h2>Curriculum Vitae</h2>
        <p><strong>Name:</strong> Wali Khan Ahmadzai</p>
        <p><strong>Education:</strong></p>
        <ul>
            <li><strong>MSc. Agricultural Economics</strong>, University of Tsukuba, Japan (2023 - 2025)</li>
            <li><strong>BSc. Agricultural Economics and Extension</strong>, Paktia University, Afghanistan (2015 - 2018)</li>
        </ul>
        <p><strong>Contact Information:</strong></p>
        <ul>
            <li>Email: ah.walikhan@gmail.com</li>
            <li>Phone: [Insert your phone number]</li>
        </ul>
        <p><strong>Work Experience:</strong></p>
        <ul>
            <li>Teaching Assistant, Shaikh Zayed University, Afghanistan (2019 - 2022)</li>
            <li>Research Assistant, University of Tsukuba, Japan (2022 - Present)</li>
        </ul>
        <p><strong>Publications:</strong></p>
        <ul>
            <li>Ahmadzai, W. K., & Aryobi, H. G. (2023). "Natural and Socio-economic Factors Affecting the Household Food Security in Rural Areas of Paktia Province, Afghanistan." <i>Asian Journal of Agricultural Extension, Economics & Sociology</i>, 39(2), 1-11.</li>
        </ul>
    `;
}

// Contact Me Section
function displayContactSection() {
    const contactSection = document.getElementById('contact');
    contactSection.innerHTML = `
        <h2>Contact Me</h2>
        <p>If you would like to get in touch with me, please use the contact information below:</p>
        <ul>
            <li><strong>Email:</strong> ah.walikhan@gmail.com</li>
            <li><strong>Phone:</strong> [Insert your phone number]</li>
        </ul>
        <button class="contact-button">Contact Me</button>
    `;
}

// Event Listener for the Contact Me button
document.querySelector('.contact-button')?.addEventListener('click', () => {
    alert('Thank you for reaching out! I will get back to you soon.');
});

// Initialize all sections when the page loads
window.addEventListener('DOMContentLoaded', () => {
    displayAboutSection();
    displayWorkExperienceSection();
    displayResearchSection();
    displayCVSection();
    displayContactSection();
});
