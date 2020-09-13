// Crie uma query que atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
// Para a data corrente faça uso do tipo Date.

db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: { $type: "date" },
    },
  },
  false,
  true
);

// Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe

db.produtos
  .find(
    {
      ultimaModificacao: { $exists: true },
    },
    { _id: false, nome: true }
  )
  .pretty();
