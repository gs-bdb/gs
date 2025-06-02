

const logo = document.querySelector('.logo-container h1');
const navLinks = document.querySelectorAll('.main-nav a');
const heroImage = document.querySelector('.hero-image img');
const dashboardButton = document.querySelector('.dashboard-button a');


if (logo) {
    setInterval(() => {
        logo.classList.add('pulse');
        setTimeout(() => {
            logo.classList.remove('pulse');
        }, 1000);
    }, 5000);
}


navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.textDecoration = 'underline';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.textDecoration = 'none';
    });
});