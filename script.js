document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const totalSquares = 800;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
            setTimeout(() => {
                square.style.backgroundColor = 'rgb(29, 29, 29)'; // Change back to dark gray after 1 second
            }, 1000);
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
