function experiencia(anos) {
    if(anos < 0) {
        return 'Ano invalido';
    } else if(anos <= 1) {
        return 'Iniciante';
    } else if(anos <= 3) {
        return 'Intermediario';
    } else if(anos <= 6) {
        return 'Avançado';
    }
    return 'Jedi Master';
}

var anoEstudo = 7;
console.log(experiencia(anoEstudo));