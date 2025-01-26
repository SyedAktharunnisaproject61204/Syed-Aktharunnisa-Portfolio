// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add hover effect for project cards
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });
});

