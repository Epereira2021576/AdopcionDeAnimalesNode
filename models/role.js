const { Schema, model } = require('mongoose');

const RoleSchema = Schema({
  name: { type: String, required: [true, 'Role name required'] },
});

module.exports = model('Role', RoleSchema);
