
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { error } from "console";

// desarrollo funcionalidades 

const _filename = fileURLToPath(import.meta.url);// identifica el archivo en el que estamos
const _dirname = path.dirname(_filename); // identifica la carpeta en la que estamos


// crear una carpeta donde se guardan los archivos subidos

const UPLOADS_FOLDER = path.join(_dirname, "../uploads");

// sino existe mi carpeta uploads CREELA! EL SIGNO DE EXCLAMACION HACIA ABAJO NIEGA.

if (!fs.existsSync(UPLOADS_FOLDER)) {
    fs.mkdirSync(UPLOADS_FOLDER)
}

//especificar como vamos a guardar los archivos

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // donde vamos a guardar el archivo
        cb(null, UPLOADS_FOLDER);
    },

    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const base = path.basename(file.originalname, ext).replace(/\s+/g, "_");
        cb(null, `${base}-${Date.now()}${ext}`);
    }
})

// que tipo de archivos vamos a recibir

const fileFilter = (req,file,cb)=>{
    const allowed = ["image/gif","image/jpeg","image/png","image/svg+xml","image/webp"]

if (allowed.includes(file.mimetype)){
    cb(null,true)
}else {
    cb(new error("archivo no permitido"),false)
}}

// definir limites (tamanos archivos)

const  limits = {
    fileSize: 5*1024*1024 // 5mb
}

// exportar esas caracteristicas 

export const  upload = multer({storage,fileFilter,limits});