import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import sliderItems from "../data";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 80vh;
  display: flex;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 10px 5px #bababa;
  border-right: 100px solid #f17156;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 80%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
 
`;
const Image = styled.img`
  border-radius: 0%;
  width: 50vw;
  height: 80%;
  border-right: 50px solid #79a581;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  right: 50px;

  text-align: left;
  
`;
const Title = styled.h1`
  font-size: 3rem;
  color: #f17156;
  text-shadow: 0px 0px 10px 10px white;
`;
const Desc = styled.p`
  margin: 30px 0px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 3px;
 
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #79a581;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <FaChevronLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Try it</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <FaChevronRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
