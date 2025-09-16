document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Active Navigation Link on Scroll ---
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Simple email validation
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });

});