const express = require("express");
const cors = require("cors");
const productos = require("./datos");

const app = express();
const PORT = 3000;

app.use(cors());

/* const productos = [
  { id: 1, nombre: "Pan de molde", precio: 1.5 },
  { id: 2, nombre: "Croissant", precio: 1.0 },
  { id: 3, nombre: "Baguette", precio: 1.2 },
  { id: 4, nombre: "Pan integral", precio: 1.8 },
  { id: 5, nombre: "Donut", precio: 0.9 },
  { id: 6, nombre: "Pan de centeno", precio: 1.7 },
  { id: 7, nombre: "Pan de queso", precio: 2.0 },
  { id: 8, nombre: "Pan de chocolate", precio: 1.5 },
  { id: 9, nombre: "Pan de ajo", precio: 1.3 },
  { id: 10, nombre: "Pan de mantequilla", precio: 1.6 },
]; */

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
