import { useSetRecoilState } from "recoil";

import isLoginState from "./stores/isLoginState";
import Router from "./Router";
import instance from "./apis";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  // 로컬스토리지에 있는 토큰이 서버에서 검증이 되면 axios 디폴트 헤더 설정
  const setIsLogin = useSetRecoilState(isLoginState);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const { token } = localStorage;
    if (token) {
      instance.defaults.headers.common["Authorization"] = "Bearer " + token;
      setIsLogin(true);
    }
    setIsChecked(true);
  }, []);

  return isChecked && <Router />;
};

export default App;
