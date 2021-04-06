 import { Router } from "express"
 import { articuloGet, articuloPost } from "../controllers/articulo.js";

 const router = Router();
 router.get('/', articuloGet);
 router.post('/', articuloPost);
 export default router;