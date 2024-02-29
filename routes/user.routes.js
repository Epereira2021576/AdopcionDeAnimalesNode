const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  getUsuarioById,
  usuariosDelete,
} = require('../controllers/user.controller');

const {
  existenteEmail,
  existeUsuarioById,
} = require('../helpers/db-validators');

const router = Router();

router.get('/', usuariosGet);

router.get(
  '/:id',
  [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos,
  ],
  getUsuarioById
);

router.put(
  '/:id',
  [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos,
  ],
  usuariosPut
);

router.post(
  '/',
  [
    check('nombre', 'Name cannot be empty').not().isEmpty(),
    check('password', 'Password must be be bigger than 6 characters').isLength({
      min: 6,
    }),
    check('correo', 'Invalid mail address').isEmail(),
    check('correo').custom(existenteEmail),
    validarCampos,
  ],
  usuariosPost
);

router.delete(
  '/:id',
  [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos,
  ],
  usuariosDelete
);

module.exports = router;
