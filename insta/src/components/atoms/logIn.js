import styled from "styled-components";

export const Layout = styled.div`
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Main = styled.div`
  width: 350px;
`;
export const Box = styled.div`
  border: 1px solid #dbdbdb;
  background: #fff;
  margin-bottom: 10px;
  text-align: center;
  padding: 20px 0;
`;

export const ImgLogo = styled.img`
  margin: 30px 0;
`;
export const Form = styled.form`
  width: 260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  padding: 8px;
  margin-bottom: 6px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
`;
export const BtnSubmit = styled.button`
  background: #0095f6;
  color: #fff;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 600;
  height: 30px;
  margin-top: 10px;
  cursor: pointer;
`;
export const SignUpWrapper = styled.div`
  font-size: 14px;
  a {
    color: #0095f6;
    font-weight: 600;
    text-decoration: none;
  }
`;
