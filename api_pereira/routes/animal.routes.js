const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const {
  animalPost,
  getAnimalById,
  animalesGet,
  animalPut,
  animalDelete,
} = require('../controllers/animal.controller');
const { existeAnimalById } = require('../helpers/db-validators');

const router = Router();

router.get('/', animalesGet);

router.get(
  '/:id',
  [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(existeAnimalById),
    validarCampos,
  ],
  getAnimalById
);

router.put(
  '/:id',
  [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(existeAnimalById),
    validarCampos,
  ],
  animalPut
);

router.post(
  '/',
  [
    check('nombre', 'Name cannot be empty').not().isEmpty(),
    check('edad', 'Age must be under 20 years').not().isEmpty(),
    check('tipo', 'Mascot Type not valid').not().isEmpty(),
    validarCampos,
  ],
  animalPost
);

router.delete(
  '/:id',
  [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(existeAnimalById),
    validarCampos,
  ],
  animalDelete
);

module.exports = router;
