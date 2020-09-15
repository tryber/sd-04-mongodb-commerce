db.produtos.createIndex({ descricao: "text" });

db.produtos
  .find({ $text: { $search: "\"feito com\"", $caseSensitive: false } })
  .count();
