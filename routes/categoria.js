import { Router } from 'express'
import categoriaControllers from '../controllers/categoria.js'
import { check } from 'express-validator'
import { validarCampos } from '../middleware/validar-campos.js';
import { existeCategoriaById, existeCategoriaByNombre } from '../helpers/categorias.js';
import { validarJWT } from '../middleware/validar-jwt.js';
import validarRoles from '../middleware/validar-rol.js'
const router = Router();

router.get('/', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'ALMACENISTA_ROL', 'VENDEDOR_ROL'),
    validarCampos
], categoriaControllers.categoriaGet);

router.get('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL', 'ALMACENISTA_ROL'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaControllers.categoriaGetById);

router.post('/' , [
    validarJWT,
    validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom(existeCategoriaByNombre),
    validarCampos
] , categoriaControllers.categoriaPost);

router.put('/:id', [

        validarJWT,
        validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeCategoriaById),
        validarCampos, check('nombre').not().isEmpty(),
        check('nombre').custom(existeCategoriaByNombre)
    ],
    categoriaControllers.categoriaPut);

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaControllers.categoriaPutActivar);

router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaById),
    validarCampos
], categoriaControllers.categoriaPutDesactivar);

router.delete('/:id', [
        validarJWT,
        validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
        check('id', 'No es un ID válido').isMongoId(),
        check('id').custom(existeCategoriaById),
        validarCampos
    ],
    categoriaControllers.categoriaDelete);

export default router;