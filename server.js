import express from 'express';
import cors from "cors";
import dbconnection from "./database/config.js"
import {} from "dotenv/config.js";
import UsuarioAplicacion from './routes/UsuarioAplicacion.js';
import historialRuta from './routes/historialRuta.js';

class Server {
    constructor() {
        //Servidor
        this.port = process.env.PORT;
        this.app = express();
        this.conectarBD();
        this.middlewares();
        this.routes();
        //Conectar a la BD
        //Dar a conocer middlewar
        //Rutas
    }
    routes() {
        this.app.use('/api/usuarioaplicacion', UsuarioAplicacion);
        this.app.use('/api/historialruta', historialRuta);

    }
    async conectarBD() {
        await dbconnection();

    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))


    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }

}


export default Server