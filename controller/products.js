// import mongoose from "mongoose";
// const Product = mongoose.model('Product', { name: String , desc: String , price: Number });
import product from "../model/product";
// danh sách sản phẩm
export const list = async (req, res)=>{
    try {
        const products = await Product.find().sort({createAt: -1});
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
//chi tiết sản phẩm
export const read = async (req, res)=>{
    const filter = {_id: req.params.id}
    try{
         const Product = await Product.findOne(filter)
         res.json(product)
    } catch(error){
        res.status(400).json({
            message:"lỗi không tìm được sản phẩm"
        })
    }
//     res.json(products.find(item => item.id === +req.params.id));
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
export const remove = async (req, res) => {
    const condition = {_id: req.params.id}
    try{
         const Product = await Product.findOneandDelete(condition)
         res.json({
             message:"Xóa thành công",
             data:product
         })
    } catch(error){
        res.status(400).json({
            message:"lỗi không tìm được sản phẩm"
        })
    }
}

// sửa sản phẩm
export const update = async  (req, res) => {
    const condition = {_id: req.params.id}
    const doc = req.body;
    const option = { new: true};
    try{
        const Product = await Product.findOne(condition,doc,option)
        res.json(product)
   } catch(error){
       res.status(400).json({
           message:"lỗi không tìm được sản phẩm"
       })
   }
} 