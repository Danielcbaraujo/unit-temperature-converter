const convertUnits = require("../services/converterService");

function convert(req, res) {
  const { value, from, to } = req.body;

  if (value === undefined || !from || !to) {
    return res.status(400).json({
      error: "Todos os campos são obrigatórios",
    });
  }

  if (isNaN(value)) {
    return res.status(400).json({
      error: "Value deve ser um número",
    });
  }

  const result = convertUnits("length", Number(value), from, to);

  res.json({
    result,
  });
}

module.exports = convert;
