import React, { useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "../Components/ui/sidebar";

import { AppSidebar } from "../Components/app-sidebar";
import { SidebarInset } from "../Components/ui/sidebar";
import Navbar from "../Components/Navbar";

import { fetchRecipes } from "../utils";

import { useFavorites } from "../Context/FavoritesProvider";
import Loading from "../Components/Loading";
import CategoryPage from "../Components/CategoryPage";
import { Separator } from "../Components/ui/separator";
import SearchBar from "../Components/SearchBar";
import { BiSearchAlt2 } from "react-icons/bi";
import { data } from "../utils/data";
function RecipesCategory() {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isApplied, setIsApplied] = useState(false);

  const [selectedDishCategory, setSelectedDishCategory] = useState(null);
  const [selectedTimeCategory, setSelectedTimeCategory] = useState(null);
  const [selectedMealCategory, setSelectedMealCategory] = useState(null);
  const [selectedCuisineCategory, setSelectedCuisineCategory] = useState(null);
  const [selectedDietCategory, setSelectedDietCategory] = useState(null);
  const [selectedHealthCategory, setSelectedHealthCategory] = useState(null);
  const [selectedCaloriesCategory, setSelectedCaloriesCategory] =
    useState(null);
  const [selectedIngredientCategory, setSelectedIngredientCategory] =
    useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextUrl, setNextUrl] = useState(null); // ذخیره لینک صفحه بعدی
  const [totalResults, setTotalResults] = useState(0);
  const [selectedFiltersCategory, setSelectedFiltersCategory] = useState([]);

  const { favorites } = useFavorites();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchedRecipe = async (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  const handleClearFilter = (filterKey) => {
    setFilteredRecipes((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[filterKey];
      return updatedFilters;
    });
  };
  const handleNextPage = () => {
    if (nextUrl) {
      setCurrentPage(currentPage + 1);
      fetchRecipe();
    }
  };

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const data = await fetchRecipes({ query, limit, nextUrl });
      // console.log(data);
      setRecipes(data.recipes);
      setFilteredRecipes(data.recipes);
      setNextUrl(data.nextUrl); // به‌روزرسانی لینک صفحه بعدی
      setTotalResults(data.count || 0);
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
    setCategories(data.navMain);
  }, []);

  useEffect(() => {
    let filtered = recipes;

    if (selectedDishCategory) {
      filtered = filtered.filter(
        (recipe) => recipe.recipe.dishType.toString() === selectedDishCategory
      );
    }

    if (selectedCuisineCategory) {
      filtered = filtered.filter(
        (recipe) =>
          recipe.recipe.cuisineType.toString() === selectedCuisineCategory
      );
    }

    if (selectedTimeCategory) {
      const { min, max } = selectedTimeCategory;

      filtered = filtered.filter((recipe) => {
        const totalTime = parseInt(recipe.recipe.totalTime, 10);
        return totalTime >= min && totalTime <= max;
      });
    }
    if (selectedIngredientCategory) {
      const { min, max } = selectedIngredientCategory;

      filtered = filtered.filter((recipe) => {
        const totalTime = parseInt(recipe.recipe.ingredients.length, 10);
        return totalTime >= min && totalTime <= max;
      });
    }

    if (selectedMealCategory) {
      filtered = filtered.filter(
        (recipe) => recipe.recipe.mealType.toString() === selectedMealCategory
      );
    }

    if (selectedCaloriesCategory) {
      const { min, max } = selectedCaloriesCategory; // استفاده از {min, max}

      filtered = filtered.filter((recipe) => {
        const totalCalory = parseInt(recipe.recipe.calories, 10);
        return totalCalory >= min && totalCalory <= max;
      });
    }

    if (selectedDietCategory) {
      filtered = filtered.filter((recipe) =>
        recipe.recipe.dietLabels.some((label) => label === selectedDietCategory)
      );
    }

    if (selectedHealthCategory) {
      filtered = filtered.filter((recipe) =>
        recipe.recipe.healthLabels.some(
          (label) => label === selectedHealthCategory
        )
      );
    }
    if (
      !selectedDishCategory &&
      !selectedCuisineCategory &&
      !selectedTimeCategory &&
      !selectedMealCategory &&
      !selectedCaloriesCategory &&
      !selectedDietCategory &&
      !selectedHealthCategory &&
      !selectedIngredientCategory
    ) {
      filtered = recipes;
    } else setFilteredRecipes(filtered);
  }, [
    selectedDishCategory,
    recipes,
    selectedCuisineCategory,
    selectedTimeCategory,
    selectedMealCategory,
    selectedCaloriesCategory,
    selectedDietCategory,
    selectedHealthCategory,
    selectedIngredientCategory,
  ]);

  const handleSubCategoryClick = (value, title) => {
    const filterKey = `${title}-${value}`;

    if (selectedFiltersCategory.includes(filterKey)) {
      setSelectedFiltersCategory((prevFilters) =>
        prevFilters.filter((filter) => filter !== filterKey)
      );
    } else {
      setSelectedFiltersCategory((prevFilters) => [...prevFilters, filterKey]);
    }

    if (title === "Cuisine") {
      setSelectedCuisineCategory(value);
      console.log("Selected Cuisine Category:", value);
    } else if (title === "Dish") {
      setSelectedDishCategory(value);
      console.log("Selected Dish Category:", value);
    } else if (title === "Cooking Time") {
      const navItem = data.navMain.find((item) => item.title === title);

      if (navItem) {
        const selectedItem = navItem.items.find((item) => item.value === value);
        if (selectedItem) {
          const { min, max } = selectedItem;
          setSelectedTimeCategory({ min, max });
          console.log("Selected Time Category:", { min, max });
        } else {
          console.log("Selected item not found for value:", value);
        }
      }
    } else if (title === "Ingredient") {
      const navItem = data.navMain.find((item) => item.title === title);

      if (navItem) {
        const selectedItem = navItem.items.find((item) => item.value === value);
        if (selectedItem) {
          const { min, max } = selectedItem;
          setSelectedIngredientCategory({ min, max });
          console.log("Selected Ingredient Category:", { min, max });
        } else {
          console.log("Selected item not found for value:", value);
        }
      }
    } else if (title === "Calories") {
      const navItem = data.navMain.find((item) => item.title === title);

      if (navItem) {
        const selectedItem = navItem.items.find((item) => item.value === value);
        if (selectedItem) {
          const { min, max } = selectedItem;
          setSelectedCaloriesCategory({ min, max });
          console.log("Selected Calories Category:", { min, max });
        } else {
          console.log("Selected item not found for value:", value);
        }
      }
    } else if (title === "Diet") {
      setSelectedDietCategory(value);
      console.log("Selected Diet Category:", value);
    } else if (title === "Meal") {
      setSelectedMealCategory(value);
      console.log("Selected Meal Category:", value);
    } else if (title === "Health") {
      setSelectedHealthCategory(value);
      console.log("Selected Health Category:", value);
    } else {
      console.log("Unknown category:", category);
    }
  };
  

  if (loading) {
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Loading />
    </div>;
  }

  return (
    <SidebarProvider>
      <AppSidebar
        data={data}
        onSubCategoryClick={handleSubCategoryClick}
        deleteFilter={handleClearFilter}
        selectedFiltersCategory={selectedFiltersCategory}
      />
      <SidebarInset>
        <Navbar />
        <SidebarTrigger className="-ml-1 px-4" />

        <div className="w-full flex items-center justify-center pt-10 pb-5 px-4 ">
          <form onSubmit={handleSearchedRecipe} className=" w-full lg:w-2/4">
            <SearchBar
              placeholder="eg. Cake, Vegan, Chicken"
              handleInputChange={handleChange}
              rightIcon={<BiSearchAlt2 className="text-gray-600" />}
            />
          </form>
        </div>
        <div className="flex  flex-col gap-4 p-4 ">
          <CategoryPage
            filteredRecipes={filteredRecipes}
            currentPage={currentPage}
            totalPages={Math.ceil(totalResults / limit)}
            onPageChange={handleNextPage}
          />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default RecipesCategory;
