db.produtos.update({ nome: "Big Mac" }, { $unset: {curtidas: true} });

db.produtos.find({}, { _id: 0, nome: 1, deescricao: 1, curtidas: 1 });
