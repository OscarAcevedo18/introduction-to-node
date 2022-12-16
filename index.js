const { registrar, read } = require("./operaciones");

const [registro, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (registro === "registrar") {
  if (
    nombre === undefined ||
    edad === undefined ||
    animal === undefined ||
    color === undefined ||
    enfermedad === undefined
  ) {
    console.log("Faltan argumentos en el campo");
    return;
  }
  registrar(nombre, edad, animal, color, enfermedad);
} else if (registro === "read") {
  read();
} else {
  console.log("El Registro ingresado no es valido");
};