import styled from "styled-components";

import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import { data1, data2 } from "../../datas/accordion";
import { useState } from "react";

const Bootstrap = () => {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <button onClick={() => setShow(!show)}>버튼</button>
      <Accordion data={data1} />
      <Accordion data={data2} />
      {show && <Dropdown />}
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
