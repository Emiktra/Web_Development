import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import RecipeCardComp from "./RecipeCardComp";
import homeSvg from "../../assets/home.svg";
import { MainContainer, HomeImg, ImgDiv } from "./HomeStyle";
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "e2a1aee5";
const APP_KEY = `
3c01579d025a012c6ba65565285c9df3`;
const Home = () => {
  const [query, setQuery] = useState("apple");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      //   console.log("result:", result);
      if (result.status === 200) {
        // console.log(result.data.hits);
        setRecipes(result.data.hits);
      }
    } else {
      alert("Please fill the form");
    }
  };
  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes?.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe?.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};
export default Home;