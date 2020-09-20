db.produtos.updateMany(
    {},
    {
        $push: {
            valoresNutricionais: {
                $each: [],
                sort: {percetual: -1}
            }
        }
    }
);

db.produtos.find({}, {_id: 0, nome: 1, valoresNutricionais: 1}).pretty();
