const DB:string = 'mongodb+srv://emifran2812:<pass>@gastos.kgwasft.mongodb.net/'
import mongoose from "mongoose";

//127.0.0.1:8080

export const DBconnection = async ():Promise<void> => {
    try{
        await
        mongoose.connect(DB);
        console.log('Conectado a la base de datos')
    }
    catch(error){
        console.log(error)
        throw new Error ('Error en la base de datos')
    }
}