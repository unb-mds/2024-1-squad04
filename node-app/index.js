// index.js
const http = require('http');

// Crie um servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar o cabeçalho da resposta com o tipo de conteúdo e código de status 200 (OK)
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Escreva a resposta "Hello, world!" no corpo da resposta
  res.end('Hello, world!\n');
});

// Ouvir na porta 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
