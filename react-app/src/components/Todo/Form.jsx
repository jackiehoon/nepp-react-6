import { useState } from "react";
import styled from "styled-components";

const Form = ({ onAdd }) => {
  // 입력관리
  const [text, setText] = useState("");

  const handleClick = () => {
    onAdd(text);
    setText("");
  };

  return (
    <InputWrapper>
      <Input onChange={(e) => setText(e.target.value)} value={text} />
      <BtnSubmit onClick={handleClick}>+</BtnSubmit>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  height: 40px;
`;
const Input = styled.input`
  flex: 1;
  background: #000;
  color: #fff;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px;
`;
const BtnSubmit = styled.button`
  border: none;
  color: #fff;
  font-size: 24px;
  width: 40px;
  background: #868e96;
  cursor: pointer;
`;

export default Form;
