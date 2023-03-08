import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

let vId = "";
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const ContentImg = styled.img`
  width: 50%;
  height: 600px;
  border: 2px solid white;
  box-shadow: 0px 0px 10px 10px;
`;
const ContentInfo = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  font-size: 1.5rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
`;
const Title = styled.h1``;
const Name = styled.h2``;
const Category = styled.h2``;
const RecipeDetailsContainer = styled.div`
  width: 70%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Ingredients = styled.div`
  flex-basis: 50%;
  text-align: justify;
`;
const Instructions = styled.div`
  flex-basis: 50%;
  text-align: justify;
`;
const InstructionTitle = styled.h2``;
const InstructionContent = styled.h4``;
const IngredientsTitle = styled.h2``;
const IngredientsContent = styled.h4`
  margin-top: 1.5rem;
  font-weight: bold;
`;
const VideoContainer = styled.div`
  width: 80%;
  margin: 3rem auto;
`;
const Video = styled.iframe`
  height: 515px;
  width: 100%;
`;
const ButtonContainer = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;
const Button = styled.button`
  width: 5%;
  background-color: #030e12;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 1.5rem;
`;
const RecipeInfo = () => {
  const [item, setItem] = useState();
  const { MealId } = useParams();
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/React-Project");
  };
  if (MealId !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }
  if (item) {
    const url = item.strYoutube;
    const str = url.split("=");
    vId = str[str.length - 1];
  }

  return (
    <>
      {!item ? (
        ""
      ) : (
        <>
          <ContentContainer>
            <ContentImg src={item.strMealThumb} alt="" />
            <ContentInfo>
              <Title>{item.strMeal}</Title>
              <Name>{item.strArea} Food</Name>
              <Category>Category {item.strCategory}</Category>
            </ContentInfo>
          </ContentContainer>
          <RecipeDetailsContainer>
            <Ingredients>
              <IngredientsTitle>Ingredients</IngredientsTitle>
              <br />
              <IngredientsContent>
                {item.strIngredient1}:{item.strMeasure1}
              </IngredientsContent>
              <IngredientsContent>
                {item.strIngredient2}:{item.strMeasure2}
              </IngredientsContent>
              <IngredientsContent>
                {item.strIngredient3}:{item.strMeasure3}
              </IngredientsContent>
              <IngredientsContent>
                {item.strIngredient4}:{item.strMeasure4}
              </IngredientsContent>
              <IngredientsContent>
                {item.strIngredient5}:{item.strMeasure5}
              </IngredientsContent>
              <IngredientsContent>
                {item.strIngredient6}:{item.strMeasure6}
              </IngredientsContent>
              <IngredientsContent>
                {item.strIngredient7}:{item.strMeasure7}
              </IngredientsContent>
              <IngredientsContent>
                {item.strIngredient8}:{item.strMeasure8}
              </IngredientsContent>
            </Ingredients>
            <Instructions>
              <InstructionTitle>Instructions</InstructionTitle>
              <br />
              <InstructionContent>{item.strInstructions}</InstructionContent>
            </Instructions>
          </RecipeDetailsContainer>
          <VideoContainer>
            <Video
              src={`https://www.youtube.com/embed/${vId}`}
              title="recipe"
            ></Video>
          </VideoContainer>
          <ButtonContainer>
            <Button onClick={handleBackButton}>Back</Button>
          </ButtonContainer>
        </>
      )}
    </>
  );
};

export default RecipeInfo;
