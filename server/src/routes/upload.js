import { Router } from "express";
import UploadController from "../controllers/upload.js";
import upload from "../config/s3.js";

const router = Router();

router.post("/image", upload.single("file"), UploadController.postUploadImage);

export default router;
