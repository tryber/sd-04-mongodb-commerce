db.produtos.update({}, { $set: { criadoPor: "Ronald McDonald" } });

db.produtos.find({}, { _id: false, nome: true, criadoPor: true });
