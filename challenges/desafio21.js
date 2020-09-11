db.produtos.find(
  { $expr: { $gt: [ "$vendidos", "$curtidas" ] } },
  { _id:0, nome: 1 }
);
