db.produtos.updateMany(
    {},
    {
        $push: {
            "tags": {
                $each: ["combo", "tasty"],
                $sort: 1 
            }
        },
    }
);

db.produtos.find({}, { _id: false, nome: 1, tags: true });
