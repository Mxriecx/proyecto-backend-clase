// importar las dependencias y modulos necesarios:
import {productModel} from "../models/products.model.js";

//definir las acciones que van a realizar - CRUD

// 1. metodo para crear un producto -> Post

export const postProduct = async (request,response) => {
 // aca va la logica de la peticion
   try{
    await productModel.create(request.body);
    return response.status(201).json({"mensaje":"producto creado correctamente"});

   }catch (error) {
    return response.status(400).json({
        "mensaje":"ocurrio un error",
        "error":error.message || error
    })
   }

}

//2. metodo para mostrar todos los productos -> GET 

export const getProduct = async (request,response) => {
  try{
    const allProducts = await productModel.find();

    return response.status(200).json({
      "mensaje":"se encontraron todos los productos",
      "data": allProducts
    })

  }catch (error) {
    return response.status(500).json({
        "mensaje":"ocurrio un error al mostrar productos",
        "error":error.message || error
    })
  }

}

//3. metodo para actualizar  un producto -> PUT

export const putProductById = async(request,response) => {
  try{
  
      const idForUpdate = request.params._id;
      const dataForUpdate = request.body;

      await productModel.findByIdAndUpdate(idForUpdate,dataForUpdate);
      return response.status(200).json({
      "mensaje": "producto actualizado exitosamente"
      });
    

  }catch (error) {
    return response.status(500).json({
        "mensaje":"ocurrio un error al actualizar el producto",
        "error":error.message || error
    })
  }

}

//4. metodo para Eliminar un producto -> DELETE

export const deleteProductById = async(request,response)=>{
     try{
   
      const idForDelete = request.params._id;
      await productModel.findByIdAndDelete(idForDelete);
      return response.status(200).json({
      "mensaje": "producto eliminado exitosamente"})

  }catch (error) {
    return response.status(500).json({
        "mensaje":"ocurrio un error al borrar el producto",
        "error":error.message || error
    })
  
  }
}

