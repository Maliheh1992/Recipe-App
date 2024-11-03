import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";
import { Button } from "./ui/button";
import { useSearchParams } from "react-router-dom";
import { useFavorites } from "../Context/FavoritesProvider";  // Import useFavorites

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(50);
  const [loading, setLoading] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const { favorites } = useFavorites(); // Access favorites from context

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchedRecipe = async (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    fetchRecipe();
  };

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const data = await fetchRecipes({ query, limit });
      setRecipes(data);
      setFilteredRecipes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  useEffect(() => {
    const filter = searchParams.get("filter");
    if (filter) {
      applyFilter(filter);
    }
  }, [searchParams]);

  if (loading) {
    return <Loading />;
  }

  const applyFilter = (type) => {
    setSearchParams({ filter: type });
    if (type === "all") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((recipe) =>
        recipe.recipe.mealType.includes(type)
      );
      setFilteredRecipes(filtered);
    }
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col items-center w-full">
        <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 ">
          <form onSubmit={handleSearchedRecipe} className=" w-full lg:w-2/4">
            <SearchBar
              placeholder="eg. Cake, Vegan, Chicken"
              handleInputChange={handleChange}
              rightIcon={<BiSearchAlt2 className="text-gray-600" />}
            />
          </form>
        </div>

        <div className=" grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 pt-10 pb-5 px-0 ">
          <Button onClick={() => applyFilter("all")}>All</Button>
          <Button onClick={() => applyFilter("breakfast")}>Breakfast</Button>
          <Button onClick={() => applyFilter("brunch")}>Brunch</Button>
          <Button onClick={() => applyFilter("lunch/dinner")}>
            Lunch/Dinner
          </Button>
          <Button onClick={() => applyFilter("snack")}>Snack</Button>
          <Button onClick={() => applyFilter("teatime")}>Teatime</Button>
        </div>
      </div>

      {filteredRecipes?.length > 0 ? (
        <>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredRecipes.map((item, index) => (
              <RecipeCard recipe={item.recipe} key={index} />
            ))}
          </div>

          <div className="flex items-center justify-center py-10 mt-5 ">
            <Button size="lg" className="font-bold text-2xl" onClick={showMore}>
              Show More
            </Button>
          </div>
        </>
      ) : (
        <div className="text-foreground w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </div>
  );
}

export default Recipes;