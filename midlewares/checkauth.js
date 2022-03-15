export const check = (req , res ,next) => {
    const status = true;
    if(status){
        next();
    }
    else{
        console.log("không có quyền truy cập")
    }
}