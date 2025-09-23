import { userModel } from "../models/users.model.js"
import bcryptjs from "bcryptjs"

//definir las acciones que van a realizar - CRUD

// 1. metodo para crear un producto -> Post

export const postUser = async (request, response) => {
    // aca va la logica de la peticion
    try {
        // deestructuracion se hace para procesar la informacion del usuario antes de guardarla 

        const { name, age, username, password, role , email } = request.body;

        const codedPassword = await bcryptjs.hash(password, 8);

        await userModel.create({
            name,
            age,
            username,
            password: codedPassword,
            role,
            email
        });

        return response.status(201).json({
            "mensaje": "usuario creado correctamente"
        })

    } catch (error) {
        return response.status(500).json({
            "mensaje": "Error al crear el usuario",
            "error": error.message || error

        })

    }

}


//2. metodo para mostrar todos los productos -> GET 

export const getUser = (request, response) => {
    return response.json({ "mensaje": "funciona peticion GET" })
}

//3. metodo para actualizar  un producto -> PUT

export const putUserById = (request, response) => {
    return response.json({ "mensaje": "funciona peticion PUT" })
}

//4. metodo para Eliminar un producto -> DELETE

export const deleteUserById = (request, response) => {
    return response.json({ "mensaje": "funciona peticion DELETE" })
} 