export let carrinhoarray = [];
const express = require('express');
const app = express();
const port = 3000;

// Configuração para servir arquivos estáticos a partir do diretório 'public'
app.use(express.static('public'));
app.use(express.json());
app.use('/', express.static(__dirname + '/view'));

// Array para armazenar os itens do carrinho



app.get("/", function (req, res) {
  res.sendFile(__dirname + '/view/HTML/index.html');
});

app.get("/carrinho", function (req, res) {
  res.sendFile(__dirname + '/view/HTML/carrinho.html');
});


app.listen(port, function () {
  console.log('Servidor Ativo na porta: ' + port + '!');
});


module.exports = app,{carrinhoarray};
