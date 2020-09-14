db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });

db.produtos.count({ descricao: { $text: { $search: "frango hamburguer" } } });
