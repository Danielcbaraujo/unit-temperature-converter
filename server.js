const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

app.post("/convert", (req, res) => {
  res.json({
    message: "Rota funcionando",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
