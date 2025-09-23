

// 1. importar las dependencias y modulos necesarios
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { conexionMongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/users.routes.js"
import { loginRouter } from "./src/routes/login.routes.js";
import path from "path";
import { fileURLToPath } from "url";

//2. configurar las dependencias que necesitamos

const app = express();
dotenv.config();
const port = process.env.PORT;
conexionMongo();
const _filename = fileURLToPath(import.meta.url);// identifica el archivo en el que estamos
const _dirname = path.dirname(_filename); // identifica la carpeta en la que estamos


// 3. funcionalidades a agregar 

app.get("/", (req, res) => {
  res.send("el servidor funciona")

});

app.use(cors()); //habilita CORS
app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter)
app.use("/uploads", express.static(path.join(_dirname, "src/uploads")));
app.use("/login",loginRouter);

//4. levantar el servidor
app.listen(port, () => {
  console.log(`El servidor se esta ejecutando en http://localhost:${port}`)
});
