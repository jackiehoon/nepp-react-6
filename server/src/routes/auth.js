import { Router } from "express";
import AuthController from "../controllers/auth.js";

const router = Router();

router.post("/signup", AuthController.postAuthSignup);

export default router;
