
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav_header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
