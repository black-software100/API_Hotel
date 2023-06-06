import {ServicioHabitacion} from "../service/ServicioHabitaciones.js";

export class ControladorHabitaciones {

    async registrandoHabitacion(req,res){
        let datos = req.body
        let servicioHabitacion = new ServicioHabitacion()
        try {
            if(datos.precioNoche<100 && datos.CantidadMaxima < 2){
                respuesta.status(400).json({
                  "mensaje":"Revisa el precio por noche y la cantidad maxima de persona"
                })
            }else if(datos.precioNoche<100){
              respuesta.status(400).json({
                "mensaje":"Revisa el precio por la noche"
              })
            }else if(datos.CantidadMaxima <2){
              respuesta.status(400).json({
                "mensaje":"Muy poca gente"
              })
            }else{
              await servicioHabitacion.registrarHabitacion(datos)
              respuesta.status(200).json({ 
                mensaje: "Succesfull, adding the data"
              })
            }
        } catch (errorPeticion) {
            respuesta.status(400).json({
              mensaje: "Error in the data ma bro" + errorPeticion
            })
        }
    }

    async buscandoHabitacion(peticion, respuesta) {
        let idHabitacion=peticion.params.idhabitacion
        let servicioHabitacion = new ServicioHabitacion()
      try {
        
        respuesta.status(200).json({
          mensaje: "Succesfull, faunding the room" + idHabitacion,
          "Habitacion": await servicioHabitacion.buscandoHabitacion(idHabitacion)
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the found ma bro" + errorPeticion
        })
      }
    }

    async  buscandoTodasHabitaciones(peticion, respuesta) {
        let servicioHabitacion = new ServicioHabitacion()
        try {
          respuesta.status(200).json({
            mensaje: "Succesfull, faunding the rooms",
            Habitaciones: await servicioHabitacion.buscarTodasHabitacion()
          })
        } catch (errorPeticion) {
          respuesta.status(400).json({
            mensaje: "Error in the found ma bro" + errorPeticion
          })
        }
    }

    async editandoHabitaciones(peticion, respuesta) {
        let idHabitacion=peticion.params.idhabitacion
        let datosHabitacion = peticion.body
        let servicioHabitacion = new ServicioHabitacion()
        try {
          await servicioHabitacion.editarHabitacion(idHabitacion,datosHabitacion)
          respuesta.status(200).json({
            mensaje: "Succesfull, faunding the room" ,
          })
        } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the found ma bro" + errorPeticion
        })
      }
    }
}