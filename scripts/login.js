const form = document.getElementById("login-form")
form.addEventListener("submit", (event) => validarLogin(event))

function validarLogin(e) {
    e.preventDefault();
    const email = document.getElementById("email");
    const senha = document.getElementById("password");

    const usuarios = JSON.parse(dadosUsuario);
    
    const [usuarioEncontrado] = usuarios.filter(usuario => usuario.email === email.value)

    if(!usuarioEncontrado){
        alert("Email não cadastrado!")
        return 
    }

    if(usuarioEncontrado.senha != senha.value){
        alert("Senha inválida")
        return 
    } 

    localStorage.setItem("dados_usuario", JSON.stringify({nome: usuarioEncontrado.nome, email: usuarioEncontrado.email}))
    location.href = "index.html"
}