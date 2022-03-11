import { Router } from "express";

const router = Router();
const check = (req , res ,next) => {
    const status = true;
    if(status){
        next();
    }
    else{
        console.log("không có quyền truy cập")
    }
}
router.get('/api/products', check, (req, res)=>{
    const products = [
        {id:1, name:"product A"},
        {id:2, name:"product B"},
    ]
    res.json(products);
});

router.post('/api/products', check, (req, res)=>{
    console.log(req.body)
    const products = [
        {id:1, name:"product A"},
        {id:2, name:"product B"},
    ]
    product.push(req.body)
    res.json(products);
});

router.delete('/product/:id', check, (req, res) => {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    res.json(products.filter(item => item.id !== +req.params.id));
});

export default router;

 
