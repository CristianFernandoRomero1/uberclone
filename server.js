import express from 'express';
import cors from "cors";
import {} from "dotenv/config.js";
import dbconnection from './database/config.js';

class Server {
    constructor(){
        //Servidor
        this.port=process.env.PORT;
        this.app = express();
        this.conectarBD();
        this.middlewares();
        this.routes();
        //Conectar a la BD
        //Dar a conocer middlewar
        //Rutas
    }
    routes(){

    }
    async conectarBD(){
        await dbconnection();

    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto 3000 ${this.port}`);
        })
    }
  
}


export default Server


