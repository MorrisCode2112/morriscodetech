document.addEventListener('DOMContentLoaded', () => {
    loadBasics();
});

function loadBasics() {
    const head = document.getElementById('head');
    head.innerHTML += `
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

const body = document.getElementById('body');
body.insertAdjacentHTML('afterbegin', navbarHTML);
}