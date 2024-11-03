import React, { useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import {
  Bot,
  CookingPot,
  Globe,
  HeartPulse,
  Timer,
  Utensils,
  Vegan,
  Weight,
} from "lucide-react";

import { AppSidebar } from "./app-sidebar";
import { SidebarInset } from "./ui/sidebar";
import Navbar from "../Components/Navbar";
import { SidebarCategoryProvider } from "../Context/SideBarCategoryProvider";
import { fetchRecipes } from "../utils";
import { useSearchParams } from "react-router-dom";
import { useFavorites } from "../Context/FavoritesProvider";
import Loading from "./Loading";
import CategoryPage from "./CategoryPage";
import { Separator } from "./ui/separator";
function RecipesCategory() {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("vegan");
  const [limit, setLimit] = useState(50);
  const [loading, setLoading] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
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

  const { favorites } = useFavorites(); // Access favorites from context

  const fetchRecipe = async () => {
    try {
      setLoading(true);
      const data = await fetchRecipes({ query, limit });
      console.log(data);
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

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },

    navMain: [
      {
        title: "Cooking Time",
        url: "#",
        icon: Timer,
        isActive: true,
        items: [
          {
            label: "< 5 minutes",
            url: "#",
            value: 5,
            type: "radio",
          },

          {
            label: "5 - 10  minutes",
            url: "#",
            value: 7.5,
            type: "radio",
          },
          {
            label: "10 - 20 minutes",
            url: "#",
            value: "10-30",
            type: "radio",
          },
          {
            label: "20 - 30 minutes",
            url: "#",
            value: "20-30",
            type: "radio",
          },
          {
            label: "30 - 40 minutes",
            url: "#",
            value: "30-40",
            type: "radio",
          },
          {
            label: "40 - 50 minutes",
            url: "#",
            value: "40-50",
            type: "radio",
          },
          {
            label: "50 - 60 minutes",
            url: "#",
            value: "50-60",
            type: "radio",
          },
          {
            label: " > 1 hours",
            url: "#",
            value: "60+",
            type: "radio",
          },
        ],
      },
      {
        title: "Ingredient",
        url: "#",
        icon: Bot,
        items: [
          {
            label: "< 5 ingredients",
            url: "#",
            value: "5",
            type: "radio",
          },
          {
            label: "5 - 10 ingredients",
            url: "#",
            value: "5-10",
            type: "radio",
          },
          {
            label: "10 - 20 ingredients",
            url: "#",
            value: "10-20",
            type: "radio",
          },
          {
            label: "20 - 30 ingredients",
            url: "#",
            value: "20-30",
            type: "radio",
          },
          {
            label: "30 - 40 ingredients",
            url: "#",
            value: "30+",
            type: "radio",
          },
        ],
      },
      {
        title: "Calories",
        url: "#",
        icon: Weight,
        items: [
          {
            label: "< 50 calories",
            url: "#",
            value: "50",
            type: "radio",
          },

          {
            label: "50 - 100 calories",
            url: "#",
            value: "50-100",
            type: "radio",
          },
          {
            label: "100 - 200 calories",
            url: "#",
            value: "100-200",
            type: "radio",
          },
          {
            label: "200 - 300 calories",
            url: "#",
            value: "200-300",
            type: "radio",
          },
          {
            label: "300 - 400 calories",
            url: "#",
            value: "300-400",
            type: "radio",
          },
          {
            label: "400 - 500 calories",
            url: "#",
            value: "400-500",
            type: "radio",
          },
          {
            label: " > 500 calories",
            url: "#",
            value: "500+",
            type: "radio",
          },
        ],
      },
      {
        title: "Diet",
        url: "#",
        icon: Vegan,
        items: [
          {
            label: "Balanced",
            value: "balanced",
            type: "checkbox",
          },

          {
            label: "High Fiber",
            value: "high-fiber",
            type: "checkbox",
          },

          {
            label: "High Protein",
            value: "high-protein",
            type: "checkbox",
          },

          {
            label: "Low Carb",
            value: "low-carb",
            type: "checkbox",
          },

          {
            label: "Low Fat",
            value: "low-fat",
            type: "checkbox",
          },

          {
            label: "Low Sodium",
            value: "low-sodium",
            type: "checkbox",
          },
        ],
      },
      {
        title: "Health",
        url: "#",
        icon: HeartPulse,
        isActive: true,
        items: [
          {
            label: "Alcohol Cocktail",
            url: "#",
            value: "alcohol-cocktail",
            type: "checkbox",
          },
          {
            label: "Alcohol free",
            url: "#",
            value: "alcohol-free",
            type: "checkbox",
          },
          {
            label: "Celery free",
            url: "#",
            value: "celery-free",
            type: "checkbox",
          },
          {
            label: "Crustacean Free",
            url: "#",
            value: "crustacean-free",
            type: "checkbox",
          },
          {
            label: "Dairy Free",
            url: "#",
            value: "dairy-free",
            type: "checkbox",
          },
          {
            label: "Dash",
            url: "#",
            value: "DASH",
            type: "checkbox",
          },
          {
            label: "Egg free",
            url: "#",
            value: "egg-free",
            type: "checkbox",
          },
          {
            label: "Fish free",
            url: "#",
            value: "fish-free",
            type: "checkbox",
          },
          {
            label: "Fodmap Free",
            url: "#",
            value: "fodmap-free",
            type: "checkbox",
          },
          {
            label: "Gluten Free",
            url: "#",
            value: "gluten-free",
            type: "checkbox",
          },
          {
            label: "Immuno Supportive",
            url: "#",
            value: "immuno-supportive",
            type: "checkbox",
          },
          {
            label: "Keto Friendly",
            url: "#",
            value: "keto-friendly",
            type: "checkbox",
          },
          {
            label: "Kidney Friendly",
            url: "#",
            value: "kidney-friendly",
            type: "checkbox",
          },
          {
            label: "kosher",
            url: "#",
            value: "kosher",
            type: "checkbox",
          },

          {
            label: "Low Fat Abs",
            url: "#",
            value: "low-fat-abs",
            type: "checkbox",
          },

          {
            label: "Low Potassium",
            url: "#",
            value: "low-potassium",
            type: "checkbox",
          },

          {
            label: "Low Sugar",
            url: "#",
            value: "low-sugar",
            type: "checkbox",
          },

          {
            label: "Lupine Free",
            url: "#",
            value: "lupine-free",
            type: "checkbox",
          },
          {
            label: " Mediterranean",
            url: "#",
            value: "Mediterranean",
            type: "checkbox",
          },
          {
            label: " Mollusk Free",
            url: "#",
            value: "mollusk-free",
            type: "checkbox",
          },

          {
            label: " Mustard Free",
            url: "#",
            value: "mustard-free",
            type: "checkbox",
          },
          {
            label: "No Oil added",
            url: "#",
            value: "no-oil-added",
            type: "checkbox",
          },
          {
            label: "Paleo",
            url: "#",
            value: "paleo",
            type: "checkbox",
          },
          {
            label: "Peanut Free",
            url: "#",
            value: "peanut-free",
            type: "checkbox",
          },

          {
            label: "Pescatarian",
            url: "#",
            value: "pescatarian",
            type: "checkbox",
          },

          {
            label: "Pork Free",
            url: "#",
            value: "pork-free",
            type: "checkbox",
          },

          {
            label: "Red Meat Free",
            url: "#",
            value: "red-meat-free",
            type: "checkbox",
          },

          {
            label: "Sesame Free",
            url: "#",
            value: "sesame-free",
            type: "checkbox",
          },

          {
            label: "Shellfish Free",
            url: "#",
            value: "shellfish-free",
            type: "checkbox",
          },

          {
            label: "Soy Free",
            url: "#",
            value: "soy-free",
            type: "checkbox",
          },

          {
            label: "Sugar Conscious",
            url: "#",
            value: "sugar-conscious",
            type: "checkbox",
          },

          {
            label: "Sulfite Free",
            url: "#",
            value: "sulfite-free",
            type: "checkbox",
          },
          {
            label: "Tree Nut Free",
            url: "#",
            value: "tree-nut-free",
            type: "checkbox",
          },
          {
            label: "Vegan",
            url: "#",
            value: "vegan",
            type: "checkbox",
          },
          {
            label: "Vegetarian",
            url: "#",
            value: "vegetarian",
            type: "checkbox",
          },
          {
            label: "Wheat Free",
            url: "#",
            value: "wheat-free",
            type: "checkbox",
          },
        ],
      },
      {
        title: "Meal",
        url: "#",
        icon: Utensils,
        items: [
          {
            label: "Breakfast",
            url: "#",
            value: "breakfast",
            type: "checkbox",
          },

          {
            label: "Dinner",
            url: "#",
            value: "dinner",
            type: "checkbox",
          },
          {
            label: "Lunch",
            url: "#",
            value: "lunch",
            type: "checkbox",
          },
          {
            label: "Snack",
            url: "#",
            value: "snack",
            type: "checkbox",
          },
          {
            label: "Teatime",
            url: "#",
            value: "teatime",
            type: "checkbox",
          },
        ],
      },
      {
        title: "Dish",
        url: "#",
        icon: CookingPot,
        items: [
          {
            label: "Biscuits and cookies",
            value: "biscuits and cookies",
            type: "checkbox",
          },

          {
            label: "Bread",
            value: "bread",
            type: "checkbox",
          },

          {
            label: "Cereals",
            value: "cereals",
            type: "checkbox",
          },

          {
            label: "Condiments and sauces",
            value: "condiments and sauces",
            type: "checkbox",
          },
          {
            label: "Desserts",
            value: "desserts",
            type: "checkbox",
          },

          {
            label: "Drinks",
            value: "drinks",
            type: "checkbox",
          },
          {
            label: "Main course",
            value: "main course",
            type: "checkbox",
          },

          {
            label: "Pancake",
            value: "pancake",
            type: "checkbox",
          },
          {
            label: "Preserve",
            value: "preserve",
            type: "checkbox",
          },

          {
            label: "Salad",
            value: "salad",
            type: "checkbox",
          },
          {
            label: "Sandwich",
            value: "Sandwich",
            type: "checkbox",
          },

          {
            label: "Side Dish",
            value: "side dish",
            type: "checkbox",
          },
          {
            label: "Soup",
            value: "soup",
            type: "checkbox",
          },

          {
            label: "Starter",
            value: "starter",
            type: "checkbox",
          },
          {
            label: "Sweets",
            value: "sweets",
            type: "checkbox",
          },
        ],
      },
      {
        title: "Cuisine",
        url: "#",
        icon: Globe,
        items: [
          {
            label: "American",
            value: "american",
            type: "checkbox",
          },
          {
            label: "Asian",
            value: "asian",
            type: "checkbox",
          },
          {
            label: "British",
            value: "british",
            type: "checkbox",
          },
          {
            label: "Caribbean",
            value: "caribbean",
            type: "checkbox",
          },
          {
            label: "Central Europe",
            value: "central europe",
            type: "checkbox",
          },
          {
            label: "French",
            value: "french",
            type: "checkbox",
          },
          {
            label: "Indian",
            value: "indian",
            type: "checkbox",
          },
          {
            label: "Italian",
            value: "italian",
            type: "checkbox",
          },
          {
            label: "Japanese",
            value: "japanese",
            type: "checkbox",
          },
          {
            label: "Kosher",
            value: "kosher",
            type: "checkbox",
          },
          {
            label: "Mediterranean",
            value: "mediterranean",
            type: "checkbox",
          },

          {
            label: "Mexican",
            value: "mexican",
            type: "checkbox",
          },
          {
            label: "Middle Eastern",
            value: "middle eastern",
            type: "checkbox",
          },
          {
            label: "Nordic",
            value: "nordic",
            type: "checkbox",
          },
          {
            label: "South American",
            value: "south american",
            type: "checkbox",
          },
          {
            label: "South East Asian",
            value: "south east asian",
            type: "checkbox",
          },
        ],
      },
    ],
  };

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
       filtered = filtered.filter(
        (recipe) =>parseInt(recipe.recipe.totalTime, 10) === selectedTimeCategory
      );
    }

    if (selectedMealCategory) {
      filtered = filtered.filter(
        (recipe) => recipe.recipe.mealType.toString() === selectedMealCategory
      );
    }

    if (selectedCaloriesCategory) {
       filtered = filtered.filter(
        (recipe) =>
          recipe.recipe.calories.toString() === selectedCaloriesCategory
      );
    }
    if (
      !selectedDishCategory &&
      !selectedCuisineCategory &&
      !selectedTimeCategory &&
      !selectedMealCategory &&
      !selectedCaloriesCategory
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
  ]);

  const handleSubCategoryClick = (value,title) => {


    if (title === "Cuisine") {
      setSelectedCuisineCategory(value);
      console.log("Selected Cuisine Category:", value);
    }
    
    else if (title === "Dish") {
      setSelectedDishCategory(value);
      console.log("Selected Time Category:", value);
    }
    else if (title === "Cooking Time") {
      setSelectedTimeCategory(value);
      console.log("Selected Time Category:", value);
    } else if (title === "Diet") {
      setSelectedDietCategory(value);
      console.log("Selected Diet Category:", value);
    } 
    
    else if (title === "Meal") {
      setSelectedMealCategory(value);
      console.log("Selected Diet Category:", value);
    } 
    else {
      console.log("Unknown category:", category);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SidebarProvider>
      <AppSidebar data={data} onSubCategoryClick={handleSubCategoryClick} />
      <SidebarInset>
        <Navbar />
        <SidebarTrigger className="-ml-1"  />
        <Separator orientation="vertical" className="mr-2 h-4 bg-red-50" />
       <div className="flex flex-1 flex-col gap-4 p-4">
       <CategoryPage filteredRecipes={filteredRecipes} />
       </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default RecipesCategory;
