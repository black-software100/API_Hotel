import mongoose from "mongoose";
mongoose.set('strictQuery', false)

export async function establecerConexion(){
    
    try{
        await mongoose.connect("mongodb+srv://juantorres:admin123@cluster0.p6pf2ki.mongodb.net/Hotel")
        console.log("Exito conectandos a BD")
    
    }catch(error){
        console.log("Fallamos en la conexion a bd"+ error)
    }
}