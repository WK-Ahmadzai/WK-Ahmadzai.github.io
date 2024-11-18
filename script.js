/* Reset */
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
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Header */
header {
    background-color: rgba(0, 188, 212, 0.9);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 20px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header h1 {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    padding: 5px 10px;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #00acc1;
}

/* Main Content */
main {
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.content-box {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 800px;
    width: 100%;
}

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #00bcd4;
    margin-bottom: 20px;
}

/* Footer */
footer {
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    padding: 15px;
    margin-top: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

footer .social-media {
    margin-bottom: 10px;
}

footer .social-media a {
    margin: 0 10px;
    display: inline-block;
    transition: transform 0.3s ease;
}

footer .social-media a:hover {
    transform: scale(1.2);
}

footer .social-media img {
    width: 30px;
    height: 30px;
}

footer p {
    font-size: 0.8rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    header h1 {
        font-size: 1.4rem;
    }

    nav ul {
        flex-direction: column;
        gap: 10px;
    }

    .content-box {
        padding: 15px;
    }
}
