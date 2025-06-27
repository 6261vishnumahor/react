import express from "express";
import { submited } from "../controller/userController.js";
const router=express.Router();

router.post("/submited",submited)

export default router;