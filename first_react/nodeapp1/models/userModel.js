import mongoose from "mongoose";
const userModel=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    number:{type:String},
    password:{type:String},
    cpass:{type:String}
})
export default mongoose.model("usertable",userModel)