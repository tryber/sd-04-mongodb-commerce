// Renomeie o campo descricao para descricaoSite em todos os documentos produtos
db.produtos.updateMany({}, {$rename: {descricao: "descricaoSite"}});
db.produtos.find({},{ _id: 0, nome: 1, descricao: 1, descricaoSite: 1}).pretty();
