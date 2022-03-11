import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import productRoute from '../routes/product.js'
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())

app.use(productRoute);


const PORT = 3001;
app.listen(PORT, () =>{
console.log("start running:")
})