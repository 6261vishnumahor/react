import dotenv from "dotenv"
dotenv.config()
const port=process.env.PORT
const MONGO_URI=process.env.MONGO_URI
export{port, MONGO_URI}