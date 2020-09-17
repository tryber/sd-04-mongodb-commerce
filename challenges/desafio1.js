db.produtos.updateMany(
  {},
  { $set: { criadoPor: "Ronald Macdonald" } }
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, criadoPor: 1 }
).pretty();
