db.produtos.updateMany({}, {$push: {"valoresNutricionais": {$each: [], $sort: {"valoresNutricionais.percentual": -1}}}});
db.produtos.find({}, {"nome": 1, "valoresNutricionais.percentual": 1, "_id": 0});
