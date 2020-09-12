// adicionando campo e valor
db.produtos.updateMany({}, {$set: {"criadoPor": "Ronald McDonald"}});
// Retorna nome e criado por de todos os produtos
db.produtos.find({}, {_id: 0, nome: 1, criadoPor: 1});
