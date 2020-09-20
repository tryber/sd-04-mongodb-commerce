db.produtos.createIndex({ descricao: "text" });

db.produtos.find({ $text: { $search: "frango hamburger", $language: "pt" } });
