import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as ImgHome } from "../../assets/images/home.svg";
import { ReactComponent as ImgNewPost } from "../../assets/images/new-post.svg";
import ModalNewPost from "./ModalNewPost";

const Header = () => {
  const [showModalNewPost, setShowModalNewPost] = useState(false);

  return (
    <>
      <Container>
        <Main>
          <LogoWrapper>
            <ImgLogo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </LogoWrapper>
          <Search>
            <Input placeholder="검색" />
          </Search>
          <Nav>
            <Icon>
              <ImgHome />
            </Icon>
            <Icon onClick={() => setShowModalNewPost(true)}>
              <ImgNewPost />
            </Icon>
          </Nav>
        </Main>
      </Container>

      <Wrapper>
        <Outlet />
      </Wrapper>

      {showModalNewPost && (
        <ModalNewPost onClose={() => setShowModalNewPost(false)} />
      )}
    </>
  );
};

const Container = styled.header`
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
const Main = styled.div`
  max-width: 975px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  display: flex;
`;

const LogoWrapper = styled.div`
  flex: 1;
`;
const ImgLogo = styled.img`
  width: 103px;
`;

const Search = styled.div`
  flex: 1;
`;
const Input = styled.input`
  width: 100%;
  background: #efefef;
  border-radius: 10px;
  border: none;
  height: 36px;
  padding-left: 20px;
  box-sizing: border-box;
`;
const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled.div`
  cursor: pointer;
  margin: 0 10px;
`;

const Wrapper = styled.div`
  margin-top: 60px;
  background: #fafafa;
  min-height: calc(100vh - 60px);
`;

export default Header;
