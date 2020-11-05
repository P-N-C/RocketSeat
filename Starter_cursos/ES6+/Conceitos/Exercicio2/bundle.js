"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var arr1 = usuarios.map(function (obj) {
  return obj.idade;
});
console.log(arr1);
var arr2 = usuarios.filter(function (obj) {
  return obj.idade > 18 && obj.empresa == 'Rocketseat';
});
console.log(arr2);
var arr3 = usuarios.find(function (obj) {
  return obj.empresa == 'Google';
});
console.log(arr3);
var arr4 = usuarios.map(function (obj) {
  obj.idade *= 2;
  return obj;
}).filter(function (obj) {
  return obj.idade <= 50;
});
console.log(arr4);
