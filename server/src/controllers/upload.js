const UploadController = {
  postUploadImage: (req, res) => {
    res.send(req.file.location);
  },
};

export default UploadController;
