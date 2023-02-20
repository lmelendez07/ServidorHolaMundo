const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileName = 'archivoAsincrono.txt';
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error al leer el archivo: ${err}`);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
