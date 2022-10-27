for (i=0;i<256;i++) {
    var div=document.createElement('div');
    div.classList.add('griditems');
    div.innerText = "h";

    document.getElementById('container').appendChild(div);
}


const gridItems = document.querySelectorAll("div.griditems");
console.log(gridItems);

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseenter', () => {
        gridItems[i].classList.add('color');
    });
/*
    gridItems[i].addEventListener('mouseleave', () => {
        gridItems[i].classList.toggle('color');
    });
    */
}
 

