import express from "express";

import { postProduct,getProduct,putProductById,deleteProductById } from "../controllers/products.controller.js";
import {upload} from "../config/multer.js"

//2.configurar las rutas:

export const productRouter = express.Router();

//3. ruta para el post 
productRouter.post("/crear",upload.single("image"),postProduct);

// ruta para el get
productRouter.get("/mostrar",getProduct);

//ruta para el put
productRouter.put("/actualizar/:_id",putProductById);

//ruta para el delete
productRouter.delete("/eliminar/:_id",deleteProductById);
