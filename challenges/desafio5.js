db.produtos.updateMany(
  {"nome": {$nin: ["McChicken"]}},
  {$addToSet: {ingredienes: "ketchup"}}
);

db.produtos.find(
  {},
  { "nome": true, "ingredientes": true, "_id": false }
);
