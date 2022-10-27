const container = document.getElementById('container');

function generateGrid (number) {
    for (i=0;i<(number*number);i++) {
        var div=document.createElement('div');
        div.classList.add('griditems');
        container.appendChild(div);
    }
}

function resetGrid() {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.remove('color');
    }
}


let cols = 16;
generateGrid (cols);
container.style.setProperty('--grid-cols', cols);

const gridItems = document.querySelectorAll("div.griditems");
for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseenter', () => {
        gridItems[i].classList.add('color');
    });
}

const reset = document.getElementById('reset');
reset.addEventListener('click', resetGrid); 

const gridsize = document.getElementById('gridsize');
gridsize.addEventListener('click', changeSize);




function changeSize () {
    do {
        let cols = prompt("Please enter a grid size of not more than 100.")
    } while (cols > 100);
    container.replaceChildren();
    generateGrid(cols);
    container.style.setProperty('--grid-cols', cols);
}

