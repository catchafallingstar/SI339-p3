// Handling Broken Images
const images = document.querySelectorAll('img');
images.forEach(function (img) {
    img.addEventListener('error', function () {
        // Set a default image if the image fails to load
        img.src = 'images/default_image.jpg';
        img.alt = 'Default Image';
    });
});

// const toggleButton = document.getElementById('bott');
// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('darkmode');
    
// });

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("darkmode");
//     console.log("botton clicked");
//  }

//  document.addEventListener('DOMContentLoaded', () => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'lightmode') {
//         document.body.classList.add('lightmode');
        
//     } else {
//         document.body.classList.add('darkmode'); // Default to darkmode
//     }
// });