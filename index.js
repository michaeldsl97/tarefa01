// Informações de CADASTRO
class usuarioCadastrado{
    constructor (nome, sobrenome, dataNascimento, genero, email, senha){
        this.nome = nome, 
        this.sobrenome = sobrenome, 
        this.dataNascimento = dataNascimento,
        this.genero = genero,
        this.email = email,
        this.senha = senha
    }

    infos = function(){
        return this.nome + " " + this.sobrenome + " " + this.dataNascimento; 
    }
}

// Informações de LOGIN
class usuarioLogin extends usuarioCadastrado{
    constructor(nome, sobrenome, dataNascimento, genero, email, senha, loc){
        super(
            nome,
            sobrenome,
            dataNascimento,
            genero,
            email,
            senha
        );
        this.loc = loc
    }

    infos = function(){
        return this.email + " " + this.senha; 
    }
}

const cadastro = new usuarioCadastrado("Marta","Vieira","19/02/1986","Mulher","marta@gmail.com",452435);

const login = new usuarioLogin("Marta","Vieira","19/02/1986","Mulher","marta@gmail.com",452435, "Dois Riachos");

console.log(cadastro);
console.log(cadastro.infos());

console.log(login);
console.log(login.infos());


// JSON
const jsonCadastro = JSON.stringify(cadastro);
const jsonLogin = JSON.stringify(login);

console.log(jsonCadastro);
console.log(jsonLogin);