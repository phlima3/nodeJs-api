const http = require("http");
const port = 3000;

const routes = {
  "/": "Curso de node",
  "/livros": "Página de livros",
  "/autores": "Página de autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url] || "Not found");
});

server.listen(port, () => {
  console.log(`Servidor aberto na porta http://localhost:${port}`);
});
