const Usuario = require('../models/usuario');

/*const esRoleValido = async (role = '') => {
  const existeRol = await Usuario.findOne({ role });
  if (!existeRol) {
    throw new Error(`${role} role doesn't exist in the database`);
  }
};*/

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

module.exports = {
  existenteEmail,
  existeUsuarioById,
};
