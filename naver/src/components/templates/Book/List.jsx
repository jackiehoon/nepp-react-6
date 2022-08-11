import { Link } from "react-router-dom";
import styled from "styled-components";

const List = ({ data }) => {
  return (
    <Container>
      {data.map(({ image, title, isbn }) => (
        <Link to={isbn} key={isbn}>
          <Item>
            <Thumbnail src={image} />
            <Title>{title}</Title>
          </Item>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.p``;

export default List;
