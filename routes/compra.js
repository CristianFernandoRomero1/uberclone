import { Router } from 'express'
import CompraControllers from '../controllers/compra.js'
import { validarJWT } from '../middleware/validar-jwt.js'
import { validarCampos } from '../middleware/validar-campos.js'
import { check } from 'express-validator'
import validarRoles from '../middleware/validar-rol.js'


const router = Router();
router.get('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    validarCampos
], CompraControllers.compraGet)

router.post('/', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    /* check('nombre', 'El nombre es obligatorio').not().isEmpty(), */
    validarCampos

], CompraControllers.compraPost)

router.put('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'No es valido').isMongoId(),
    validarCampos

], CompraControllers.compraPut)

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'No es valido').isMongoId(),
    validarCampos
], CompraControllers.compraPutactivar)

router.put('/desactivar/:id', [
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'No es valido').isMongoId(),
    validarCampos
], CompraControllers.compraPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL'),
    check('id', 'No es valido').isMongoId(),
    validarCampos
], CompraControllers.compraPutDelete)


export default router