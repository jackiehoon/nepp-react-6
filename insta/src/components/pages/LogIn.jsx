import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  Layout,
  Main,
  Box,
  ImgLogo,
  Form,
  Input,
  BtnSubmit,
  SignUpWrapper,
} from "../atoms/logIn";

const LogIn = () => {
  return (
    <Layout>
      <Main>
        <Box>
          <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          <Form>
            <Input placeholder="전화번호, 사용자 이름 또는 이메일" />
            <Input placeholder="비밀번호" type="password" />
            <BtnSubmit>로그인</BtnSubmit>
          </Form>
          <FBLogin>Facebook으로 로그인</FBLogin>
          <PasswordReset>비밀번호를 잊으셨나요?</PasswordReset>
        </Box>
        <Box>
          <SignUpWrapper>
            계정이 없으신가요? <Link to="/sign-up">가입하기</Link>
          </SignUpWrapper>
        </Box>
      </Main>
    </Layout>
  );
};

const FBLogin = styled.div`
  margin: 20px 0;
  color: #385185;
`;
const PasswordReset = styled.div`
  margin: 20px 0;
  font-size: 12px;
`;

export default LogIn;
