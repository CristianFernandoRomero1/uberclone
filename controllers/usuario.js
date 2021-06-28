import Usuario from '../models/usuario.js'
import bcryptjs from 'bcryptjs'
import {generarJWT,validarJWT} from '../middleware/validar-jwt.js';

const usuarioController = {
    usuarioGet:async(req,res)=>{
        const query = req.query.value;
        const usuarios = await Usuario.find({$or:[{nombre:new RegExp(query, 'i')},{email:new RegExp(query, 'i')},{rol:new RegExp(query, 'i')}]});
        res.json({usuarios})
    }, 
    usuarioGetById:async(req,res)=>{
        const {id} = req.params;
        const usuario=await Usuario.findById(id);
        res.json({usuario})
    },
    usuarioPost:async(req, res)=>{
        const {nombre,email,password,rol}=req.body;
        const usuario= Usuario({nombre, email, password, rol})
        const salt = bcryptjs.genSaltSync();
        usuario.password=bcryptjs.hashSync(password, salt);

        usuario.save();
        //res.json({usuario})
        return res.status(200).json({ nombre, email, password, rol });
    },
    login:async(req,res)=>{
        console.log(req.body);
        const {email,password}=req.body;
   
        const usuario=await Usuario.findOne({email:email});
       
        if(!usuario){
            return res.sendStatus(401)
        }
        else if(usuario.estado==="0"){
            return res.sendStatus(403)
            /* return res.json({
                msg:'Cuenta inactiva'
            }) */
        }
        const validarPassword=bcryptjs.compareSync(password,usuario.password);
        if(!validarPassword){
            return res.sendStatus(401)
        }
        const token = await generarJWT(usuario.id); 
        var theUser = usuario.id;
        generarJWT()
        
           //return res.sendStatus(200).send("rfg");
           return res.status(200).json({ token: token, theUser});
          
        
            /* res.send({token})
             res.json({
                 msg:'Inicio de sesión correcto :D',
                usuario,
                token 

            }) */
        
    },
    token:async(req,res,next)=>{
        validarJWT(req,res,next);
    },
    usuarioPut:async(req, res)=>{
        const {id} = req.params;
        const {_id, email, rol, createAt, estado, __v,password,...resto} = req.body;
        if(password){
            const salt = bcryptjs.genSaltSync();
            resto.password=bcryptjs.hashSync(password, salt);
        }
        let usuario = await Usuario.findByIdAndUpdate(id, resto);
        //usuario=await Usuario.findById(id)
        res.json({usuario})
    },
    usuarioPutActivar:async(req,res)=>{
        const {id} = req.params;
        const usuario=await Usuario.findByIdAndUpdate(id,{estado:1});
        res.json({usuario});
    },
    usuarioPutDesactivar:async(req,res)=>{
        const {id} = req.params;
        const usuario=await Usuario.findByIdAndUpdate(id,{estado:0});
        res.json({usuario});
    }
}


export default usuarioController;
