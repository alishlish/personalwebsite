
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 1.3) {
            section.style.opacity = '1';
        }
    });
});

window.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.skill-level');

    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 1.3 && skill.style.width === '0px') {
            skill.style.width = skill.getAttribute('style').split(":")[1].trim();
        }
    });
});
