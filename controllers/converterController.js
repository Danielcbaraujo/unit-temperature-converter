const convertUnits = require("../services/converterService");

function convert(req, res) {
  const { type, value, from, to } = req.body;

  if (!type || value === undefined || !from || !to) {
    return res.status(400).json({
      error: "Todos os campos são obrigatórios",
    });
  }

  if (isNaN(value)) {
    return res.status(400).json({
      error: "Value deve ser um número",
    });
  }

  try {
    const result = convertUnits(type, Number(value), from, to);

    res.json({
      result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = convert;
