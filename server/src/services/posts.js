import conn from "../config/database.js";

const PostService = {
  getPosts: async () => {
    const query = `
        SELECT post.*, user.name,
        JSON_ARRAYAGG(image.url) AS images
        FROM post
        JOIN user ON post.user_id = user.id
        JOIN image ON post.id = image.post_id
        GROUP BY post.id
        ORDER BY post.created_at DESC
        LIMIT 15
    `;
    const [images] = await conn.query(query);
    return images;
  },
};

export default PostService;
