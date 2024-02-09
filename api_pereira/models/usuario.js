const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'Name is obligatory'],
  },

  correo: {
    type: String,
    required: [true, 'Mail address is obligatory'],
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'Password is obligatory'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    require: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Usuario', UsuarioSchema);
