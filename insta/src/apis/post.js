import instance from ".";

const PostApis = {
  getPosts: async () => {
    const result = await instance.get("/posts");
    return result.data;
  },
};

export default PostApis;
