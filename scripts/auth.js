const currentPage = window.location.pathname;
const dadosLocalStorage = JSON.parse(localStorage.getItem("dados_usuario"))

if(!dadosLocalStorage && currentPage !== "/login.html"){
   window.location.href = "./login.html";
} 