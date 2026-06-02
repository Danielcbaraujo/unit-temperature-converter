const lengthUnits = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
};

const weightUnits = {
  mg: 0.001,
  g: 1,
  kg: 1000,
};

const unitTypes = {
  length: lengthUnits,
  weight: weightUnits,
};

module.exports = {
  unitTypes,
};
