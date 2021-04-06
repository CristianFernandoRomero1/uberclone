import mongoose from 'mongoose'

const PersonaSchema = mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, //Id usuario
    tipoPersona: { type: String, required: true, maxlength: 50 }, //Cliente o proveedor
    nombre: { type: String, unique: true, maxlength: 50 },
    tipoDocumento: { type: String, required: true, maxlength: 10 },
    numeroDocumento: { type: Number, required: true, maxlength: 20 },
    direccion: { type: String, required: true, maxlength: 30 },
    telefono: { type: String, required: true, maxlength: 30 },
    email: { type: String, required: true, maxlength: 20 },
    estado: { type: String, default: 1 },
    createdAt: { type: Date, default: Date.now },
})
export default mongoose.model('Persona', PersonaSchema)