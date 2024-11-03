import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe, fetchRecipes } from "../utils";
import Loading from "../Components/Loading";
import Header from "../Components/Header";
import { AiFillPushpin } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import RecipeCard from "../Components/RecipeCard";
import { HeartIcon } from "lucide-react";
import { GoDotFill } from "react-icons/go";
import { Button } from "../Components/ui/button";
import { useFavorites } from "../Context/FavoritesProvider";
import { FaHeart } from "react-icons/fa";

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // Access addFavorite and favorites from FavoritesContext
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.uri === recipe?.uri);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(recipe?.uri);
    } else {
      addFavorite(recipe);
    }
  };

  const getRecipe = async (id) => {
    setLoading(true);
    try {
      const data = await fetchRecipe(id);
      setRecipe(data);
      const recommend = await fetchRecipes({ query: recipe?.label, limit: 5 });
      setRecipes(recommend);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className=" lg:grid lg:items-center lg:grid-cols-1 ">
      <div className="w-full  max-w-6xl px-4 mx-auto sm:px-8 2xl:max-w-7xl lg:grid lg:grid-cols-custom lg:items-start gap-9">
        <div className="lg:sticky top-20 lg: rounded-xl overflow-hidden sm:max-w-md lg:w-full lg:mt-8 ">
          <img
            src={recipe?.image}
            alt={recipe?.label}
            className=" w-full h-full object-cover object-center "
            height={300}
            width={300}
          />
        </div>
        {/* Left Side */}
        <div className="my-8 aspect-square border-b-2 border-border">
          <div className="flex justify-between items-start gap-4">
            <h1 className="sm:text-3xl lg:text-5xl text-2xl font-semibold">
              {recipe?.label}
            </h1>
            <Button onClick={handleFavoriteClick}>
              {isFavorite ? <FaHeart /> : <HeartIcon />}
            </Button>
          </div>

          <div className=" text-foreground text-lg  font-medium md:text-xl my-4 ">
            <span className="inline opacity-80">by: </span>
            {recipe?.source}
          </div>

          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center py-4 gap-1 sm:py-5 lg:py-6 lg:gap-2">
              <span className="text-4xl font-semibold">
                {recipe?.ingredients.length}
              </span>

              <span className="capitalize opacity-80">ingredients</span>
            </div>
            <div className="flex flex-col items-center border-x border-border py-4 gap-1 sm:py-5 lg:py-6 lg:gap-2">
              <span className="text-4xl font-semibold">
                {recipe?.totalTime}
              </span>

              <span className="capitalize opacity-80">minutes</span>
            </div>

            <div className="flex flex-col items-center py-4 gap-1 sm:py-5 lg:py-6 lg:gap-2">
              <span className="text-4xl font-semibold">
                {recipe?.calories.toFixed(0)}
              </span>
              <span className="capitalize opacity-80">calories</span>
            </div>
          </div>

          <div className="flex flex-wrap mt-4 mb-8 items-center gap-2 ">
            <Button variant="outline">
              <span>{recipe?.dishType}</span>
            </Button>
            <Button variant="outline">
              <span>{recipe?.mealType}</span>
            </Button>

            <Button variant="outline">
              <span>{recipe?.cuisineType}</span>
            </Button>

            {recipe?.tags && recipe.tags[1] && (
              <Button variant="outline">
                <span>{recipe.tags[1]}</span>
              </Button>
            )}
          </div>

          <h2 className="text-foreground text-xl flex items-center justify-between ">
            Ingredients
            <span className="text-sm opacity-80">
              for {recipe?.yield} serving
            </span>
          </h2>
          <ul className="mt-4 border border-t border-border pt-2 text-xl rounded-lg shadow-md">
            {recipe?.ingredients?.map((ingredient, index) => {
              return (
                <li
                  key={index}
                  className="text-foreground my-2 ml-6 mx-3 sm:mx-4 flex text-base sm:text-lg items-center gap-2"
                >
                  <GoDotFill className="text-foreground" />
                  <span className="flex flex-col">
                    <span>{ingredient.text}</span>
                    <span className="text-sm">
                      quantity: {ingredient.quantity} measure:{" "}
                      {ingredient.measure}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* second */}
      <div className="w-full max-w-6xl px-4 mx-auto sm:px-8 2xl:max-w-7xl lg:grid lg:grid-cols-2 lg:items-start">
        <div className=" sm:max-w-lg lg:w-full lg:mt-8 ">
          <h2 className="text-foreground text-2xl flex items-center justify-between ">
            Health Preference
          </h2>
          <div className="my-4 border border-t border-border p-4 text-xl flex flex-wrap justify-between items-center gap-3 rounded-lg shadow-md">
            {recipe?.healthLabels?.map((healthLabel, index) => {
              return (
                <Button
                  key={index}
                  className="bg-primary/80 hover:bg-primary shadow-[0_4px_10px_-1px_rgba(0,0,0,0.5)]"
                >
                  <span>{healthLabel}</span>
                </Button>
              );
            })}
          </div>
        </div>
        {/* Left Side */}
        <div className="my-8 aspect-square  border-border">
          <h2 className="text-foreground text-xl flex items-center justify-between ">
            Nutrition
          </h2>
          <div className="my-4 border border-t border-border p-4 text-xl flex flex-wrap justify-between items-center  gap-3 rounded-lg shadow-md">
            {Object.entries(recipe?.totalNutrients || {}).map(
              ([key, nutrient]) => {
                return (
                  <Button
                    key={key}
                    className="flex flex-col items-center h-fit bg-primary/80 hover:bg-primary shadow-[0_4px_10px_-1px_rgba(0,0,0,0.5)]"
                  >
                    <span className="font-bold">{nutrient.label}</span>
                    <div className="flex items-center">
                      <span>{nutrient.quantity.toFixed(2)}</span>
                      <span className="ml-1">{nutrient.unit}</span>
                    </div>
                  </Button>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
