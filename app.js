

// 1. importar las dependencias y modulos necesarios
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { conexionMongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/users.routes.js"


//2. configurar las dependencias que necesitamos

const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo();

// 3. funcionalidades a agregar 

app.get("/", (req, res) => {
  res.send("el servidor funciona")

});

app.use(cors()); //habilita CORS
app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter)

//4. levantar el servidor

app.listen(port, () => {
  console.log(`El servidor se esta ejecutando en http://localhost:${port}`)
});
