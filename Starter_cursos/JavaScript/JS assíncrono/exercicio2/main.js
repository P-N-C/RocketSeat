function getData() {
    
    var input = document.querySelector('body div input');
    var value = input.value;
    input.value = '';
    axios.get('https://api.github.com/users/' + value + '/repos')
    .then(function(response) {
        var div = document.querySelector('body div');
        var ul = document.querySelector('body div ul');
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
        console.log(error);
    });

}
