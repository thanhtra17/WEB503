import mongoose, { Schema , ObjectId } from "mongoose";

 const productSchema = new Schema({
     name:{
         type:String,
         require:true
     },
     price:{
         type:Number,
         required: true,
     },
     category:{
        type: ObjectId,
        ref: "Category"
     }
     
 },{timestamps: true});
 
 export default mongoose.model('Product',productSchema);