//importar las dependencias necesarias
import mongoose from "mongoose";


//crear la funcion de conexion 

export const conexionMongo = async ()=>{

    try{
        await mongoose.connect(process.env.BD_URL,{dbName:"e-commerce"});
        console.log("Conexion exitosa con la base de datos")
    }catch (error) {
        console.log("Error de conexion : ", error);
    }

}