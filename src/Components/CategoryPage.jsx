import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import { BiSearchAlt2 } from "react-icons/bi";

import { fetchRecipes } from "../utils";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useFavorites } from "../Context/FavoritesProvider";
import { GoClock } from "react-icons/go";
import { HeartIcon } from "lucide-react";
import { FaHeart } from "react-icons/fa";
/// Import useFavorites

function CategoryPage({ filteredRecipes }) {

  const { addFavorite, removeFavorite, favorites } = useFavorites();

  return (
    <div className="w-full">
      {filteredRecipes?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRecipes.map((item, index) => {
                console.log("Recipe Data:", item.recipe); // بررسی داده‌ها
              const isFavorite = favorites.some(
                (fav) => fav.uri === item.recipe.uri
              );

              const handleFavoriteClick = () => {
                if (isFavorite) {
                  removeFavorite(item.recipe.uri);
                } else {
                  addFavorite(item.recipe);
                }
              };

              return (
                <div
                  key={index}
                  className="flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-border bg-background shadow-md min-w-56"
                >
                  <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                    <img
                      className="object-cover w-full"
                      src={item.recipe.image}
                      alt={item.recipe.label}
                    />
                    <span className="absolute top-0 left-0 m-2 rounded-lg bg-primary p-2 text-center text-sm font-medium text-foreground">
                      {item.recipe.cuisineType}
                    </span>
                    <Button
                      onClick={handleFavoriteClick}
                      className={`absolute top-0 right-0 m-2 p-2 text-center text-sm font-medium ${
                        isFavorite ? "text-red-500" : "text-foreground-400"
                      }`}
                    >
                      {isFavorite ? <FaHeart /> : <HeartIcon />}
                    </Button>
                  </div>

                  <div className="mt-4 px-5 pb-5 flex flex-col">
                  <Link
  to={`/recipes/category/${item.recipe.uri?.split("#")[1]}?dietLabels=${encodeURIComponent(JSON.stringify(item.recipe.dietLabels || []))}&healthLabels=${encodeURIComponent(JSON.stringify(item.recipe.healthLabels || []))}`}
>
  <h5 className="text-xl tracking-tight text-foreground line-clamp-1">
    {item.recipe.label}
  </h5>
</Link>
                    <div className="mt-2 mb-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold mr-2">
                            {item.recipe.totalTime}
                          </span>
                          <span className="flex items-center justify-center text-sm text-foreground">
                            Min <GoClock />
                          </span>
                        </div>
                        <div>
                          <span className="text-xl font-bold mr-2">
                            {item.recipe.calories.toFixed(2)}
                          </span>
                          <span className="flex items-center justify-center text-sm text-foreground">
                            Calories <GoClock />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <Button size="sm" className="max-w-24 text-wrap">
                        {item.recipe.dishType}
                      </Button>
                      <Button size="sm" className="max-w-24 text-wrap">
                        {item.recipe.mealType}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center py-10 mt-5">
            <Button size="lg" className="font-bold text-2xl">
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

export default CategoryPage;
