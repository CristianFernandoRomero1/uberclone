import {
    Router
} from "express"
import {
    historialRutaNuevaRuta,
    historialRutaBuscarConductor,
    historialRutaBuscarPasajero,
    historialRutaPasajeroFeedback,
    historialRutaConductorFeedback
} from "../controllers/historialRuta.js";

const router = Router();
router.post('/nuevaruta', historialRutaNuevaRuta);
router.post('/buscarconductor/:id', historialRutaBuscarConductor);
router.post('/buscarpasajero', historialRutaBuscarPasajero);
router.post('/pasajero/feedback', historialRutaPasajeroFeedback);
router.post('/conductor/feedback', historialRutaConductorFeedback);

export default router;