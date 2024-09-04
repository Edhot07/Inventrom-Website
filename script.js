document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const Navbar = document.getElementById('linksInSmallView');

    hamburger.addEventListener('click', function () {
        Navbar.classList.toggle('active');
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.innerHTML = hamburger.classList.contains('active') ? 'X' : '&#9776;';
    });
});