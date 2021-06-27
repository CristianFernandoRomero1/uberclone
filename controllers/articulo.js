 import Articulo from '../models/articulo.js'
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

 export { articuloGet, articuloPost, articuloDelete, articuloUpdate };