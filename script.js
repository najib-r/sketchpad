const container = document.getElementById('container');


let cols = 16;
generateGrid (cols);
container.style.setProperty('--grid-cols', cols);
container.style.setProperty('--grid-rows', cols);


const reset = document.getElementById('reset');
reset.addEventListener('click', reloadGrid); 

const gridsize = document.getElementById('gridsize');
gridsize.addEventListener('click', changeGrid);

const toggle = document.getElementById('toggle');
toggle.addEventListener('click', toggleGrid);


let mouseDown = false
container.addEventListener('mousedown', () => (mouseDown = true));
container.addEventListener('mouseup', () => (mouseDown = false));

function generateGrid (number) {
    for (i=0;i<(number*number);i++) {
        var div=document.createElement('div');
        div.classList.add('griditems');
        container.appendChild(div);
    }
    const gridItems = document.querySelectorAll("div.griditems");
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', () => {
            if (mouseDown === true) {
                gridItems[i].classList.add('color');
            }
        });
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
}

function toggleGrid() {
    const gridItems = document.querySelectorAll("div.griditems");
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.toggle('showgrid');
    }
}

