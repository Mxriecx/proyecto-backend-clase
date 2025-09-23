
// IMPORTAR LAS DEPENDENCIAS
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";


// CONFIGURAR LAS VARIABLES DE ENTORNO
dotenv.config();
const key = process.env.SECRET_KEY;


// CONFIGURAR EL USO DE JSON WEB TOKEN 

// A. METODO PARA GENERAR UN TOKEN DE SEGURIDAD 
// payload informacion del usuario


export const generateToken = (payload) => {
    return new Promise ((resolve,reject)=>{
        jsonwebtoken.sign(payload , key , {expiresIn:"1h"},(error,token)=>{

            if(error){
                reject (new Error("Hubo un error al generar el jwt",error.message));
            }else{
                resolve(token);
            }

        })
    });
}

//B. METODO PARA VERIFICAR UN JWT
// token : info codificada encriptada

 export const verifyToken = (token)=>{

    return new Promise ((resolve,reject)=>{
        jsonwebtoken.verify (token , key , (error,decoded)=>{
            if(error){
                reject(new Error("hubo un error al verificar el jwt",error.message));
            }else{
                resolve(decoded);
            }
        })
    })

 };