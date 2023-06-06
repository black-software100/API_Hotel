import mongoose from "mongoose"

const Schema = mongoose.Schema;


//construimos el esquema persnalizado la informacion

const Reserva = new Schema({

    idHabitacion:{
        type:String,
        required:true,
    },
    nombre:{
        type:String,
        required:true,
    },

    apellido:{
        type:String,
        required:true,
    },
    
    telefono:{
        type:Number,
        required:true,
    },
    
    fechaInicio:{
        type:Date,
        required:true,
    },

    fechaFinal:{
        type:Date,
        required:true,
    },

    numeroPersona:{
        type:Number,
        required:true,
    },
    costoReserva:{
        type:Number,
        default:0
    }
})

export const modeloReservas = mongoose.model('reserva',Reserva)