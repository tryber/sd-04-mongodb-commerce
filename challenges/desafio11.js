db.produtos.updateMany(
  {},
  { $push: { $each: { tags: ["combo", "tasty"], $sort: 1 } } }
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
