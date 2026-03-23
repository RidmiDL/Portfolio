// Portfolio Website JavaScript
// Add your JavaScript code here

// Example: Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');

if (menuIcon) {
    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}
