import {userModel} from "../models/users.model.js"


//definir las acciones que van a realizar - CRUD

// 1. metodo para crear un producto -> Post

export const postUser = (request,response) => {
 // aca va la logica de la peticion
    return response.json({"mensaje":"Funciona peticion POST"})

}

//2. metodo para mostrar todos los productos -> GET 

export const getUser = (request,response) => {
    return response.json ({"mensaje":"funciona peticion GET"})
}

//3. metodo para actualizar  un producto -> PUT

export const putUserById = (request,response) => {
    return response.json ({"mensaje":"funciona peticion PUT"})
}

//4. metodo para Eliminar un producto -> DELETE

export const deleteUserById =(request,response)=>{
     return response.json ({"mensaje":"funciona peticion DELETE"})
} 