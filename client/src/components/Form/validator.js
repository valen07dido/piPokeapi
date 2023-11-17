const validator = (datos) => {
  const { name, height, type, hp, attack, defense, speed, weight, image } =
    datos;
  let error = {};

  if (!name) {
    error.e1 = "el nombre no puede estar vacio";
  } else if (/\d/.test(name)) {
    error.e2 = "el nombre no puede contener numeros";
  } else if (name.length > 15) {
    error.e3 = "el nombre no puede tener mas de 15 caracteres";
  }
  if (!height) {
    error.e4 = "ingrese un valor de altura";
  }
  if (!hp) {
    error.e5 = "ingrese un valor de vida";
  }
  if (!attack) {
    error.e6 = "ingrese un valor de ataque";
  }
  if (!defense) {
    error.e7 = "ingrese un valor de defensa";
  }
  if (!speed) {
    error.e8 = "ingrese un valor de velocidad";
  }
  if (!weight) {
    error.e9 = "ingrese un valor de peso";
  }
  if (type.length===0) {
    error.e10 = "ingrese un valor de tipo";
  } else if (type.some((tipo) => /\d/.test(tipo))) {
    error.e11 = "el tipo no puede contener numeros";
  }
  if (hp < 0 || hp > 100 || hp == 0) {
    error.e12 = "El valor de vida debe estar entre 0 y 100";
  }
  if (attack < 0 || attack > 200 || attack == 0) {
    error.e13 = "El valor de ataque debe estar entre 0 y 200";
  }
  if (defense < 0 || defense > 100 || defense == 0) {
    error.e14 = "El valor de defensa debe estar entre 0 y 100";
  }
  if (speed < 0 || speed > 100 || speed == 0) {
    error.e15 = "El valor de velocidad debe estar entre 0 y 100";
  }
  if (weight < 0 || weight > 100 || weight == 0) {
    error.e16 = "El valor de peso debe estar entre 0 y 100";
  }
  if (height < 0 || height > 100 || height == 0) {
    error.e17 = "El valor de altura debe estar entre 0 y 100";
  }
  let formato = image.split(":").shift();
  if (image && formato !== "https") {
    error.e18 = "la imagen debe ser URL";
  }

  return error;
};

export default validator;
