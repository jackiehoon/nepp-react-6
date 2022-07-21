import styled from "styled-components";

const Accordion = ({ data }) => {
  return (
    <List>
      {data.map(({ id, title, content }) => (
        <Item key={id}>
          <Header>{title}</Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const Item = styled.div`
  & + & {
    border-top: 1px solid #ddd;
  }
`;
const Header = styled.div`
  padding: 10px;
`;
const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
`;

export default Accordion;
