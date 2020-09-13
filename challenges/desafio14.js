db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { 
    $and: 
    { $gt: 20 },
    { $lt: 40 } 
    },
  },
  {
    $push: {
      tags: "contém sódio",
    },
  }
);

// Crie uma query que retorne o nome e tags de todos os documentos.

db.produtos.find({}, { _id: false, nome: true, tags: true });
