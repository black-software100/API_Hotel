import {ServicioReserva} from "../service/ServicioReservas.js";
import {ServicioHabitacion} from "../service/ServicioHabitaciones.js";
export class ControladorReservas {

   async registrandoReservas(peticion, respuesta) {
    let datos =peticion.body
    const servicioReserva = new ServicioReserva()
    const servicioHabitacion = new ServicioHabitacion()
    let hotel = NaN
    let fechaInicial  = new Date(datos.fechaInicio)
    let fechaFinal = new Date(datos.fechaFinal)
      try {
        // traer la informacion de hotel
        if(datos.numeroPersona > 5){
          respuesta.status(400).json({
            mensaje:"EL numero de persona no pueden ser mayor que 5 personas"
          });
          return 
        }

        hotel = await servicioHabitacion.buscandoHabitacion(datos.idHabitacion)
        // validicacion si existe el hotel
        if(hotel == null) {
          respuesta.status(400).json({
            mensaje:"La habitacion no existe"
          })
        // validacion si la fecha esta bien   
        }else if(Date.parse(fechaFinal)< Date.parse(fechaInicial)){
          respuesta.status(400).json({
            mensaje:"La fecha de ingreso no puede ser menor a la de salida"
          })
        // se agrga el valor de la reserva final con la cantidad de dias reservado 
        }else{
          const diferenciaEnMilisegundos = Math.abs(fechaFinal.getTime() - fechaInicial.getTime());
          const cantidadDeDias = Math.ceil(diferenciaEnMilisegundos / (1000 * 3600 * 24));
          const costoReserva = hotel.precioNoche * cantidadDeDias
          const valortotal = "costoReserva"
          datos[valortotal]= costoReserva
          console.log(datos)
          await servicioReserva.registrandoReservas(datos)
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
  
    async buscandoReservas(peticion, respuesta) {
        let id=peticion.params.idreserva
        const servicioReserva = new ServicioReserva()
      try {
        respuesta.status(200).json({
          reserva: await servicioReserva.buscandoReserva(id)
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the found ma bro" + errorPeticion
        })
      }
    }
  
    async buscandoTodasReservas(peticion, respuesta) {
       const reservas = new ServicioReserva() 
       
      try {
        respuesta.status(200).json({
          reservas:await reservas.buscarTodasReserva()
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the found ma bro" + errorPeticion
        })
      }
    }
  
    async editandoReservas(peticion, respuesta) {
      const id = peticion.params.idreserva
      const datos = peticion.body
      const reservas = new ServicioReserva()
      
      try {
        awaitreservas.editarHabitacion(id, datos)
        respuesta.status(200).json({
          mensaje: "Editado correctamente"
        })
      } catch (errorPeticion) {
        respuesta.status(400).json({
          mensaje: "Error in the modified ma bro" + errorPeticion
        })
      }
    }

    eliminarReservas(peticion, respuesta) {
      const id = respuesta.params.idreserva
      const reservas = new ServicioHabitacion()
        try {
          reservas.borraReserva(id)
          respuesta.status(200).json({
            mensaje: "Reservacion eliminada"
          })
        } catch (errorPeticion) {
          respuesta.status(400).json({
            mensaje: "Error in the eliminated ma bro" + errorPeticion
          })
        }
      }
    }