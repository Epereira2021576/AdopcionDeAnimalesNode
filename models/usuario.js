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
  role: {
    type: String,
    require: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

module.exports = model('Usuario', UsuarioSchema);
