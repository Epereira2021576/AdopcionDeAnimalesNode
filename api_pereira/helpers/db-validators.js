const Usuario = require('../models/usuario');
const Animal = require('../models/animal');

const existenteEmail = async (correo = '') => {
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(
      `Mail address ${correo} already registered in the database`
    );
  }
};

const existeUsuarioById = async (id = '') => {
  const existeUsuario = await Usuario.findOne({ id });
  if (existeUsuario) {
    throw new Error(`User with id ${id} doesn't exist in the database`);
  }
};

const existeAnimalById = async (id = '') => {
  const existeAnimal = await Animal.findOne({ id });
  if (existeAnimal) {
    throw new Error(`Mascot with id ${id} doesn't exist in the database`);
  }
};

module.exports = {
  existenteEmail,
  existeUsuarioById,
  existeAnimalById,
};
