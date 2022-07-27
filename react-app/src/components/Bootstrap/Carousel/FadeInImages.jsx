import styled from "styled-components";

const FadeInImages = ({ data, index }) => {
  return (
    <Images>
      {data.map(({ id, image }, i) => (
        <Image key={id} src={image} active={index === i} />
      ))}
    </Images>
  );
};

const Images = styled.div`
  height: 100%;
`;
const Image = styled.img`
  transition: opacity 0.5s;
  opacity: ${({ active }) => !active && 0};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default FadeInImages;
