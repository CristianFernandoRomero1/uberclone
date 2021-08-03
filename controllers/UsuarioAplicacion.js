import UsuarioAplicacion from '../models/UsuarioAplicacion.js'
import bcryptjs from 'bcryptjs'
import {generarJWT,validarJWT} from '../middleware/validar-jwt.js';

const UsuarioAplicacionGet = async(req, res) => {
    //const articulos = await Articulo.find().populate('categoria', 'nombre');
    console.log("imprint")
    const usuarioAplicacion = await UsuarioAplicacion.find();
    res.status(201).json({
        usuarioAplicacion
    })
}

const UsuarioAplicacionById = async(req, res)=>{
    const {id}=req.params;
    
    const usuarioAplicacion = await UsuarioAplicacion.findOne({_id:id});
 res.json({
    usuarioAplicacion
}) 
}
const UsuarioAplicacionRegistro = async(req, res)=>{
    const {nombre, correo, contrasena, telefono, numeroDocumentoIdentidad, idLicenciaConduccion, soat, modeloVehiculo, placaVehiculo, colorVehiculo}=req.body;
    const usuarioAplicacion= UsuarioAplicacion({nombre, correo, contrasena, telefono, numeroDocumentoIdentidad, idLicenciaConduccion, soat, modeloVehiculo, placaVehiculo, colorVehiculo})
    const salt = bcryptjs.genSaltSync();
    usuarioAplicacion.contrasena=bcryptjs.hashSync(contrasena, salt);

    usuarioAplicacion.save();
    //res.json({usuario})
    console.log(usuarioAplicacion);
    return res.status(200).json({ usuarioAplicacion });
},

 UsuarioAplicacionLogin = async(req, res) => {
    const {correo,contrasena}=req.body;
    console.log(req.body)
        const usuario=await UsuarioAplicacion.findOne({correo:correo});
       console.log(usuario);
        if(!usuario){
            return res.sendStatus(401)
        }
        else if(usuario.estado==="0"){
            return res.sendStatus(403)
            /* return res.json({
                msg:'Cuenta inactiva'
            }) */
        }
        const validarPassword=bcryptjs.compareSync(contrasena,usuario.contrasena);
        if(!validarPassword){
            return res.sendStatus(401)
        }
        const token = await generarJWT(usuario.id); 
        var theUser = usuario.id;
        generarJWT()
        
           //return res.sendStatus(200).send("rfg");
           return res.status(200).json({ token: token, theUser});
          
}
    
        
            /* res.send({token})
             res.json({
                 msg:'Inicio de sesión correcto :D',
                usuario,
                token 
    
            }) */



/*const articuloUpdate = async(req,res)=>{
   const {id}=req.params;
   const {_id,createAt,__v,...resto}=req.body;
   const articulo=await Articulo.findByIdAndUpdate(id, resto);
   console.log(req.body);
   console.log("Intento de actualizar Articulos");
   res.json({articulo})
}
const articuloDelete = async(req,res)=>{
   const {id} = req.params;
   const articulo = await Articulo.findByIdAndDelete(id);
   console.log("dentro de delete")
   console.log(id)
   res.json({articulo})
}*/

export { UsuarioAplicacionGet, UsuarioAplicacionById, UsuarioAplicacionLogin, UsuarioAplicacionRegistro};