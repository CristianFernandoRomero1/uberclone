import { Router } from 'express'
import {ingresoGet, ingresoPost, ingresoActivar, ingresoDesactivar, ingresoGetId} from '../controllers/ingreso.js'
import { validarJWT } from '../middleware/validar-jwt.js'
import { validarCampos } from '../middleware/validar-campos.js'
import { check } from 'express-validator'
import validarRoles from '../middleware/validar-rol.js'

/* , [
    validarJWT,
    validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
    validarCampos
] */ 
const router = Router();
router.get('/', ingresoGet)
router.get('/:id', ingresoGetId)
router.put('/activate/:id', ingresoActivar)
router.put('/deactivate/:id', ingresoDesactivar)

router.post('/', ingresoPost)

export default router 
/* router.put('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    validarCampos

], IngresoControllers.compraPut)

router.put('/activar/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    validarCampos
], IngresoControllers.compraPutactivar)

router.put('/desactivar/:id', [
    validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    validarCampos
], IngresoControllers.compraPutDesactivar)

router.delete('/:id', [
    validarJWT,
    validarRoles('ALMACENISTA_ROL', 'ADMIN_ROL'),
    check('id', 'No es valido').isMongoId(),
    validarCampos
], IngresoControllers.compraPutDelete) */

//Aqui va export


/* import { Router } from "express"
import { articuloGet, articuloPost, articuloDelete, articuloUpdate } from "../controllers/articulo.js";

const router = Router();
router.get('/', articuloGet);
router.post('/', articuloPost);
router.put('/:id', articuloUpdate);
router.delete('/:id', articuloDelete);
export default router; */