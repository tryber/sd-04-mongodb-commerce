db.produtos.updateMany({}, {
  $push: {
    vendasPorDia: {
      $each: [0, 0, 0, 0, 0, 0, 0]}}});
db.produtos.updateOne({nome: "Big Mac"}, {$inc: {"vendasPorDia.3":60}});
db.produtos.updateMany({$or: [{tags: "bovino"}, {tags: "pão"}]}, {$inc: {"vendasPorDia.7":120}});
db.produtos.find({}, {_id: 0, nome: 1, vendasPorDia: 1});
