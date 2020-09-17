db.produtos.updateMany(
    {
        "valoresNutricionais.tipo": "sódio",
        "valoresNutricionais.percentual": { $gte: 40 }
    },
    {
        $push: {
            "tags": {
                $each: ["muito sódio"],
            }
        },
    }
);

db.produtos.find({}, { _id: false, nome: true, tags: true });
