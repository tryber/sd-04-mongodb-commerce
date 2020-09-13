db.produtos.updateMany({},{$set:{"criadoPor": "Ronald McDonald"}});
db.produtos.find({"criadoPor": {$exists: true}},{"_id": false, "nome": true, "criadoPor": true});
