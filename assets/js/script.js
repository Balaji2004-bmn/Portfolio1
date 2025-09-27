// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/Balaji2004-bmn/Portfolio1/main/assets/resume/Balaji_Nidavanche.pdf'; // Corrected RAW GitHub URL
    link.download = 'resume.pdf';

    // For demo purposes, show an alert
    //alert('Resume download feature: Please add your actual resume PDF to enable downloads. For now, please contact me directly at shivani2kk4@gmail.com');
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Typewriter Effect
// Typewriter Effect
const texts = [
    "Full-Stack Developer",
    "Frontend Engineer (React / Angular)",
    "Backend Developer (Node.js / Spring Boot)",
    "Database Designer (MySQL / MongoDB)",
    "API Integration Specialist"
];


let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.querySelector('.typed-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 2000;

function typeWriter() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, deletingSpeed);
        }
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, delayBetweenTexts);
        } else {
            setTimeout(typeWriter, typingSpeed);
        }
    }
}

// Start typewriter effect
typeWriter();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// AOS Animation Init
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Project Filtering Logic
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('.portfolio-item').forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
        item.classList.add('aos-animate');
      } else {
        item.style.display = 'none';
        item.classList.remove('aos-animate');
      }
    });
  });
});


// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
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

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Create animated success message
        const successMessage = document.createElement('div');
        successMessage.innerHTML = `
            <div class="alert alert-success" style="
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                border: none;
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
                animation: slideInRight 0.5s ease-out;
            ">
                <i class="fas fa-check-circle me-2"></i>
                Message sent successfully! I'll get back to you soon.
            </div>
        `;
        document.body.appendChild(successMessage);

        setTimeout(() => {
            successMessage.remove();
        }, 5000);

        this.reset();
    }
});
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/Balaji2004-bmn/Portfolio1/main/assets/resume/Balaji_Nidavanche.pdf'; // Corrected RAW GitHub URL
    link.download = 'Balaji-Nidavanche.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

        
// Add animation keyframes for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Email validation
document.getElementById('email').addEventListener('blur', function () {
    const email = this.value;
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (email && !emailRegex.test(email)) {
        this.style.borderColor = 'var(--primary-color)';
        this.style.boxShadow = '0 0 0 0.2rem rgba(255, 0, 64, 0.25)';
    } else {
        this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        this.style.boxShadow = 'none';
    }
});

// Add loading animation
window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

  // Mapping of portfolio classes -> card IDs
  const projectMap = {
    "fullstack": "project1-card",
    "ai": "project2-card",
    "ai-nlp": "project3-card",
    "calculator": "project4-card"
  };

  // Attach click events dynamically
  Object.keys(projectMap).forEach(cls => {
    const item = document.querySelector(`.portfolio-item.${cls}`);
    const cardId = projectMap[cls];
    const card = document.getElementById(cardId);

    if (item && card) {
      // Open on portfolio click
      item.addEventListener("click", e => {
        e.preventDefault();
        card.classList.add("show");
      });

      // Close on close-btn
      card.querySelector(".close-btn").addEventListener("click", () => {
        card.classList.remove("show");
      });

      // Close on background click
      card.addEventListener("click", e => {
        if (e.target === card) card.classList.remove("show");
      });
    }
  });