import { Router } from "express"
import {  UsuarioAplicacionGet, UsuarioAplicacionById, UsuarioAplicacionLogin, UsuarioAplicacionRegistro } from "../controllers/UsuarioAplicacion.js";

const router = Router();
router.get('/', UsuarioAplicacionGet);
router.get('/:id', UsuarioAplicacionById);
router.post('/login', UsuarioAplicacionLogin);
router.post('/registro', UsuarioAplicacionRegistro)
/* router.put('/:id', articuloUpdate);
router.delete('/:id', articuloDelete); */
export default router;