// Conte quantos documentos contêm as palavras frango e hamburguer utilizando o operador $text
db.produtos.createIndex({descricao: "text"}, {default_language: "pt"});
db.produtos.count({$text: {$search: "frango hamburguer"}});
