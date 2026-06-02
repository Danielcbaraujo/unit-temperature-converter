const { unitTypes } = require("../utils/conversionTables");

function convertTemperature(value, from, to) {
  if (from === to) return value;

  if (from === "C" && to === "F") {
    return (value * 9) / 5 + 32;
  }

  if (from === "F" && to === "C") {
    return ((value - 32) * 5) / 9;
  }

  if (from === "C" && to === "K") {
    return value + 273.15;
  }

  if (from === "K" && to === "C") {
    return value - 273.15;
  }

  if (from === "F" && to === "K") {
    return ((value - 32) * 5) / 9 + 273.15;
  }

  if (from === "K" && to === "F") {
    return ((value - 273.15) * 9) / 5 + 32;
  }
}

function convertUnits(type, value, from, to) {
  if (type === "temperature") {
    return convertTemperature(value, from, to);
  }

  const units = unitTypes[type];

  if (!units) {
    throw new Error("Tipo inválido");
  }

  return (value * units[from]) / units[to];
}

module.exports = convertUnits;
