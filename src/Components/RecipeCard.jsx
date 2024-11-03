import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { GoClock } from "react-icons/go";
import { HeartIcon } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../Context/FavoritesProvider"; //

function RecipeCard({ recipe }) {
  console.log("Recipe Card Data:", recipe); 
  const {
    image,
    label,
    cuisineType,
    dishType,
    dietLabels,
    mealType,
    uri,
    totalTime,
  } = recipe;

   recipe.uri?.split("#")[1]

   // Access addFavorite and favorites from FavoritesContext
   const { addFavorite, removeFavorite, favorites } = useFavorites();
   const isFavorite = favorites.some((fav) => fav.uri === recipe.uri);
 
   const handleFavoriteClick = () => {
     if (isFavorite) {
       removeFavorite(recipe.uri);
     } else {
       addFavorite(recipe);
     }
   };
  return (
    <div className=" flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-border bg-background shadow-md min-w-56">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img className="object-cover w-full" src={recipe.image} alt={recipe.label} />
        <span className="absolute top-0 left-0 m-2 rounded-lg bg-primary p-2 text-center text-sm font-medium text-foreground">
          {recipe.cuisineType}
        </span>
        <Button
          onClick={handleFavoriteClick}
          className={`absolute top-0 right-0 m-2 p-2 text-center text-sm font-medium ${isFavorite ? "text-red-500" : "text-foreground-400"}`}
        >
          {isFavorite ? <FaHeart /> : <HeartIcon />}
        </Button>
      </div>

      <div className="mt-4 px-5 pb-5 flex flex-col">
        <Link to={`/recipes/${   recipe.uri?.split("#")[1]}`}>
          <h5 className="text-xl tracking-tight text-foreground line-clamp-1">
            {recipe.label}
          </h5>
        </Link>
        <div className="mt-2 mb-5 ">
          <p className="flex items-center ">
            <span className="text-2xl font-bold mr-2">{recipe.totalTime}</span>
            <span className=" flex items-center  justify-center text-sm text-foreground ">
              Min <GoClock />
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between w-full ">
          
          <Button size="sm" className="max-w-24 text-wrap">
            {recipe.dishType}
          </Button>
          <Button size="sm" className="max-w-24 text-wrap">
            {recipe.mealType}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;


