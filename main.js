// Function to handle the scroll animation
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= windowHeight &&
            rect.bottom >= 0
        );
    };

    const animateSection = () => {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateSection);
    animateSection(); // Initial check in case sections are already in view
};

// Run the animation function
animateOnScroll();
