import usertable from "../models/userModel.js";
const submited=(req,res)=>{
    const {name,email ,number,password,cpass}=req.body;
    usertable.create({name,email,number,password,cpass})
    res.end()
}
export {submited}