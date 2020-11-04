function getData() {
    var input = document.querySelector('body div input');
    var div = document.querySelector('body div');
    var ul = document.querySelector('body div ul');
    var loading = document.createElement('li');
    loading.appendChild(document.createTextNode('Carregando...'));
    ul.appendChild(loading);
    var value = input.value;
    input.value = '';
    axios.get('https://api.github.com/users/' + value + '/repos')
    .then(function(response) {
        ul.innerHTML = '';
        for(const repo of response.data) {
            var li = document.createElement('li');
            var text = document.createTextNode(repo.full_name);
            li.appendChild(text);
            ul.appendChild(li);
        }
        div.appendChild(ul);
    })
    .catch(function(error){
        ul.innerHTML = '';
        if(error.response.status === 404) {
            console.log('USUÁRIO NÃO EXISTE!!!');
        }
        console.log(error);
    });
}
