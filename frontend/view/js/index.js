import { arraycarrinho } from "../../app";
document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container");


    function createCard(data) {
        const card = document.createElement("div");
        card.classList.add("card");
    
        const image = document.createElement("img");
        image.src = data.img;

        const title = document.createElement("h2");
        title.textContent = data.nome;

        const id = data._id;

        const description = document.createElement("p");
        description.textContent = "descrição: " +data.descricao;

        const preco = document.createElement("p");
        preco.textContent = "valor R$: " + data.preco;

        const button = document.createElement("button");
        button.textContent = "Adicionar";
        button.addEventListener("click", () => {
            arraycarrinho.push(id); 
            console.log("produto adicionado: "+arraycarrinho.toString());
            
        });

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(preco);
        card.appendChild(description);
        card.appendChild(button);
        

        cardsContainer.appendChild(card);
    }

    // Fazer uma solicitação GET para a rota da API
    fetch("http://127.0.0.1:5000/produtos")
        .then(response => response.json())
        .then(data => {
            // Loop através dos dados do JSON e cria os cards
            data.forEach(item => {
                createCard(item);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar os dados da API:", error);
        });
})
    
