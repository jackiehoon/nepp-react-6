import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";

import LoginCheck from "./components/LoginCheck";

import Header from "./components/organisms/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginCheck />}>
          <Route element={<Header />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Route>

        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
