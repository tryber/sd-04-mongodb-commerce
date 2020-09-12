// Inserindo valorUnitario nos produtos
db.produtos.updateMany({valorUnitario: {$exists: false}}, {$set: {valorUnitario: NumberDecimal("0.00")}});
// consultando os produtos
db.produtos.find({}, {_id: 0, nome: 1, valorUnitario: 1});
