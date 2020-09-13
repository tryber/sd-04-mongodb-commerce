db.produtos.update({}, { $set: { avaliacao: NumberInt(0) } }, false, true);

db.produtos.update(
  { tags: { $in: ["bovino"] } },
  { $inc: { avaliacao: 5 } },
  false,
  true
);

db.produtos.update(
  { tags: { $in: ["ave"] } },
  { $inc: { avaliacao: 3 } },
  false,
  true
);

db.produtos.find({}, { _id: false, nome: true, avaliacao: true });
