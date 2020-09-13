// Crie uma query que faça a adição do elemento muito sódio ao final
// do array tags nos produtos em que o percentual de sódio seja maior
// ou igual a 40.

db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $gt: 40 } },
  {
    $push: {
      tags: "muito sódio",
    },
  }
);

// Crie uma query que retorne o nome e tags de todos os documentos.

db.produtos.find({}, { _id: false, nome: true, tags: true }).pretty();
