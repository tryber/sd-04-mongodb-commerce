db.produtos.updateMany({ nome: "Big Mac" }, { $set: { ultimaModificacao: Date() } });
db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { _id: false, nome: 1 });
