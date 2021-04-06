 import mongoose from 'mongoose'

 const comprasShema = mongoose.Schema({
     usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', require: true },
     persona: { type: mongoose.Schema.Types.ObjectId, ref: 'Persona', require: true },
     tipoComprante: { type: String, maxlength: 20 },
     serieComprante: { type: Number, maxlength: 7, unique: true },
     numComprante: { type: Number, maxlength: 10, unique: true },
     impuesto: { type: Number, maxlength: 10, },
     total: { type: Number, maxlength: 10, },

     detalles: [{
         _id: { type: mongoose.Schema.Types.ObjectId, ref: `Articulo`, require: true },
         nombre: { type: String, maxlength: 50 },
         cantidad: { type: Number, default: 0 },
         precioventa: { type: Number, default: 0 },
         descuento: { type: Number, default: 0 }
     }],
     estado: { type: Number, default: 1 },
     createAt: { type: Date, default: Date.now }
 });

 export default mongoose.model('Compra', comprasShema)