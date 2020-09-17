db.produtos.updateMany(
    {
        "valoresNutricionais.tipo": "sódio",
        "valoresNutricionais.percentual": { $gte: 40 }
    },
    {
        $addToSet: {"tags": {"muito sódio"}},
    }
);

db.produtos.find({}, { _id: false, nome: true, tags: true });
