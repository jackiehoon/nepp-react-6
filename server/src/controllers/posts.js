import PostService from "../services/posts.js";

const PostController = {
  getPosts: async (req, res) => {
    const posts = await PostService.getPosts();
    res.send(posts);
  },
};

export default PostController;
