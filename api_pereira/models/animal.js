const { Schema, model } = require('mongoose');

const AnimalesSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'Mascot name required'],
  },

  edad: {
    type: String,
    required: [true, 'Age required'],
  },

  tipo: {
    type: String,
    required: [true, 'Mascot type required'],
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

module.exports = model('Animal', AnimalesSchema);
