// Handling Broken Images
const images = document.querySelectorAll('img');
images.forEach(function (img) {
    img.addEventListener('error', function () {
        // Set a default image if the image fails to load
        img.src = 'images/default_image.jpg';
        img.alt = 'Default Image';
    });
});

let lastScrollPosition = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // User is scrolling down - hide the navbar
        navbar.classList.add('navbar-hidden');
    } else {
        // User is scrolling up - show the navbar
        navbar.classList.remove('navbar-hidden');
    }

    lastScrollPosition = currentScrollPosition;
});
