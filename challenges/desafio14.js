db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $lt: 40, $gt: 20 } },
  {
    $push: {
      tags: "contém sódio",
    },
  }
);

// Crie uma query que retorne o nome e tags de todos os documentos.

db.produtos.find({}, { _id: false, nome: true, tags: true });
