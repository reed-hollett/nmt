const container = document.getElementById('container');

container.addEventListener('click', (event) => {
    if (event.target === container) {
        const newTortilla = document.createElement('div');
        newTortilla.classList.add('tortilla');
        newTortilla.style.left = `${Math.random() * 90 + 5}vw`;
        container.appendChild(newTortilla);

        setTimeout(() => {
            newTortilla.style.transform = 'translateY(100vh)';
            newTortilla.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            container.removeChild(newTortilla);
        }, 2100);
    }
});
