// Crie uma query que faça a remoção do campo curtidas do item Big Mac.

// Crie uma query que retorne o nome e curtidas de todos os documentos.

db.produtos.updateMany({ nome: "Big Mac" }, { $unset: { curtidas: "" } });

db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });
