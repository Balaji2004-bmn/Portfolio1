
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});


function downloadResume() {
  const link = document.createElement('a');
  link.href = 'https://raw.githubusercontent.com/Balaji2004-bmn/Portfolio1/main/assets/resume/Balaji_Nidavanche.pdf';
  link.download = 'Balaji-Nidavanche.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const texts = [
  "Frontend Developer",
  "UI Engineer (HTML / CSS / JavaScript)",
  "React.js Developer",
  "Responsive Web Designer",
  "Web Performance Enthusiast"
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
    typedTextElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  } else {
    typedTextElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(() => {}, delayBetweenTexts);
    }
  }
  setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
}

if (typedTextElement) typeWriter();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.style.display =
        filter === 'all' || item.classList.contains(filter) ? 'block' : 'none';
    });
  });
});



// Open modal
document.querySelectorAll('.portfolio-item a[data-project]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const cardId = link.getAttribute('data-project');
    const card = document.getElementById(cardId);
    if (card) card.classList.add('show');
  });
});

// Close modal (X button)
document.querySelectorAll('.floating-card .close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.floating-card').classList.remove('show');
  });
});

// Close modal on outside click
document.querySelectorAll('.floating-card').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target === card) card.classList.remove('show');
  });
});


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
  } else {
    navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// ===================== ACTIVE NAV LINK =====================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});


const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (backToTopBtn) {
    backToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      const success = document.createElement('div');
      success.innerHTML = `
        <div class="alert alert-success" style="
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
          background: linear-gradient(135deg,#28a745,#20c997);
          color:#fff;
          padding:15px 25px;
          border-radius:10px;
          animation: slideInRight 0.5s ease;">
          ✔ Message sent successfully!
        </div>`;
      document.body.appendChild(success);
      setTimeout(() => success.remove(), 5000);
      contactForm.reset();
    }
  });
}


const emailInput = document.getElementById('email');
if (emailInput) {
  emailInput.addEventListener('blur', () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailInput.style.borderColor = regex.test(emailInput.value)
      ? 'rgba(255,255,255,0.2)'
      : 'red';
  });
}

window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => (document.body.style.opacity = '1'), 100);
});


const style = document.createElement('style');
style.textContent = `
@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}`;
document.head.appendChild(style);
