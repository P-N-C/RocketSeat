function newBox() {
    var box = document.createElement('div');
    var place = document.querySelector('#app');
    box.style.height = 100;
    box.style.width = 100;
    box.style.background = '#f00';
    place.appendChild(box);
}

var div = document.querySelector('#app');
var btn = document.createElement('button');
btn.appendChild(document.createTextNode('Botão'));
btn.onclick = newBox;
div.appendChild(btn);