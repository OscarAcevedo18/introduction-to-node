const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  citas.push({ nombre, edad, tipo, color, enfermedad });

  fs.writeFileSync("citas.json", JSON.stringify(citas));
};

const read = () => {
  const display_cites = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(display_cites);
};

module.exports = { registrar, read };