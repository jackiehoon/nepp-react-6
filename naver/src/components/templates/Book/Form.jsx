import { useState } from "react";
import styled from "styled-components";

const Form = ({ onChange }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onChange({ name: "query", value: text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Input onChange={(e) => setText(e.target.value)} value={text} />
        <BtnSubmit>검색</BtnSubmit>
      </Container>
    </form>
  );
};

const Container = styled.div`
  padding: 0 20px;
  display: flex;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSubmit = styled.button``;

export default Form;
