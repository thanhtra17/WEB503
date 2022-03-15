
import mongoose from "mongoose";
const Post = mongoose.model('Post', { name: String, desc: String });

// danh sách bài viết
export const listPost = (req, res)=>{
    
    res.json(post);
}
//chi tiết bài viết
export const readPost = (req, res)=>{
    res.json(post.find(item => item.id === +req.params.id));
}
// thêm bài viết
export const creatPost = async (req, res)=>{
    try{
        const post = await new Post(req.body).save()
        res.json(post);
    }
    catch(error){
        res.status(400).json({
            message:"không thêm được bài viết"
        })
    }
   
}

// xóa bài viết
export const removePost = (req, res) => {
    res.json(post.filter(item => item.id !== +req.params.id));
}

// sửa bài viết
export const updatePost = (req, res) => {
    res.json(post.map(item => item.id == req.params.id ? req.body : item));
} 