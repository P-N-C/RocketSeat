const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const arr1 = usuarios.map(obj => obj.idade);
console.log(arr1);

const arr2 = usuarios.filter(obj => obj.idade > 18 && obj.empresa == 'Rocketseat');
console.log(arr2);

const arr3 = usuarios.find(obj => obj.empresa == 'Google');
console.log(arr3);

const arr4 = usuarios.map(obj => {
    obj.idade *= 2;
    return obj;
}).filter(obj => obj.idade <= 50);
console.log(arr4);