import styled from "styled-components";

const SlideImages = ({ data, index }) => {
  return (
    <Images translateX={index * -600}>
      {data.map(({ id, image }) => (
        <Image key={id} src={image} />
      ))}
    </Images>
  );
};

const Images = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

export default SlideImages;
