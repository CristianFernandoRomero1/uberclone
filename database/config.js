import mongoose from "mongoose";
import {} from "dotenv/config.js";
const dbconnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNX, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            userFindAndModify: false
        });
        console.log("Conectado a la base de datos");
    } catch (error) {
        throw new Error('Error al iniciar la base de datos');
    }
}
export default dbconnection;