db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" }
);

db.produtos.countDocuments({ $text: { $search: "frango hamburguer" } });
gh pr create