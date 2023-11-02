from flask import Flask,request,jsonify
from pymongo import MongoClient
from mongopass import mongopass

app = Flask(__name__)
app.config["DEBUG"] = True

client = MongoClient(mongopass)
db = client.gerenciador
tarefas = db.tarefas

@app.route('/tarefas',methods=['POST'])
def create_tarefas():
    tarefas = request.get_json()
    db.tarefas.insert_one(tarefas)

    return jsonify(message="adicionado com sucesso")

@app.route('/tarefas',methods=['GET'])
def read_tarefas():
    tarefas = db.tarefas.find()

    return jsonify([tarefa for tarefa in tarefas])

    
if __name__ == '__main__':
    app.run()
