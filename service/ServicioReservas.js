import {modeloReservas} from "../models/modeloReserva.js";
export class ServicioReserva{

    constructor(){}

    async registrandoReservas(datosReservas){
        let ReservaNueva = new modeloReservas(datosReservas);
        return await ReservaNueva.save();
    }

    async buscarTodasReserva(){
        let habitacionConsultas = await modeloReservas.find()
        console.log(habitacionConsultas)
        return habitacionConsultas
    }
    
    async buscandoReserva(idReservas){
        let habitacionConsultas = await modeloReservas.findById(idReservas);

        return habitacionConsultas
    }
    
    async editarReserva(idReservas,datosReservas){
        let editarHabitacion = await modeloHabitacion()

        return await modeloReservas.findByIdAndUpdate(idReservas,datosReservas);
    }

    async borraReserva(id){
        return await modeloReservas.findByIdAndDelete(id)
    }

}