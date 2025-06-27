import express from "express"
import router from "./route/router.js";
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import{port,MONGO_URI} from "./dotenv/envConfig.js"
const app=express();

app.use(bodyParser.json());
app.use(cors())
mongoose.connect(MONGO_URI)

app.use(router)
app.listen(port,()=>{
    console.log("the backend runing in port 3000")
})