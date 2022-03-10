const http = require('http')
const express = require('express')
const app = express()

// middleware

const check = (req, res, next) =>{
    const status = true;
    if(status){
        console.log("hello");
        next();
    }
    else{
        console.log("không có quyền truy cập")
    }
}
app.get('api/products',check , (req, res)=>{
    const products = [
        {id:1 , name:"product 1"},
        {id:2 , name:"product 2"},
    ];
    res.json(products)
})

// const server = http.createServer((req, res) =>{
// console.log('url', req.url);
//         if(req.url === "/"){
//             res.setHeader('Conten-Type',"text/html")
//             res.write("<html><body><h1>HOME PAGE</h1></body></html>")
//             res.end()
//         }
//         else if(req.url === "/api/products"){
//             const products = [
//                 {id: 1 , name:"product 1" },
//                 {id: 2 , name:"product 2" }
//             ]
//             res.end(JSON.stringify(products))
//         }
//         else{
//             console.log("abcxyz")
//         }
// })

const PORT = 3001;
server.listen(PORT, () =>{
console.log("start running")
})