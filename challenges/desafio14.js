db.produtos.updateMany(
    {
        "valoresNutricionais": {$elemMatch: { tipo: "sódio", percentual: { $lte: 40, $gte: 20 }}}
    },
    {
        $push: {"tags": "contém sódio"},
    }
);

db.produtos.find({}, { _id: false, nome: true, tags: true });
