import { useState } from "react";
import styled from "styled-components";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Carousel from "./Carousel";
import ModalName from "./Modal/ModalName";

import { data1, data2 } from "../../datas/accordion";
import images from "../../datas/images";

const Bootstrap = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("홍길동");

  return (
    <Layout>
      <button onClick={() => setShow(!show)}>버튼</button>
      <Accordion data={data1} />
      <Accordion data={data2} />
      {show && <Dropdown />}
      <Dropdown2 />
      <Carousel data={images} type="fade-in" />
      <Carousel data={images} type="slide" />
      <div>
        {name}
        <button onClick={() => setShowModal(true)}>이름 바꾸기</button>
      </div>
      {showModal && (
        <ModalName
          name={name}
          onClose={() => setShowModal(false)}
          onChange={(val) => setName(val)}
        />
      )}
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
