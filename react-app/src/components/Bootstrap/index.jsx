import { useState } from "react";
import styled from "styled-components";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Carousel1 from "./Carousel1";

import { data1, data2 } from "../../datas/accordion";
import images from "../../datas/images";

const Bootstrap = () => {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <button onClick={() => setShow(!show)}>버튼</button>
      <Accordion data={data1} />
      <Accordion data={data2} />
      {show && <Dropdown />}
      <Dropdown2 />
      <Carousel1 data={images} />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
