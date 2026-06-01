const express = require("express");

const app = express();

const PORT = 3000;

const converterRoutes = require("./routes/converterRoutes");

app.use(express.json());

app.use(converterRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
