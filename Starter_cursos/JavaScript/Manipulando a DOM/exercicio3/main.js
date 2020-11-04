var div = document.createElement('div');
div.setAttribute('id', 'app')
var nlist = document.createElement('ul');
nlist.setAttribute('id', 'listinha')
div.appendChild(nlist);
document.querySelector('body').appendChild(div);

function addOnList(nome) {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(nome));
    var lista = document.getElementById('listinha');
    lista.appendChild(node);
}

var nomes = ["Diego", "Gabriel", "Lucas"];
for(const nome of nomes) {
    addOnList(nome);
}