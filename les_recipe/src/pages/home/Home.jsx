import React, {useState, useEffect} from 'react'
import Header from '../../components/header/Header'
import axios from "axios"
import {HomeStyle} from "./homeStyles.jsx"
import { MainContainer, RecipeCard } from './homeStyles.jsx'
import RecipeCardComp from './RecipeCardComp'
import homeSvg from '../../assets/home.svg';
import { MainContainer, HomeImg, ImgDiv } from './HomeStyle';

const mealTypes=["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]
const APP_ID = "e2a1aee5"
const APP_KEY = `
3c01579d025a012c6ba65565285c9df3`

export default function Home() {
    const [query, setQuery] = useState("apple")
    const [recipes, setRecipes] = useState()
    const [meal, setMeal] = useState(mealTypes[0].toLocaleLowerCase())

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    const getData = async()=>{
        if (query !== ""){
            const result = await axios.get(url)
            console.log(`result: ${result}`)
        if(result.status === 200){
            console.log(result.data.hits)
        }
        } else{
            alert("Please fill form")
        }
    }
    return (
        <div>
            <Header
            setQuery={setQuery} 
            query={query}
            getData={getData} 
            mealTypes={mealTypes}  
            setMeal={setMeal}  
            meal={meal}/>
            {recipes? (<MainContainer>
                {recipes?.map((recipe, index)=>{
                    <RecipeCardComp key={index} recipe={recipe?.recipe} />
                })}
            </MainContainer>): null}
        </div>
    )
}
