db.produtos.updateOne({ nome: "Big Mac" }, { $unset: curtidas });
db.produtos.find();