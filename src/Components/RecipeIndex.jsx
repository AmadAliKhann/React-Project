import styled from "styled-components";

const Container = styled.div`
  
  margin: 0 auto;
`
const IndexButtons = styled.div`
    width: 50px;
  height: 40px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin: 0 5px 0 5px;
  cursor: pointer;
`
const IndexLetters = styled.h3`
    
`


const RecipeIndex = ({ alphaIndex }) => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var num = 0;
  return (
    <>
      {alpha.map((item) => {
        return (
          <Container>
          <IndexButtons key={num++} onClick={() => alphaIndex(item)}>
            <IndexLetters>{item}</IndexLetters>
          </IndexButtons>
          </Container>
        );
      })}
    </>
  );
};

export default RecipeIndex;
