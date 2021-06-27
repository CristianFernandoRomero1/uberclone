 import { Router } from "express"
 import { articuloGet, articuloPost, articuloDelete, articuloUpdate } from "../controllers/articulo.js";

 const router = Router();
 router.get('/', articuloGet);
 router.post('/', articuloPost);
 router.put('/:id', articuloUpdate);
 router.delete('/:id', articuloDelete);
 export default router;