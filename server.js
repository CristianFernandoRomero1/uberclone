import express from 'express';
import cors from "cors";
import dbconnection from "./database/config.js"
import categoria from "./routes/categoria.js";
import {} from "dotenv/config.js";
import usuario from './routes/usuario.js';
import articulo from './routes/articulo.js';
import ingreso from './routes/ingreso.js';
import persona from './routes/persona.js';
import {} from "./models/articulo.js";
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
        this.app.use('/api/categoria', categoria);
        this.app.use('/api/usuario', usuario);
        this.app.use('/api/articulo', articulo);
        this.app.use('/api/ingreso', ingreso)
        this.app.use('/api/persona', persona)
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