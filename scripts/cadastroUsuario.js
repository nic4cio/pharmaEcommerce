const form = document.getElementById("register-form");
form.addEventListener("submit", (event) => {
    cadastroUsuario(event)
})

function cadastroUsuario (event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("password");

    const usuarios = JSON.parse(dadosUsuario);

    const usuarioEncontrado = usuarios.filter(usuario => {
        return usuario.email == email.value;
    })

    if(!!usuarioEncontrado && usuarioEncontrado.length > 0) {
        alert("Email já cadastrado!")
        return;
    }

    usuarios.push({
        nome: nome.value,
        email: email.value,
        senha: senha.value
    })

    dadosUsuario = JSON.stringify(usuarios);
    console.log(dadosUsuario);
}
