import { useRef, useState } from "react";
import styled from "styled-components";

import { Backdrop } from "../atoms/modal";
import UploadApis from "../../apis/upload";
import PostApis from "../../apis/post";

const ModalNewPost = ({ onClose }) => {
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const inputFile = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFiles((prev) => [...prev, file]);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviews((prev) => [...prev, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (files.length === 0) return;

    const promises = files.map((file) => {
      return UploadApis.uploadImage(file);
    });
    const images = await Promise.all(promises);

    await PostApis.createPost({ content, images });
    onClose();
  };

  return (
    <>
      <Backdrop
        onClick={({ currentTarget, target }) => {
          if (currentTarget === target) onClose();
        }}
      >
        <Container>
          <Header>
            새 게시물 만들기
            <BtnSubmit onClick={handleSubmit}>게시</BtnSubmit>
          </Header>
          <Body>
            <Guide>사진과 동영상을 여기에 끌어다 넣으세요</Guide>
            <BtnUpload onClick={() => inputFile.current.click()}>
              컴퓨터에서 선택
            </BtnUpload>
            <InputFile
              ref={inputFile}
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />

            {previews.map((file) => (
              <ImgPreview src={file} />
            ))}

            <Textarea rows="6" onChange={(e) => setContent(e.target.value)} />
          </Body>
        </Container>
      </Backdrop>
    </>
  );
};

const Container = styled.div`
  max-width: 700px;
  width: 70%;
  height: 70%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const Header = styled.div`
  height: 42px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
`;
const BtnSubmit = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 0;
  padding: 20px;
`;
const Guide = styled.span`
  font-size: 24px;
`;
const BtnUpload = styled.button`
  color: #fff;
  background: #0095f6;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 5px 8px;
  font-weight: bold;
  font-size: 15px;
`;

const InputFile = styled.input`
  display: none;
`;

const ImgPreview = styled.img`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin: 20px;
  box-sizing: border-box;
`;

export default ModalNewPost;
