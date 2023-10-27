const container = document.getElementById('container');

container.addEventListener('click', (event) => {
    if (event.target === container) {
        const newTortilla = document.createElement('div');
        newTortilla.classList.add('tortilla');
        newTortilla.style.left = `${Math.random() * 90 + 5}vw`;

        // Randomly rotate the tortilla
        newTortilla.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(newTortilla);

        setTimeout(() => {
            newTortilla.style.transform = `translateY(100vh) rotate(${Math.random() * 360}deg)`;
            newTortilla.style.opacity = '0';
        }, 100);

        setTimeout(() => {
            container.removeChild(newTortilla);
        }, 2100);
    }
});
