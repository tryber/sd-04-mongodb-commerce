// Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
// Para isso, escreva duas queries, nesta ordem:
// 1. Crie uma query que atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.
// Para a data corrente faça uso do tipo Date.
// 2. Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.
db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: new Date() } }
);
db.produtos.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });
