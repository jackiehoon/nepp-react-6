import { useRef } from "react";
import styled from "styled-components";
import useDropdown from "../../hooks/useDropdown";

const Dropdown2 = () => {
  const wrapperEl = useRef(null);
  const [show, setShow] = useDropdown(wrapperEl);

  return (
    <Wrapper ref={wrapperEl}>
      <Button onClick={() => setShow(!show)}>Dropdown Button2</Button>

      {show && (
        <List>
          <Item>asdfasdf</Item>
          <Item>ewrwon</Item>
          <Item>Somewerwerg else</Item>
        </List>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const Button = styled.button`
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
  line-height: 24px;
`;
const List = styled.div`
  top: 40px;
  position: absolute;
  width: 200px;
  border-radius: 5px;
  padding: 10px 0;
  border: 1px solid #efefef;
  background: #fff;
`;
const Item = styled.div`
  cursor: pointer;
  padding: 5px 20px;
  :hover {
    background: #ddd;
  }
`;

export default Dropdown2;
