import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.js";
import postRouter from "./routes/posts.js";
import uploadRouter from "./routes/upload.js";

const app = express();

app.use(express.json());
app.use(cors("http://localhost:3000"));

app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/upload", uploadRouter);

export default app;
