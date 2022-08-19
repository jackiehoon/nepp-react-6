import { Router } from "express";
import PostController from "../controllers/posts.js";

const router = Router();

router.get("/", PostController.getPosts);
router.post("/", PostController.postPost);

export default router;
