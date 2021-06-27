import Categoria from "../models/categoria.js"
const categoriaControllers={
    categoriaGet : async(req, res) =>{
        const value = req.query.value;
        const categoria=await Categoria.find({$or:[{nombre:new RegExp(value, 'i')},{descripcion:new RegExp(value, 'i')}]}).sort({'createAt':1})
        console.log("dentro de categoria")
     res.json({
        categoria
    })   
    },
    categoriaGetById : async(req, res) =>{
        const {id}=req.params;
    
        const categoria = await Categoria.findOne({_id:id});
     res.json({
        categoria
    }) 
    }, 
    categoriaPost : async (req, res)=>{
        const {nombre, descripcion} = req.body;
        const categoria = new Categoria({nombre, descripcion});
        console.log("dentro de post categoria")
        console.log(categoria)
        /* res.json({nombre, descripcion}) */
        
        await categoria.save();
         res.json({
            categoria
        }) 
        
    },
    categoriaPut:async(req,res)=>{
        const {id}=req.params;
        const {_id, estado,createAt,__v,...resto}=req.body;
        const categoria=await Categoria.findByIdAndUpdate(id, resto);
        console.log(req.body);
        console.log("Intento de actualizar esto");
        res.json({categoria})
    },
    categoriaPutActivar: async(req,res)=>{
        const {id} = req.params;
        const categoria = await Categoria.findByIdAndUpdate(id,{estado:1});
        res.json({categoria})

    },
    categoriaPutDesactivar: async(req,res)=>{
        const {id} = req.params;
        const categoria = await Categoria.findByIdAndUpdate(id,{estado:0});
        res.json({categoria})

    },
    categoriaDelete: async(req,res)=>{
        const {id} = req.params;
        const categoria = await Categoria.findByIdAndDelete(id);
        console.log("dentro de delete")
        console.log(id)
        res.json({categoria})

    },
}


export default categoriaControllers;