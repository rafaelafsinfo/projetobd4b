import { carrinhoarray } from "./app.js";
document.addEventListener("DOMContentLoaded", () => {
    const produto = document.getElementById("product-container");

    function createProductCard(data) {
        const cardcarrinho = document.createElement("div");
        cardcarrinho.classList.add("card");
        
        const image = document.createElement("img");
        image.src = data.img;
        
        const title = document.createElement("h2");
        title.textContent = data.nome;
        
        const description = document.createElement("p");
        description.textContent = "Descrição: " + data.descricao;
        
        const preco = document.createElement("p");
        preco.textContent = "Preço: " + data.preco;
        
        cardcarrinho.appendChild(title);
        cardcarrinho.appendChild(image);
        cardcarrinho.appendChild(description);
        cardcarrinho.appendChild(preco);
        
        produto.appendChild(cardcarrinho);
    }
    const meuCarrinho = new Carrinho()
    const carrinhoarray = meuCarrinho.getCarrinho();
    carrinhoarray.forEach((produtoId) => {
        let uri = "http://127.0.0.1:5000/produtos/" + produtoId;
        
        fetch(uri, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': ''
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                createProductCard(data[0]); // Assuming you only expect one product per request
            } else {
                console.error("Produto não encontrado");
            }
        })
        .catch(error => {
            console.error("Erro ao buscar os dados da API:", error);
        });
    });
});
