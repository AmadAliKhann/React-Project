import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Card = styled.div`
  width: 180px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 5px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;
const MealNames = styled.h3`
  color: #874133;
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.46);
  font-size: 18px;
`;
const MealItem = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <Card
                key={item.idMeal}
                onClick={() => {
                  navigate(`/${item.idMeal}`);
                }}
              >
                <Image src={item.strMealThumb} alt="" />
                <MealNames>{item.strMeal}</MealNames>
              </Card>
            );
          })}
    </>
  );
};
export default MealItem;
