import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import mongoose from 'mongoose';
import productRoute from '../routes/product.js'
import categoryRoute from '../routes/category.js'

const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())

// route
app.use("/api",productRoute);
app.use("/api",categoryRoute)

// connect database
mongoose.connect('mongodb://localhost:27017/web503')
    .then(()=> console.log("kết nối database thành công"))
    .catch((error) => console.log(error))
    
// connect
const PORT = 3001;
app.listen(PORT, () =>{
console.log("start running:")
})