import express from 'express';
import cors from 'cors';
import {rutas} from './router/rutas.js';
import {establecerConexion} from './database/conexion.js';
export default class app{

    constructor(){
        this.app = express();
        this.conectarBd();
        this.enrutarPeticiones()
    }

    despetarServidor(){
        this.app.listen( 3000, () => console.log("Servidor encendido..."))
    }

    enrutarPeticiones(){
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use('/',rutas);
    }

    conectarBd(){
        establecerConexion()
    }
}