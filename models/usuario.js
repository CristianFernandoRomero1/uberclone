import mongoose from 'mongoose'

const UsuarioSchema = mongoose.Schema({
    nombre : {type:String, required:true,maxlength:50},
    email : {type:String,unique:true, maxlength:50},
    password : {type:String, required:true,maxlength:70},
    rol : {type:String, required:true,maxlength:20},
    estado : {type:String, default:1},
    createdAt : {type:Date, default:Date.now},

})
export default mongoose.model('Usuario', UsuarioSchema)