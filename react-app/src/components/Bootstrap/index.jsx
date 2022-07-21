import styled from "styled-components";

import Accordion from "./Accordion";
import accordionData from "../../datas/accordion";

const Bootstrap = () => {
  return (
    <Layout>
      <Accordion data={accordionData} />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;

export default Bootstrap;
