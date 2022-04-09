import { Router } from "express";
import { creatPost, listPost, readPost, removePost, updatePost } from "../controller/posts";
import { creat, list, read, remove, update } from "../controller/products";
import { check } from "../midlewares/checkauth";
// 

const router = Router();
// products
router.get("/products", check,list );

router.get("/products/:id", check, read );

router.post("/products", check, creat);

router.delete("/products/:id", check, remove );

router.patch("/products/:id", check, update )
// posts
router.get('/posts', check, listPost );
router.get('/post/:id',check , readPost);
router.post('/posts',check , creatPost);
router.delete('/post/:id', check , removePost);
router.patch('/post/:id', check , updatePost)


export default router;

 
