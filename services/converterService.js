const { lengthUnits, weightUnits } = require("../utils/conversionTables");

function convertUnits(type, value, from, to) {
  let units;

  if (type === "length") {
    units = lengthUnits;
  }

  if (type === "weight") {
    units = weightUnits;
  }

  if (!units) {
    throw new Error("Tipo de conversão inválido");
  }

  if (!units[from] || !units[to]) {
    throw new Error("Unidade inválida");
  }

  const result = (value * units[from]) / units[to];

  return result;
}

module.exports = convertUnits;
