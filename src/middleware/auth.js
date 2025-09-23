import { verifyToken } from "../config/jwt.js";


 export const auth = (requiredRole) => {

    return async (request, response, next) => {

        // verificar si si se envia un token 

        const token = request.headers["authorization"];
        console.log("cual es el token recibido : " + token);
        
        if (!token){
            return response.status(401).json({
                "mensaje" : "no se pudo validar el codigo, permiso denegado"
            });
        }
         // 2. verificar que el token si sea el permitido por jwt 
         
         const allowedToken = token.split(" ")[1];
         console.log ("token despues de separarlo del bearer: " + allowedToken);

         try{

           const decode = await verifyToken(allowedToken);
           console.log("informacion decodificada del token :" , decode);

           // verificar el role si es de administrador o no

           if (requiredRole === "admin" && decode.admin === false) {

            return response.status(401).json({
                "mensaje" : "acceso no permitido, no eres administrador"
            })

           }

         }catch(error){
            return response.status(401).json({
                "mensaje" : " fallo la autenticacion token no permitido"
            })
         }

         // next indica que debe seguir con el siguiente proceso

        next();

    }

}