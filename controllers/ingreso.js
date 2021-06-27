import Ingreso from '../models/ingreso.js'
//import Articulo from '../models/articulo.js'

const ingresoGet = async(req, res) => {
    const ingreso = await Ingreso.find().populate('usuario', 'nombre')
    .populate('persona',["tipoPersona","tipoDocumento","nombre"])
    console.log("Dentro de ingreso GET")
    console.log(ingreso)
    res.json({
        ingreso
    })
}
const ingresoGetId = async(req, res) => {
    const { id } = req.params
    const ingreso = await Ingreso.findById(id).populate('usuario', 'nombre')
    .populate('persona',["tipoDocumento","nombre"])
   
    res.json({
        ingreso
    })
}
const ingresoPost = async(req, res) => {

    const { usuario, persona, categoria, tipocomprobante, seriecomprobante, numcomprobante, impuesto, total, detalles} = req.body
    const ingreso = new Ingreso({ usuario, persona, categoria, tipocomprobante, seriecomprobante, numcomprobante, impuesto, total, detalles})
        //Quité persona
    
    await ingreso.save();
     //detalles.map((articulo) => aumentarStock(articulo.id, articulo.cantidad)) 
    res.json({
        ingreso
    })
}
const ingresoActivar= async(req, res) => {
    console.log("dentro de activar")
    const { id } = req.params

    const ingreso = await Ingreso.findByIdAndUpdate(id,{estado:1});
    res.json({
        ingreso
    })
}
const ingresoDesactivar= async(req, res) => {
    console.log("dentro de desactivar")
    const { id } = req.params

    const ingreso = await Ingreso.findByIdAndUpdate(id,{estado:0});
    res.json({
        ingreso
    })
}
export {ingresoGet, ingresoGetId, ingresoPost, ingresoActivar, ingresoDesactivar};
/* const IngresoControllers = {
     aumentarStock: async(id, cantidad) => {
        let stock = Articulo.findById(id)
        stock = parseInt(stock) + parseInt(cantidad)
        await Articulo.findByIdAndUpdate({ id }, { stock })
    },


    disminuirStock: async(id, cantidad) => {
        let stock = await Articulo.findById(id)
        stock = parseInt(stock) - parseInt(cantidad)
        await Articulo.findByIdAndUpdate({ id }, { stock })
    }, 

    compraGet: async(req, res) => {
        const ingreso = await Ingreso.find();
        console.log("Dentro de ingreso GET")
        console.log(ingreso)
        res.json({
            ingreso
        })

    },
 

    compraPost: async(req, res) => {
        const { usuario, persona, categoria, tipoComprante, serieComprante, numComprante, impuesto, total, detalles} = req.body
        const ingreso = new Ingreso({ usuario, persona, categoria, tipoComprante, serieComprante, numComprante, impuesto, total, detalles })
            //Quité persona
        
        await ingreso.save();
         //detalles.map((articulo) => aumentarStock(articulo.id, articulo.cantidad)) 
        res.json({
            ingreso
        })
    }, */

   /*  compraPut: async(req, res) => {
        const { id } = req.params
        const { _id, estado, createAt, __v, ...resto } = req.body

        const compra = await Compra.findByIdAndUpdate(id, resto);
        res.json({
            compra
        })
    },
    compraPutactivar: async(req, res) => {
        const { id } = req.params
        const compra = await Compra.findByIdAndUpdate(id, { estado: 1 });

        res.json({
            compra
        })

    },
    compraPutDesactivar: async(req, res) => {
        const { id } = req.params
        const compra = await Compra.findByIdAndUpdate(id, { estado: 0 });

        res.json({
            compra
        })
    },

    compraPutDelete: async(req, res) => {
        const { id } = req.params
        const compra = await Compra.findByIdAndDelete(id, );
        res.json({
            compra
        })

    }, */
//}
//export default IngresoControllers 

/* import Articulo from '../models/articulo.js'
import Categoria from "../models/categoria.js"
const articuloGet = async(req, res) => {
    const articulos = await Articulo.find().populate('categoria', 'nombre');
    const categorias = await Categoria.find().populate('categoria', 'nombre');
    res.json({
        articulos, categorias
    })
}
const articuloPost = async(req, res) => {
    const { codigo, categoria, nombre, descripcion, precio, stock } = req.body;
    const articulo = new Articulo({ codigo, categoria, nombre, descripcion, precio, stock })
    await articulo.save();
    res.json({
        articulo
    })
}
const articuloUpdate = async(req,res)=>{
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
}

export { articuloGet, articuloPost, articuloDelete, articuloUpdate }; */