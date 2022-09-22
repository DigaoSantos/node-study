const path = require("path");

//Basename - apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

//extensao do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

//juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));