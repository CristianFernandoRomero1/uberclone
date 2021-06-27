import { Router } from 'express'
import personaController from '../controllers/persona.js'

const router = Router();

router.get('/', personaController.personaGet);
router.get('/proveedores', personaController.personaProveedor);
router.get('/:id', personaController.personaGetById);
router.post('/', personaController.personaPost);
/* router.post('/login', usuarioController.login);

router.put('/:id', usuarioController.usuarioPut);
router.put('/activar/:id', usuarioController.usuarioPutActivar);
router.put('/desactivar/:id', usuarioController.usuarioPutDesactivar); */

export default router;