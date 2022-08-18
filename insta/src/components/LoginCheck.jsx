import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import isLoginState from "../stores/isLoginState";

const LoginCheck = () => {
  // 로그인 안한상태면 로그인페이지로 쫓아내기
  const isLogin = useRecoilValue(isLoginState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/log-in");
    }
  }, []);

  return <Outlet />;
};

export default LoginCheck;
