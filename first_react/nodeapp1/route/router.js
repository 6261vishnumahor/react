import express from "express";
import { submited,fetchdata } from "../controller/userController.js";
const router=express.Router();

router.post("/submited",submited)
router.get("/fetchdata",fetchdata)

export default router;