const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const filePath = 'archivoSincrono.txt';

  // Leer el archivo de forma síncrona
  const fileContent = fs.readFileSync(filePath);

  // Enviar el archivo como respuesta
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(fileContent);
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
