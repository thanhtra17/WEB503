// const products = [
//     {id:1, name:"product A"},
//     {id:2, name:"product B"},
// ]
import mongoose from "mongoose";
const Product = mongoose.model('Product', { name: String , desc: String , price: Number });

// danh sách sản phẩm
export const list = (req, res)=>{
    
    res.json(products);
}
//chi tiết sản phẩm
export const read = (req, res)=>{
    res.json(products.find(item => item.id === +req.params.id));
}
// thêm sản phẩm
export const creat = async (req, res)=>{
    try{
        const product = await new Product(req.body).save()
        res.json(product);
    }
    catch(error){
        res.status(400).json({
            message:"không thêm được sản phẩm"
        })
    }
   
}

// xóa sản phẩm
export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
}

// sửa sản phẩm
export const update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item));
} 