import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import Slider from "./Slider";

const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;
const HeadingContainer = styled.div`

  margin-bottom: 40px;
  
`;
const Title = styled.h1`
  color: #030e12;
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 1px;
  padding-top: 2rem;
  margin: 1rem;
`;
const Desc = styled.h4`
  color: #030e12;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1px;
`;
const SearchBox = styled.div`
  margin-top: 50px;
`;
const SearchInput = styled.input`
  margin: 1rem 0;
  width: 500px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  box-shadow: inset 0px 0px 5px 5px #e2e2e2;
`;
const ItemsContainer = styled.div`
  width: 80%;
  margin: 25px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2rem;
`;
const IndexContainer = styled.div`
  display: flex;
  margin: 2.5rem 0;
`;
const Meal = () => {
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };
  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };
  return (
    <>
      <Main>
        <HeadingContainer>
          <Title>Welcome to KHANZ Kitchen</Title>
          <Desc>Variety is the spice of Life... and we have it..</Desc>
        </HeadingContainer>

        <Slider />
        <SearchBox>
          <SearchInput
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          placeholder = "Recipe Search"/>
        </SearchBox>
        <ItemsContainer>
          {show ? <MealItem data={item} /> : "Not Found"}
        </ItemsContainer>
        <IndexContainer>
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </IndexContainer>
      </Main>
    </>
  );
};
export default Meal;
