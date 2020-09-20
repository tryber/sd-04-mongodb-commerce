db.produtos.find({"nome":{$regex:/Mc/}}).count();
/* Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas.*/
