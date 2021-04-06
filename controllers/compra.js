import Compra from '../models/compra.js'
import Articulo from '../models/articulo.js'

const CompraControllers = {
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
        const compra = await Compra.find();
        res.json({
            compra
        })

    },
    compraPost: async(req, res) => {
        const { usuario, persona, tipoComprante, serieComprante, numComprante, impuesto, total, detalles, } = req.body
        const compra = new Compra({ usuario, tipoComprante, serieComprante, numComprante, impuesto, total, detalles })
            //Quité persona

        await compra.save();
        /* detalles.map((articulo) => aumentarStock(articulo.id, articulo.cantidad)) */
        res.json({
            compra
        })
    },

    compraPut: async(req, res) => {
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

    },
}
export default CompraControllers