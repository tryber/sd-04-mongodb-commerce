db.produtos.updateMany({}, { avaliacao: NumberInt(1) });

db.produtos.updateMany({ tags: "bovino" }, { avaliacao: 5 });

db.produtos.updateMany({ tags: "ave" }, { avaliacao: 3 });

db.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });
