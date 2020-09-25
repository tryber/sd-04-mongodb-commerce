db.produtos.updateMany(
  {},
  {
    $set: 
    { valorUnitario: NumberDecimal("0.00") }
  }
);
