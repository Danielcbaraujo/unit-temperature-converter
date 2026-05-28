const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

const lengthUnits = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
};
app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});
app.post("/convert", (req, res) => {
  const { value, from, to } = req.body;

  if (!value === undefined || !from || !to) {
    return res.status(400).json({
      error: "Todos os campos são obrigatórios",
    });
  }

  if (isNaN(value)) {
    return res.status(400).json({
      error: "Value deve ser um número",
    });
  }

  if (!lengthUnits[from] || !lengthUnits[to]) {
    return res.status(400).json({
      error: "Unidade inválida",
    });
  }

  const result = (value * lengthUnits[from]) / lengthUnits[to];

  res.json({
    result,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
