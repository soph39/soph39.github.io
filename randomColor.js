document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelectorAll('.button2');
    element.forEach((element) => {
        function getRandomColor(){
            const randomColor = Math.floor(Math.random() * 361);
            element.style.setProperty('--randomColor', randomColor);
        }

        element.addEventListener('mouseenter', () => {
            getRandomColor();
        });
    });
});