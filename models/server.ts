import { DBconnection } from "../database/connection";
import express,{ Express } from "express";
import mainRoutes from "../routes/routes";

//al crear el server en una clase podemos crear varias instancias de server
class Server{
    app:Express;
    constructor(){
        this.app = express();
        this.db();
        this.middlewares();
        this.routes();
    }
    async db():Promise<void>{
        await DBconnection();
    }
    middlewares():void{
        this.app.use(express.json());
    }
    routes():void{
        this.app.use('/api',mainRoutes);
    }
    listen():void{
        this.app.listen(8080,()=>{
            console.log('Servidor corriendo en el puerto 8080');
        })
    }
}

export default Server;