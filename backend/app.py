from flask import Flask,request,jsonify
from flask_cors import CORS
from pymongo import MongoClient
from mongopass import mongopass

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

client = MongoClient(mongopass)
db = client.ecomerce
produtos = db.produtos
cart = db.cart
usuario = db.usuario

@app.route('/produtos',methods=['POST'])
def create_produtos():
    produtos = request.get_json()
    db.produtos.insert_one(produtos)

    return jsonify(message="adicionado com sucesso")

@app.route('/produtos',methods=['GET'])
def read_produtos():
    produtos = db.produtos.find()

    return jsonify([produto for produto in produtos])

@app.route('/produtos/<int:id>',methods=['GET'])
def read_tarefa(id = 0):
    produtos = db.produtos.find_one({"_id":id})

    return jsonify(produtos)

@app.route('/produtos/<int:id>',methods=['DELETE'])
def deletado_produtos(id=0):
    db.produtos.delete_one({"_id":id})
    
    return jsonify(message="deletado com sucesso")

@app.route('/cart',methods=['POST'])
def create_cart():
    cart = request.get_json()
    db.carrinho.insert_one(cart)

    return jsonify(message="adicionado com sucesso")
@app.route('/cart',methods=['GET'])
def read_cart():
    cart = db.cart.find()

    return jsonify([Cart for Cart in cart])


if __name__ == '__main__':
    app.run()