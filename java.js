// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== FALLING LEAVES ANIMATION =====
const leavesContainer = document.getElementById('leaves');
const leafCount = 15;

for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.animationDuration = (Math.random() * 10 + 10) + 's';
    leaf.style.animationDelay = Math.random() * 5 + 's';
    leavesContainer.appendChild(leaf);
}

// ===== PARALLAX SCROLLING EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax backgrounds
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    parallaxBgs.forEach(bg => {
        const speed = 0.5;
        bg.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Parallax layers in About section
    const layer1 = document.querySelector('.layer-1');
    const layer2 = document.querySelector('.layer-2');
    const layer3 = document.querySelector('.layer-3');
    
    if (layer1 && layer2 && layer3) {
        const aboutSection = document.querySelector('.about-section');
        const rect = aboutSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (window.innerHeight - rect.top) * 0.1;
            layer1.style.transform = `translateY(${offset * 0.5}px)`;
            layer2.style.transform = `translateY(${offset * 1}px)`;
            layer3.style.transform = `translateY(${offset * 1.5}px)`;
        }
    }
    
    // Service cards micro-parallax
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const parallaxSpeed = parseFloat(card.dataset.parallax) || 0.05;
            const offset = (window.innerHeight - rect.top) * parallaxSpeed;
            card.style.transform = `translateY(${-offset}px)`;
        }
    });
    
    // Gallery items parallax
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const parallaxSpeed = parseFloat(item.dataset.parallax) || 0.03;
            const offset = (window.innerHeight - rect.top) * parallaxSpeed;
            item.style.transform = `translateY(${-offset}px)`;
        }
    });
});

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'all 0.8s ease-out';
    observer.observe(card);
});

// Observe sustainability cards
document.querySelectorAll('.sustainability-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'all 0.8s ease-out';
    observer.observe(card);
});

// ===== METRICS COUNTER ANIMATION =====
const metricCards = document.querySelectorAll('.metric-card');
let hasAnimated = false;

const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            metricCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200);
            });
        }
    });
}, { threshold: 0.5 });

if (metricCards.length > 0) {
    metricsObserver.observe(document.querySelector('.metrics-section'));
}

// ===== FORM SUBMISSION =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// ===== PARALLAX ON PARTNERS BACKGROUND =====
const partnersSection = document.querySelector('.partners-section');
if (partnersSection) {
    window.addEventListener('scroll', () => {
        const rect = partnersSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const partnersBg = partnersSection.querySelector('.partners-bg');
            if (partnersBg) {
                const offset = (window.innerHeight - rect.top) * 0.2;
                partnersBg.style.transform = `translateY(${offset}px)`;
            }
        }
    });
}

// ===== GALLERY ITEM HOVER EFFECT =====
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.3s ease';
    });
});

// ===== PROCESS FLOW ANIMATION =====
const processSteps = document.querySelectorAll('.process-step');
const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, index * 200);
        }
    });
}, { threshold: 0.5 });

processSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'scale(0.8)';
    step.style.transition = 'all 0.5s ease-out';
    processObserver.observe(step);
});

// ===== FOOTER TREELINE PARALLAX =====
const footerTreeline = document.querySelector('.footer-treeline');
if (footerTreeline) {
    footerTreeline.addEventListener('mousemove', (e) => {
        const rect = footerTreeline.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const moveX = (x / rect.width - 0.5) * 20;
        footerTreeline.style.transform = `translateX(${moveX}px)`;
    });
    
    footerTreeline.addEventListener('mouseleave', () => {
        footerTreeline.style.transform = 'translateX(0)';
    });
}