// Remova o item cebola de todos os sanduíches.
db.produtos.updateMany({}, {$pull: {ingredientes: "cebola"}});
// $pull -> remove elementos de um array, $unset remove CAMPOS de um doc
db.produtos.find({}, {nome: 1, ingredientes: 1, _id: 0});
