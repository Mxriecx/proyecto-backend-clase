
import { userModel } from "../models/users.model.js";
import { generateToken } from "../config/jwt.js";
import bcryptjs from "bcryptjs";


export const login = async (request, response) => {
    try {
        const { emaillogin, passwordlogin } = request.body;

        const userFound = await userModel.findOne({
            email: emaillogin
        });

        console.log("usuario encontrado", userFound)

        if (!userFound) {
            return response.status(404).json({
                "mensaje": "usuario no encontrado"
            })
        }

        // validacion 2 : contraseña correcta

        const validPassword = await bcryptjs.compare(passwordlogin,userFound.password);

        if (!validPassword) {
            return response.status(401).json({
                "mensaje" : "Contraseña incorrecta"
            });
            
        }

        // generacion del token 

        const payload = {
            id : userFound._id,
            
        }

        if (userFound.role === "admin"){
            payload.admin = true;

        } else {
            payload.admin = false;
        }
        
        const token = await generateToken(payload);

        console.log("payload",payload);
        console.log("token",token);

        return response.status(200).json({
            "mensaje" : "inicio de sesion exitoso",
            "token" : token
        });

    } catch (error) {

        return response.status(500).json({
            "mensaje": "Error al iniciar sesion",
            "error": error.message || error
        })
    }
}