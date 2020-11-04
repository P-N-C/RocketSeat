function printDados(usuarios) {
    for(const user of usuarios) {
        var habilidades = user.habilidades.join(', ');
        console.log('O', user.nome, 'possui as habilidades:', habilidades);
    }
}

var usuarios = [
{
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}
];

printDados(usuarios);