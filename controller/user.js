import User from "../model/user";
export const userbyId = async (req, res, next, id) =>{
    try {
        const user = await User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message:"không tìm thấy user"
            })
        }
        res.profile = user;
        next();
    } catch (error) {
        
    }
}