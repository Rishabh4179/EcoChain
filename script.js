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

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Animate metrics on scroll
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

// Observe all feature cards and solution cards
document.querySelectorAll('.feature-card, .solution-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Simulate real-time metric updates
const metrics = document.querySelectorAll('.metric-value');
setInterval(() => {
    metrics.forEach(metric => {
        if (metric.textContent.includes('%')) {
            let value = parseFloat(metric.textContent);
            let fluctuation = (Math.random() - 0.5) * 2;
            value = Math.max(0, Math.min(100, value + fluctuation));
            metric.textContent = value.toFixed(0) + '%';
        } else if (metric.textContent.includes('M')) {
            let value = parseFloat(metric.textContent.replace(/[^\d.]/g, ''));
            let fluctuation = (Math.random() - 0.5) * 0.1;
            value = Math.max(0, value + fluctuation);
            metric.textContent = '$' + value.toFixed(1) + 'M';
        } else if (metric.textContent.includes('lbs')) {
            let value = parseFloat(metric.textContent.replace(/[^\d.]/g, ''));
            let fluctuation = (Math.random() - 0.5) * 10000;
            value = Math.max(0, value + fluctuation);
            metric.textContent = value.toFixed(1) + 'M';
        } else if (!isNaN(parseFloat(metric.textContent))) {
            let value = parseFloat(metric.textContent);
            let fluctuation = (Math.random() - 0.5) * 2;
            value = Math.max(0, value + fluctuation);
            metric.textContent = value.toFixed(0);
        }
    });
}, 3000);