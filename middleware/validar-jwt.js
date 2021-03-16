import jwt from 'jsonwebtoken'
import { existeUsuariobyId } from '../helpers/usuarios.js';
import Usuario from '../models/usuario.js';

const generarJWT=(uid='')=>{
    return new Promise((resolve, reject)=>{
        //checkToken(id);
        const payload={uid};

         jwt.sign(payload, process.env.SECRETPRIVATEKEY,{
            expiresIn:'7d'
        },(err,token)=>{
            if(err){
                reject('No se pudo generar el token')
            }else{
                resolve(token)
            }
        })
    })
}
const validarJWT=async(req,res,next)=>{
    const token=req.header('token');

    if(!token){
        return res.status(401).json({
            msg:'No hay token en la peticion'
        })
    }
    try {
        const {uid}=jwt.verify(token,process.env.SECRETPRIVATEKEY);
        const usuario = await Usuario.findById(uid)

        console.log("usuario");
        console.log(usuario);
        if(!usuario){
            return res.status(401).json({
                msg:'Token no válido'
            })
        }
        if(usuario.estado===0){
            return res.status(401).json({
                msg:'Token no válido'
            })
        }
        req.usuario=usuario;
        next();
    } catch (error) {
        return res.status(401).json({
            msg:'Tokon no valido en error'
        })
    }
}
async function checkToken  (token){
    let __id=null;
    try {
        const {_id} = await jwt.decode(token);
        __id=_id
    } catch (error) {
        return false;
    }
    const existeUsuario=existeUsuariobyId(__id);
}
export {generarJWT, validarJWT};