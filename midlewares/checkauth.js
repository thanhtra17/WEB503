import expressJWT from 'express-jwt'
export const check = (req , res ,next) => {
    const status = true;
    if(status){
        next();
    }
    else{
        console.log("không có quyền truy cập")
    }
}

    export const requireSignin = expressJWT({
            algorithms:["HS256"],
            secret:"123456",
            requestProperty:"auth"
    });
    export const isAuth = (req, res, next) =>{
        console.log('req.profile',req.profile)
        console.log('req.auth',req.auth)
             const status = req.profile._id == req.auth._id
             if(status){
                 res.status(400).json({
                     message:"bạn không có quyền truy cập"
                 })
             }
             next();
    }
    
