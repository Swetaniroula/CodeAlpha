let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


// scroll section active links

let sections = document.querySelectorAll('selection');
let navLinks = document.querySelectoryAll('header nav a');

window.onscrolll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // toggle icon bar and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
    // // scroll reveal
    // document.addEventListener('DOMContentLoaded', () => {
    //     ScrollReveal({
    //         distance: '80px',
    //         duration: 2000,
    //         delay: 200,
    //     });
    //     ScrollReveal().reveal('.home-content, h1, h2, h3, h4, h5, h6', {origin: 'top'});
    //     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
    //     ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
    //     ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});
    // });

    // // Typed.js
    // const typed = new Typed('.multiple-text', {
    //     strings: ['Frontend Developer', 'Web Designer', 'Graphic Designer'],
    //     typeSpeed: 70,
    //     backSpeed: 70,
    //     backDelay: 1000,
    //     loop: true,
    // });