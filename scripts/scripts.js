let slideIndex = 1;

// Wait for the page to load.
document.addEventListener('DOMContentLoaded', () => {
    loadBasics();
    showSlides(slideIndex);
});

// A function to generate the html of the navbar and footer, so I save time.
function loadBasics() {
    document.head.innerHTML += `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/favicon/site.webmanifest">`;

    const navbarHTML = `
    <nav class="navbar">
        <ul class="navbar-menu">
            <li class="navbar-logo"><span><strong>Morris Code Technologies</strong></span></li>
            <li><a href="index.html" class="navbar-link"><span>Home</span></a></li>
            <li><a href="services.html" class="navbar-link"><span>Services</span></a></li>
            <li><a href="about.html" class="navbar-link"><span>About</span></a></li>
        </ul>
    </nav>
    `;

    const footerHTML = `
    <footer class="footer">
        <p>Copyright &copy; 2025, Joshua Morris, Morris Code Technologies.</p>
        <p><a href="contact.html">Contact</a></p>
    </footer>`
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    document.body.insertAdjacentHTML("afterend", footerHTML);
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

