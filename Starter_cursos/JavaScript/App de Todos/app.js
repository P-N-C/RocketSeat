var div = document.querySelector('body div#divLista');
var lista = document.querySelector('body div#divLista ul');
var todos = JSON.parse(localStorage.getItem('lista')) || [];

function addTodo() {
    todos.push(input.value);
    input.value = '';
    render();
}

function remove(pos) {
    todos.splice(pos, 1);
    render();
}

function saveTodos() {
    var jtodos = JSON.stringify(todos);
    localStorage.setItem('lista', jtodos);
}

function render() {
    lista.innerHTML = '';
    for(var i = 0; i < todos.length; i++) {
        var link = document.createElement('a');
        link.href = '#';
        link.appendChild(document.createTextNode('EXCLUIR'));
        link.setAttribute('onclick', 'remove(' + i + ')');
        var text = document.createTextNode(todos[i]);
        var item = document.createElement('li');
        item.appendChild(text);
        item.appendChild(link);
        lista.appendChild(item);
    }
    saveTodos();
}
render();

var input = document.createElement('input');
var button = document.createElement('button');
button.appendChild(document.createTextNode('Adicionar Todo'));
button.onclick = addTodo;


div.appendChild(input);
div.appendChild(button);