/* import Usuario from '../models/usuario.js'
import bcryptjs from 'bcryptjs'
import { generarJWT } from '../middleware/validar-jwt.js';

const usuarioController = {
    usuarioGet: async(req, res) => {
        const query = req.query.value;
        const usuarios = await Usuario.find({ $or: [{ nombre: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }, { rol: new RegExp(query, 'i') }] });
        res.json({ usuarios })
    },
}


export default usuarioController;  */