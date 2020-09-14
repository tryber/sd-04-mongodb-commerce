db.produtos.updateMany(
  {},
  {
    $push: { criadoPor: "Ronald McDonald" },
  }
);

db.produtos.find({}, { nome: 1, criadoPor: 1 });
