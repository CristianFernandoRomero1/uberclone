import Persona from '../models/persona.js'


const personaController = {
    personaGet: async(req, res) => {
        const query = "persona";//req.query.value
        const persona = await Persona.find({ $or: [{ tipoPersona: new RegExp(query, 'i') }] });
        res.json({ persona })
    },
    personaProveedor: async(req, res) => {
        //const query = "persona";//req.query.value
        const persona = await Persona.find(); //{ $or: [{ tipoPersona: new RegExp(query, 'i') }] }
        res.json({ persona })
    },
    personaGetById: async(req, res) => {
        const { id } = req.params;
        const usuario = await Persona.findById(id);
        res.json({ usuario })
    },
    personaPost: async(req, res) => {
        const { tipopersona, nombre, tipodocumento, numdocumento, direccion, telefono, email, estado } = req.body;
        const usuario = Persona({ tipopersona, nombre, tipodocumento, numdocumento, direccion, telefono, email, estado })
        console.log(usuario)
        usuario.save();
        res.json({ usuario })
    },
    /*   usuarioPut: async(req, res) => {
          const { id } = req.params;
          const { _id, email, rol, createAt, estado, __v, password, ...resto } = req.body;
          if (password) {
              const salt = bcryptjs.genSaltSync();
              resto.password = bcryptjs.hashSync(password, salt);
          }
          let usuario = await Usuario.findByIdAndUpdate(id, resto);
          //usuario=await Usuario.findById(id)
          res.json({ usuario })
      },
      usuarioPutActivar: async(req, res) => {
          const { id } = req.params;
          const usuario = await Usuario.findByIdAndUpdate(id, { estado: 1 });
          res.json({ usuario });
      },
      usuarioPutDesactivar: async(req, res) => {
          const { id } = req.params;
          const usuario = await Usuario.findByIdAndUpdate(id, { estado: 0 });
          res.json({ usuario });
      } */
}


export default personaController;