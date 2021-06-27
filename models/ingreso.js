 
 import mongoose from 'mongoose';

 const IngresoSchema = new mongoose.Schema({
     usuario: { type: mongoose.Schema.ObjectId, ref: 'Usuario', required: true },
     persona: { type: mongoose.Schema.ObjectId, ref: 'Persona', required: true },
     tipocomprobante: { type: String, maxlength: 20 },
     seriecomprobante: { type: Number, maxlength: 7, unique: true },
     numcomprobante: { type: Number, maxlength: 10, unique: true },
     impuesto: { type: Number, maxlength: 10 },
     total: { type: Number, maxlength: 10 },

     detalles: [{
         _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Articulo', required: true },
         nombre: { type: String, maxlength: 50 },
         cantidad: { type: Number, default: 0 },
         precioventa: { type: Number, default: 0 },
         descuento: { type: Number, default: 0 }
     }],
     estado: { type: Number, default: 1 },
     createdAt: { type: Date, default: Date.now }  
 })

 export default mongoose.model('Ingreso', IngresoSchema);

/*  import mongoose from "mongoose";
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
export default mongoose.model('Articulo', ArticuloSchema); */