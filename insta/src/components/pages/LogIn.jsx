import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import authApis from "../../apis/auth";
import instance from "../../apis";

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
import { useSetRecoilState } from "recoil";
import isLoginState from "../../stores/isLoginState";

const LogIn = () => {
  const setIslogin = useSetRecoilState(isLoginState);
  const navigate = useNavigate();
  const [form, setForm] = useState({ userName: "", password: "" });
  const { userName, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message, token } = await authApis.logIn(form);
    if (!success) return alert(message);

    instance.defaults.headers.common["Authorization"] = "Bearer " + token;
    localStorage.token = token;
    setIslogin(true);
    navigate("/");
  };

  return (
    <Layout>
      <Main>
        <Box>
          <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="userName"
              value={userName}
              onChange={handleChange}
              required
            />
            <Input
              placeholder="비밀번호"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
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
