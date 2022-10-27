
function generateGrid (number) {
    for (i=0;i<(number*number);i++) {
        var div=document.createElement('div');
        div.classList.add('griditems');
        document.getElementById('container').appendChild(div);
    }
}

let cols = 16;
generateGrid (cols);

const container = document.getElementById('container');
container.style.setProperty('--grid-cols', cols);




const gridItems = document.querySelectorAll("div.griditems");

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseenter', () => {
        gridItems[i].classList.add('color');
    });
}

const reset = document.getElementById('reset');
reset.addEventListener('click', resetGrid);

function resetGrid() {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].classList.remove('color');
    }
}


