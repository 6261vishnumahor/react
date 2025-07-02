import usertable from "../models/userModel.js";
const submited=(req,res)=>{
    const {name,email ,number,password,cpass}=req.body;
    usertable.create({name,email,number,password,cpass})
    res.end()
}

const fetchdata=async(req,res)=>{
    const res1=await usertable.find()
    res.json(res1)
}
export {submited,fetchdata}