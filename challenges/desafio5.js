db.produtos.updateMany({
    "nome": { $not: "McChicken" }
},
    { $addToSet: { "ingredientes": "ketchup" } }
);

db.produtos.find({}, { _id: 0, nome: true, ingredientes: 1 });