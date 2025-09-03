
import mongoose from "mongoose";


//construir la plantilla del modelo

const productSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },

    price:{
        type:Number,
        required:true
    },

    categories:{
        type:String,
        enum :["hamburguesa","pizza","papas"]

    },

    isAvailable :{
        type:Boolean,

    },

    date:{
        type: Date,
        default : date.now
    },


})

export const productModel = mongoose.Model("products",productSchema)

