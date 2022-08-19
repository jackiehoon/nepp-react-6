import instance from ".";

const UploadApis = {
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const result = await instance.post("/upload/image", formData);
    return result.data;
  },
};

export default UploadApis;
