const logoElement = document.querySelector("#logo");
logoElement.src = "./images/pharmaLogo.svg";

const menuItems = [
    { text: "Todos os remédios", link: "./index.html"},
    { text: "Sobre nós", link: "#"},
    { text: "Fale conosco", link: "./contato.html"}
]

const menuNavContainer = document.querySelector(".navbar-nav");
menuItems.forEach(item => {
    const li = document.createElement("li");
    li.className = "nav-item";

    const a = document.createElement("a");
    a.className = "nav-link";
    a.href = item.link;
    a.textContent = item.text;

    li.appendChild(a);
    menuNavContainer.appendChild(li);
});




