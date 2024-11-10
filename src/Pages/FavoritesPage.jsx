import React from "react";
import { useFavorites } from "../Context/FavoritesProvider"; // Context
import Navbar from "../Components/Navbar";
import { Button } from "../Components/ui/button";
import { GoClock } from "react-icons/go";
import { Link } from "react-router-dom";
function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();


  return (
    <div className=" w-full">
      <Navbar />
      <h2 className="text-2xl m-4 flex items-center justify-center font-bold">
        Favorites List
      </h2>
      <div className="mx-auto  px-4 md:px-20">
        {favorites.length > 0 ? (
          <div className="mt-10  grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {favorites.map((favorite) => (
              <div
                key={favorite.uri}
                className=" flex w-full max-w-xs flex-col  overflow-hidden rounded-lg border border-border bg-background shadow-md min-w-56"
              >
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                  <img
                    src={favorite.image}
                    alt={favorite.label}
                    className="object-cover w-full"
                  />
                  <span className="absolute top-0 left-0 m-2 rounded-lg bg-primary p-2 text-center text-sm font-medium text-foreground">
                    {favorite.cuisineType}
                  </span>
                </div>
                <div className="mt-4 px-5 pb-5 flex flex-col">
                  <Link to={`/recipes/${favorite.uri.split("#")[1]}`} target="_self" >
                    <h5 className="text-xl tracking-tight text-foreground line-clamp-1">
                      {favorite.label}
                    </h5>
                  </Link>
                  <div className="mt-2 mb-5 ">
                    <p className="flex items-center ">
                      <span className="text-2xl font-bold mr-2">
                        {favorite.totalTime}
                      </span>
                      <span className=" flex items-center  justify-center text-sm text-foreground ">
                        Min <GoClock />
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full ">
                    <Button size="sm" className="max-w-24 text-wrap">
                      {favorite.dishType}
                    </Button>
                    <Button size="sm" className="max-w-24 text-wrap">
                      {favorite.mealType}
                    </Button>
                  </div>
                  <Button
                    onClick={() => removeFavorite(favorite.uri)}
                    className="mt-4 text-red-500"
                  >
                    Remove favorite
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">
            هیچ غذایی به لیست علاقه‌مندی‌ها اضافه نشده است.
          </p>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
