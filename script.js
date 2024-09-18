// Document Ready Function
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Resume Button Download
    document.getElementById('resumeButton').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'path/to/your/resume.csv'; // Replace with the actual path
        link.download = 'resume.csv'; // This will be the name of the downloaded file
        link.click();
    });

    // Form Validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('All fields are required.');
            e.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Dynamic Content Loading Example
    document.getElementById('loadContent').addEventListener('click', function() {
        fetch('path/to/your/content.html') // Replace with your content path
            .then(response => response.text())
            .then(data => {
                document.getElementById('dynamicContent').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    });

    // Example of Simple Animation
    const animateElement = document.getElementById('animateMe');
    document.getElementById('startAnimation').addEventListener('click', function() {
        animateElement.classList.add('animate');
    });

    // Example of CSS Animation (Add to your CSS file)
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .animate {
            animation: fadeIn 2s ease-out;
        }
    `;
    document.head.appendChild(style);
});
