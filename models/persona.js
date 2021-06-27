import mongoose from 'mongoose'

const PersonaSchema = mongoose.Schema({
    //usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, //Id usuario
    
    tipopersona: { type: String, required: true, maxlength: 50 }, //Cliente o proveedor
    nombre: { type: String, unique: true, maxlength: 50 },
    tipodocumento: { type: String, required: true, maxlength: 50 },
    numdocumento: { type: Number, required: true, maxlength: 50 },
    direccion: { type: String, required: true, maxlength: 80 },
    telefono: { type: String, required: true, maxlength: 50 },
    email: { type: String, required: true, maxlength: 50 },
    estado: { type: String, default: 1 },
    createdAt: { type: Date, default: Date.now },
})
export default mongoose.model('Persona', PersonaSchema)