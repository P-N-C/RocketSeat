function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function newBox() {
    var box = document.createElement('div');
    var place = document.querySelector('#app');
    box.style.height = 100;
    box.style.width = 100;
    box.style.background = '#f00';
    box.onmouseenter = function() {
        box.style.background = getRandomColor();
    }
    place.appendChild(box);
    
}

var div = document.querySelector('#app');
var btn = document.createElement('button');
btn.appendChild(document.createTextNode('Botão'));
btn.onclick = newBox;
div.appendChild(btn);