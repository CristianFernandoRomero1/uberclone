import mongoose from "mongoose";
const UsuarioAplicacionSchema = new mongoose.Schema({
    nombre: { type: String},
    correo: { type: String},
    contrasena: { type: String},
    telefono: { type: Number},
    numeroDocumentoIdentidad: { type: Number},
    idLicenciaConduccion: { type: Number},
    soat: { type: Number},
    modeloVehiculo: { type: String},
    placaVehiculo: { type: String},
    colorVehiculo: { type: String},
    createAt: { type: Date, default: Date.now }
})
export default mongoose.model('UsuarioAplicacion', UsuarioAplicacionSchema);

// TABLAS => collection
// CAMPOS => property
// REGISTROS => Docments