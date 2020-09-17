db.produtos.find(
  { $expr: { $eq: [{ $mod: ["$vendidos", 5] }, 0] } },
  { nome: 1, vendidos: 1, _id: 0 }
);
