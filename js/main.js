// ========================================
// TYPEWRITER EFFECT
// ========================================

const typewriterElement = document.getElementById('typewriter');

// Professional phrases
const professionalPhrases = [
    "I build secure systems.",
    "I hunt for threats.",
    "I automate everything.",
    "I speak at conferences.",
    "I model threats for fun.",
    "I'm based in Kraków.",
    "I'm always learning.",
];

// Personal phrases - things I love!
const personalPhrases = [
    "I'm into ceramics.",
    "Garlic makes everything better.",
    "IKEA is my happy place.",
    "I drink too much coffee.",
    "Obsessed with green. 💚",
    "Hand cream enthusiast.",
    "I love lying on grass.",
    "Lemon ice cream >>>>>>>",
    "Marvel fan.",
    "Butter makes it better.",
    "Matcha addict.",
    "Modern Family enjoyer.",
    "Placki ziemniaczane",
    "Fluffy slippers person.",
    "I collect pins.",
    "Ramen obsessed.",
    "Ranczo fan.",
    "Yes, cheese.",
    "Hoodie & shorts weather.",
    "The Office quoter."
];

// Combine all phrases
const phrases = [...professionalPhrases, ...personalPhrases];

// Shuffle function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Create shuffled queue and track position
let shuffledPhrases = shuffleArray(phrases);
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function getNextPhrase() {
    // If we've shown all phrases, reshuffle
    if (phraseIndex >= shuffledPhrases.length) {
        shuffledPhrases = shuffleArray(phrases);
        phraseIndex = 0;
    }
    return shuffledPhrases[phraseIndex++];
}

let currentPhrase = '';

function typeWriter() {
    // Get new phrase if starting fresh
    if (charIndex === 0 && !isDeleting) {
        currentPhrase = getNextPhrase();
    }
    
    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 30;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 70;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingSpeed = 400;
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect
if (typewriterElement) {
    setTimeout(typeWriter, 1000);
}

// ========================================
// THEME TOGGLE
// ========================================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark
function getThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

// Apply theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialize theme
setTheme(getThemePreference());

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'light' : 'dark');
    }
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.getElementById('navbar');

function handleNavScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavScroll);
handleNavScroll();

// ========================================
// REVEAL ON SCROLL
// ========================================

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// ACTIVE NAV LINK
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink();
