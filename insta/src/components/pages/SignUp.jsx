import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });
  const { userName, password, passwordConfirm, name } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userName < 4) return alert("아이디를 4글자 이상 입력해 주세요");
    if (password !== passwordConfirm) return alert("비밀번호를 확인해 주세요");

    const { success, message } = await authApis.signUp(form);
    if (!success) return alert(message);

    alert("회원가입 성공");
    navigate("/log-in");
  };

  return (
    <Layout>
      <Main>
        <Box>
          <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="사용자 이름"
              name="userName"
              onChange={handleChange}
              value={userName}
              required
            />
            <Input
              placeholder="비밀번호"
              name="password"
              type="password"
              onChange={handleChange}
              value={password}
              required
            />
            <Input
              placeholder="비밀번호 확인"
              name="passwordConfirm"
              type="password"
              onChange={handleChange}
              value={passwordConfirm}
              required
            />
            <Input
              placeholder="성명"
              name="name"
              onChange={handleChange}
              value={name}
              required
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
