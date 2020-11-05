class usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        if(this.admin === true) return true;
        return false;
    }
};

class admin extends usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

let user = new usuario('pnc@cin.ufpe.br', 'Aí n');
let user2 = new admin('pnt@cin.ufpe.br', 'Aí no');

console.log(user.isAdmin());
console.log(user2.isAdmin());