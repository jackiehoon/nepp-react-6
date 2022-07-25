import { useState } from "react";
import styled, { css } from "styled-components";

const Accordion = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    const nextIndex = index === i ? -1 : i;
    setIndex(nextIndex);

    // index === i ? setIndex(-1) : setIndex(i)

    // if (index === i) {
    //   setIndex(-1);
    // } else {
    //   setIndex(i);
    // }
  };

  return (
    <List>
      {data.map(({ id, title, content }, i) => (
        <Item key={id} active={index === i}>
          <Header onClick={() => handleClick(i)}>
            {title}
            <BtnArrow />
          </Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 20px;
`;
const Item = styled.div`
  & + & {
    border-top: 1px solid #ddd;
  }

  ${({ active }) =>
    active &&
    css`
      ${Header} {
        color: #0c63e4;
        background: #e7f1ff;
        ${BtnArrow} {
          transform: rotate(-180deg);
        }
      }
      ${Body} {
        display: block;
      }
    `}
`;
const Header = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BtnArrow = styled.button`
  transition: all 0.5s;
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-size: cover;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;
const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  display: none;
`;

export default Accordion;
