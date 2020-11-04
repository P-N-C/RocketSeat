
function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        
        if(idade > 18) {
            resolve();
        } else {
            reject();
        }
    });
}

setTimeout(function() {
    checaIdade(18)
        .then(function() {
            console.log("Maior que 18");
        })
        .catch(function() {
            console.log("Menor ou igual a 18");
    });    
}, 2000); 


