import mongoose from "mongoose";
const ArticuloSchema = new mongoose.Schema({
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
    codigo: { type: String, required: true, maxlength: 64, unique: true },
    nombre: { type: String, required: true, maxlength: 50, unique: true },
    descripcion: { type: String, maxlength: 255 },
    precio: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    estado: { type: Number, default: 1 }, //1 activo, 0 inactivo
    createAt: { type: Date, default: Date.now }
})
export default mongoose.model('Articulo', ArticuloSchema);

// TABLAS => collection
// CAMPOS => property
// REGISTROS => Docments