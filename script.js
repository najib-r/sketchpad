const container = document.getElementById('container');

//Default - 16x16 grid
let cols = 16;
let cursor='black';

generateGrid (cols);
changeColor();

const reset = document.getElementById('reset');
reset.addEventListener('click', reloadGrid); 

const gridsize = document.getElementById('gridsize');
gridsize.addEventListener('click', changeGrid);

const toggle = document.getElementById('toggle');
toggle.addEventListener('click', toggleGrid);

const black = document.getElementById('black');
black.addEventListener('click', () => (cursor='black'));

const random = document.getElementById('random');
random.addEventListener('click', () => (cursor = 'random'));




let mouseDown = false
container.addEventListener('mousedown', () => (mouseDown = true));
container.addEventListener('mouseup', () => (mouseDown = false));
container.addEventListener('mouseleave', () => (mouseDown = false));

function generateGrid (number) {
    for (i=0;i<(number*number);i++) {
        var div=document.createElement('div');
        div.classList.add('griditems');
        container.appendChild(div);
    }

    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty('--grid-rows', cols);
}


function changeGrid () {
    changeSize();
    reloadGrid();
}

function changeSize () {
    do {
        cols = prompt("Please enter a grid size of not more than 100.");
    } while (cols > 100 || cols === "");
}

function reloadGrid() {
    container.innerHTML='';
    generateGrid(cols);
    changeColor();
}

function toggleGrid() {
    const gridItems = document.querySelectorAll("div.griditems");
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.toggle('showgrid');
    }
}


function changeColor () {
    const gridItems = document.querySelectorAll("div.griditems");
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', () => {
            if (mouseDown === true) {
                if (cursor === 'black') {
                    gridItems[i].classList.add('black');
                }
                else { 
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    gridItems[i].style.backgroundColor = "#" + randomColor;
                }
            }
        });
    }
}

