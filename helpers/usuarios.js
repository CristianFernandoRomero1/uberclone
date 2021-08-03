import UsuarioAplicacion from "../models/UsuarioAplicacion.js"


const existeUsuariobyId=async(id)=>{
    const existe=await UsuarioAplicacion.findById(id); //
    if(!existe){
        throw new Error('El ID  no existe');
    }
}

export {existeUsuariobyId}