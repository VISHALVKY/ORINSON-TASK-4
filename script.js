const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li'); 

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Add event listener to each link to close the menu after click
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open'); 
    });
});

