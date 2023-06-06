import { modeloHabitacion} from "../models/modeloHabitacion.js";
export class ServicioHabitacion{

    constructor(){}

    async registrarHabitacion(datosHabitacion){
        let HabitacionNueva = new modeloHabitacion(datosHabitacion);
        return await HabitacionNueva.save();
    }

    async buscarTodasHabitacion(){
        let habitacionConsultas = await modeloHabitacion.find()

        return habitacionConsultas
    }
    
    async buscandoHabitacion(idHabitacion){
        let habitacionConsultas = await modeloHabitacion.findById(idHabitacion);

        return habitacionConsultas
    }
    
    async editarHabitacion(idHabitacion,datosHabitacion){
        let editarHabitacion = await modeloHabitacion()

        return await modeloHabitacion.findByIdAndUpdate(idHabitacion,datosHabitacion);
    }

}