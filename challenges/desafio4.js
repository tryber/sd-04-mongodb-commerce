db.produtos.updateOne({ "nome": "Big Mac" }, { $currentDate: { "ultimaModificacao": true } });

db.produtos.find({ "ultimaModificacao": { $exists: false } }, { "_id": 0, "nome": 1 });
