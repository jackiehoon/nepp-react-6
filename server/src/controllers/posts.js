import jwt from "jsonwebtoken";

import conn from "../config/database.js";
import PostService from "../services/posts.js";
import { secretKey } from "../config/token.js";

const PostController = {
  getPosts: async (req, res) => {
    const posts = await PostService.getPosts();
    res.send(posts);
  },

  postPost: async (req, res) => {
    const token = req.headers.authorization.split("Bearer ")[1];
    const { content, images } = req.body;
    let userId;
    try {
      const payload = jwt.verify(token, secretKey);
      userId = payload.userId;
    } catch (e) {
      return res.status(401).send("유효하지 않은 토큰입니다.");
    }

    const query = `
      INSERT INTO post(user_id, content)  
      VALUES(${userId}, "${content}");
    `;
    const [newPost] = await conn.query(query);
    const postId = newPost.insertId;

    const promises = images.map((image) => {
      const query = `
        INSERT INTO image(post_id, url)
        VALUES(${postId}, "${image}");
      `;
      return conn.query(query);
    });
    await Promise.all(promises);
    res.send(true);
  },
};

export default PostController;
