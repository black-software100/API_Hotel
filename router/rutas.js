import express from "express"

import { ControladorHabitaciones } from "../controllers/ControladorHabitacion.js"

import { ControladorReservas } from "../controllers/ControladorReservas.js"

let controladorHabitacion = new ControladorHabitaciones()

let controladorreservation = new ControladorReservas()

//para separar las rutas de la logica de negocio, utilizaré un metodo especial de EXPRESS: express.Router
export let rutas = express.Router()

rutas.post('/registrarhabitacion', controladorHabitacion.registrandoHabitacion)
rutas.get('/buscarhabitaciones', controladorHabitacion.buscandoTodasHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion', controladorHabitacion.buscandoHabitacion)
rutas.put('/actualizarhabitacion/:idhabitacion' , controladorHabitacion.editandoHabitaciones)
rutas.post('/registrarreserva', controladorreservation.registrandoReservas)
rutas.get('/buscarreservas', controladorreservation.buscandoTodasReservas)
rutas.get('/buscarreserva/:idreserva', controladorreservation.buscandoReservas)
rutas.put('/actualizarreserva/:idreserva', controladorreservation.editandoReservas)
rutas.delete('/eliminarreserva/:idrerserva', controladorreservation.eliminarReservas)