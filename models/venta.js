/* import mongoose from "mongoose";
const VentaSchema = new mongoose.Schema({
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    codigo: { type: String, required: true, maxlength: 64, unique: true },
    nombre: { type: String, required: true, maxlength: 50, unique: true },
    precio: { type: Number, default: 0 },
    cantidad: { type: Number, default: 0 },
    createAt: { type: Date, default: Date.now }
})
export default mongoose.model('Venta', VentaSchema); */