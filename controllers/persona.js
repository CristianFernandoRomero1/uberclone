import Persona from '../models/persona.js'


const personaController = {
    personaGet: async(req, res) => {
        const query = req.query.value;
        const usuarios = await Persona.find({ $or: [{ nombre: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }, { rol: new RegExp(query, 'i') }] });
        res.json({ usuarios })
    },
    personaGetById: async(req, res) => {
        const { id } = req.params;
        const usuario = await Persona.findById(id);
        res.json({ usuario })
    },
    personaPost: async(req, res) => {
        const { tipoPersona, nombre, tipoDocumento, numeroDocumento, direccion, telefono, email, estado } = req.body;
        const usuario = Persona({ tipoPersona, nombre, tipoDocumento, numeroDocumento, direccion, telefono, email, estado })
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