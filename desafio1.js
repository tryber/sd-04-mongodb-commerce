db.produtos.update({}, { $set: { criadoPor: "Ronald McDonald" } }, false, true);

db.produtos.find({}, { _id: false, nome: true, criadoPor: true }).pretty();
