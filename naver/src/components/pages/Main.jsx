import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Container>
        <h1>환영합니다</h1>
        <Link to="/movie">
          <BtnLink>영화 검색</BtnLink>
        </Link>
        <Link to="/book">
          <BtnLink>책 검색</BtnLink>
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const BtnLink = styled.button`
  width: 200px;
  height: 80px;
  font-size: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 50px;
`;

export default Main;
