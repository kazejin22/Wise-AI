// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
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

// Observe elements for animation (extended to home sections)
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.feature-card, .testimonial-card, .stat-item, .latest-video .featured-card, .quotes-section .quotes-slider'
    );
    animateElements.forEach((el, idx) => {
        el.style.opacity = '0';
        // Slight horizontal offset for variety
        const horizontalOffset = idx % 2 === 0 ? '12px' : '-12px';
        el.style.transform = `translateY(30px) translateX(${horizontalOffset})`;
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email) {
            // Show success message
            const button = newsletterForm.querySelector('button');
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            button.style.background = '#10B981';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '#4F46E5';
                newsletterForm.reset();
            }, 2000);
        }
    });
}

// Video play button functionality
const playButtons = document.querySelectorAll('.play-button');
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        // This would typically open a video modal or redirect to YouTube
        alert('Video player would open here!');
    });
});

// Counter animation for stats (supports decimals and '+' suffix span)
function animateCounter(element, target, duration = 1200, options = {}) {
    const { decimals = 0, suffixHTML = '', isPercent = false } = options;
    let start = 0;
    const frames = Math.max(1, Math.round(duration / 16));
    const increment = (target - start) / frames;
    let frame = 0;

    const rafStep = () => {
        frame++;
        start += increment;
        const done = frame >= frames;
        const value = done ? target : start;
        const formatted = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();
        if (isPercent) {
            element.textContent = formatted + '%';
        } else {
            element.innerHTML = formatted + suffixHTML;
        }
        if (!done) {
            requestAnimationFrame(rafStep);
        }
    };
    requestAnimationFrame(rafStep);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const original = stat.innerHTML.trim();
                // Skip 24/7 style values
                if (original.includes('24/7')) return;

                const hasPlusSpan = stat.querySelector('.stat-suffix');
                const hasPercent = original.includes('%');
                // Capture decimals for percent values
                let decimals = 0;
                let numericTarget = 0;
                if (hasPercent) {
                    const match = original.match(/([0-9]+(?:\.[0-9]+)?)/);
                    if (match) {
                        const numStr = match[1];
                        numericTarget = parseFloat(numStr);
                        decimals = (numStr.split('.')[1] || '').length;
                    }
                } else {
                    const match = original.match(/([0-9]+)/);
                    if (match) numericTarget = parseInt(match[1], 10);
                }

                const suffixHTML = hasPlusSpan ? '<span class="stat-suffix">+</span>' : '';
                if (hasPercent) {
                    animateCounter(stat, numericTarget, 1200, { decimals, isPercent: true });
                } else {
                    animateCounter(stat, numericTarget, 1200, { decimals: 0, suffixHTML });
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add loading animation for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('btn-primary') || this.classList.contains('btn-secondary')) {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.pointerEvents = 'auto';
            }, 1000);
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize tooltips for social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const platform = this.querySelector('i').className.includes('twitter') ? 'Twitter' :
                        this.querySelector('i').className.includes('linkedin') ? 'LinkedIn' :
                        this.querySelector('i').className.includes('github') ? 'GitHub' : 'YouTube';
        
        this.setAttribute('title', `Follow us on ${platform}`);
    });
});

console.log('WISE AI - JavaScript loaded successfully!');