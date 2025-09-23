import express from "express";
import {postUser,getUser,putUserById,deleteUserById} from "../controllers/users.controller.js";
import { auth }  from "../middleware/auth.js"

//2.configurar las rutas:

export const userRouter = express.Router();

//3. ruta para el post 
userRouter.post("/",postUser);

// ruta para el get
userRouter.get("/",auth("admin"),getUser);

//ruta para el put
userRouter.put("/:_id",putUserById);

//ruta para el delete
userRouter.delete("/:_id",deleteUserById);