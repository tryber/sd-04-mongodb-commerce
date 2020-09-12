// incluir campo avaliacao em todos os sanduiches com o tipo NumberInt
db.produtos.updateMany({}, {$set: {avaliacao: NumberInt(0)}});
//incrementar 5 na avaliacao dos sanduiches bovinos
db.produtos.updateMany({tags: "bovino"}, {$inc: {avaliacao: 5}});
//incrementar 3 na avaliacao dos sanduiches ave
db.produtos.updateMany({tags: "ave"}, {$inc: {avaliacao: 3}});
//retornar nome e avaliacao de todos produtos
db.produtos.find({}, {_id: 0, nome: 1, avaliacao: 1});
