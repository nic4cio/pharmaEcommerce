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


const cardData = [
    {title: "Medicamento1", icon: "bi-heart", price: "R$XX,XX"},
    {title: "Medicamento2", icon: "bi-heart", price: "R$XX,XX"},
    {title: "Medicamento3", icon: "bi-heart", price: "R$XX,XX"},
    {title: "Medicamento4", icon: "bi-heart", price: "R$XX,XX"},
    {title: "Medicamento5", icon: "bi-heart", price: "R$XX,XX"},
    {title: "Medicamento6", icon: "bi-heart", price: "R$XX,XX"},
]

const cardContainer = document.getElementById("card-container");

cardData.forEach(data => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    const card = document.createElement("article");
    card.className = "card mb-4 p-3";

    const img = document.createElement("img");
    img.src = "./images/vitamins.png";
    img.className = "card-img-top";
    img.alt = "Remédio";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h1");
    title.className = "card-title";
    title.textContent = data.title;

    const heartIcon = document.createElement("i");
    heartIcon.className = "bi bi-heart";

    const heartText = document.createElement("p");
    heartText.className = "card-text";
    heartText.appendChild(heartIcon);

    const priceText = document.createElement("p");
    priceText.className = "card-text";
    priceText.textContent = "Valor " + data.price;

    const addButton = document.createElement("button");
    addButton.className = "btn btn-primary";
    addButton.textContent = "Botão Adicionar";

    addButton.addEventListener("click", () => {
        console.log("Medicamento adicionado: ", data.title);
        alert(`O medicamento ${data.title} foi adicionado com sucesso ao carrinho.`)
    })

    const plusIcon = document.createElement("i");
    plusIcon.className = "bi bi-plus";
    addButton.appendChild(document.createTextNode(" "));
    addButton.appendChild(plusIcon);

    cardBody.appendChild(title);
    cardBody.appendChild(heartText);
    cardBody.appendChild(priceText);
    cardBody.appendChild(addButton);

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);
    cardContainer.appendChild(col);
});


