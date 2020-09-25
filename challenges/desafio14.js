db.produtos.updateMany(
  {"valoresNutricionais": 
    { $elemMatch: { "tipo": "sódio", "percentual": { $gte: 20, $lt: 40 } } } 
  }, 
  { $addToSet: { "tags": "contém sódio" } }
);

db.produtos.find({}, { "_id": false, "nome": true, "tags": true });
