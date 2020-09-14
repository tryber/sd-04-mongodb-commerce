// Adicione a quantidade de vendas dos sanduíches por dia da semana.
db.produtos.updateMany({}, {$push: {vendasPorDia: {$each: [0, 0, 0, 0, 0, 0, 0]}}});

// Crie uma query que incremente as vendas de Big Mac às quartas-feiras em 60
db.produtos.updateOne({nome: "Big Mac"}, {$inc: {"vendasPorDia.3": 60} });

// Crie uma query que incremente as vendas de todos os sanduíches de carne do
// tipo bovino e pão aos sábados em 120
db.produtos.updateMany({tags: {$all: ["bovino", "pão"]}}, {$inc: {"vendasPorDia.6": 120}});
db.produtos.find({}, {nome: 1, vendasPorDia: 1, _id: 0});
