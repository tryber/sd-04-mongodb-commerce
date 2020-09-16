db.produtos.updateMany({ valoresNutricionais:
{$elemMatch: {$in: [{percentual: {$gte:20, $lte:40}, "tipo": "sódio" }]}}},
{$push: {tags: "contém sódio"}});

db.produtos.find({}, {nome:1, tags:1, _id:0}).pretty();
