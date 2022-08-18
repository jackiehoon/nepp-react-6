import styled from "styled-components";

import Posts from "../templates/Main/Posts";

const Main = () => {
  return (
    <Container>
      <Left>
        {/* <Shorts /> */}
        <Posts />
      </Left>
      <Right></Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  max-width: 470px;
  flex: 1;
`;
const Right = styled.div`
  background: blue;
  height: 400px;
  width: 320px;
  margin-left: 50px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default Main;
