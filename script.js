let n = 8;
let w = (500 - 2*n) / n / 2;

const button = document.querySelector("button");
const grid = document.querySelector(".grid");

function drawGrid(n) {

    const grids = document.querySelectorAll('.grid-element');
    grids.forEach((grid_element) => {
        grid.removeChild(grid_element);
    })

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const element = document.createElement('div');
            element.classList.add('grid-element')
            element.textContent = '';
            element.style.padding = `${w}px`;

            element.addEventListener('mouseenter', () => {
                element.style.backgroundColor = 'red';
            })

            grid.appendChild(element);
        }
    }
}
button.addEventListener('click', () => {
    n = Number(prompt("Please enter a number:"));
    if (n > 100) {
        n = 100;
    }
    w = (500 - 2*n) / n / 2;
    drawGrid(n);
})

drawGrid(n)