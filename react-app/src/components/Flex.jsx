import styled from "styled-components";

const Flex = () => {
  return (
    <Parent>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </Parent>
  );
};

const Parent = styled.div`
  background: gray;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 300px;
  height: 100px;
  flex-shrink: 0;
`;
const Box1 = styled(Box)`
  background: red;
`;
const Box2 = styled(Box)`
  background: green;
  height: 200px;
`;
const Box3 = styled(Box)`
  background: yellow;
  height: 50px;
`;
const Box4 = styled(Box)`
  background: orange;
`;

export default Flex;
