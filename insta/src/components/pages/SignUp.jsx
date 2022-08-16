import { useState } from "react";
import { Link } from "react-router-dom";

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

import authApis from "../../apis/auth";

const SignUp = () => {
  const [form, setForm] = useState({
    user_name: "",
    password: "",
    name: "",
  });
  const { user_name, password, name } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authApis.login(form);
  };

  return (
    <Layout>
      <Main>
        <Box>
          <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="사용자 이름"
              name="user_name"
              onChange={handleChange}
              value={user_name}
            />
            <Input
              placeholder="비밀번호"
              name="password"
              type="password"
              onChange={handleChange}
              value={password}
            />
            <Input
              placeholder="성명"
              name="name"
              onChange={handleChange}
              value={name}
            />
            <BtnSubmit>가입</BtnSubmit>
          </Form>
        </Box>
        <Box>
          <SignUpWrapper>
            계정이 있으신가요? <Link to="/log-in">로그인</Link>
          </SignUpWrapper>
        </Box>
      </Main>
    </Layout>
  );
};

export default SignUp;
