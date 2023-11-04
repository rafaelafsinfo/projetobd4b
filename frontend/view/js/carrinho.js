import { arraycarrinho } from "../../app.js";
document.addEventListener("DOMContentLoaded", () => {
    const produto = document.getElementById("product-container");
    console.log("array carrinho ->"+arraycarrinho.toString())
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
    
    /*arraycarrinho.forEach((_id) => {
        let uri = "http://127.0.0.1:5000/produtos/1";
        
    });*/
    fetch("http://127.0.0.1:5000/produtos/1")
    .then(response => response.json())
    .then(data =>{
            if (data.count > 0) {
                createProductCard(data[0]); // Assuming you only expect one product per request
            } else {
                console.error("Produto não encontrado");
            }
            
    })
    .catch(error => {
        console.error("Erro ao buscar os dados da API:", error);
    });
});
