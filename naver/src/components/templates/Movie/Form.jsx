import { useState } from "react";
import styled from "styled-components";

import countries from "../../../datas/countries";

const Form = ({ data, onChange }) => {
  const [text, setText] = useState("");

  const handleCountry = (e) => {
    onChange({ name: "country", value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({ name: "query", value: text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <select onChange={handleCountry} value={data.country}>
          <option value="all">전체</option>
          {countries.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <Input onChange={(e) => setText(e.target.value)} value={text} />
        <BtnSearch>검색</BtnSearch>
      </Container>
    </form>
  );
};

const Container = styled.div`
  margin: 20px;
  display: flex;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSearch = styled.button``;

export default Form;
