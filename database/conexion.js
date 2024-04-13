import mongoose from "mongoose";
mongoose.set('strictQuery', false)

export async function establecerConexion(){
    
    try{
        await mongoose.connect("mongodb+srv://jt158161:murillo29@cluster0.ku05mpa.mongodb.net/build")
        console.log("Exito conectandos a BD")
    
    }catch(error){
        console.log("Fallamos en la conexion a bd"+ error)
    }
}
