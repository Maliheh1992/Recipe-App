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

export const data = {
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
          min: 0,
          max: 5,
          value: "0-5",
          type: "radio",
        },
        {
          label: "5 - 10 minutes",
          url: "#",
          min: 5,
          max: 10,
          value: "5-10",
          type: "radio",
        },
        {
          label: "10 - 20 minutes",
          url: "#",
          min: 10,
          max: 20,
          value: "10-20",
          type: "radio",
        },
        {
          label: "20 - 30 minutes",
          url: "#",
          min: 20,
          max: 30,
          value: "20-30",
          type: "radio",
        },
        {
          label: "30 - 40 minutes",
          url: "#",
          min: 30,
          max: 40,
          value: "30-40",
          type: "radio",
        },
        {
          label: "40 - 50 minutes",
          url: "#",
          min: 40,
          max: 50,
          value: "40-50",
          type: "radio",
        },
        {
          label: "50 - 60 minutes",
          url: "#",
          min: 50,
          max: 60,
          value: "50-60",
          type: "radio",
        },
        {
          label: "> 1 hour",
          url: "#",
          min: 60,
          max: Infinity,
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
          min: 0,
          max: 5,
          value: "0-5",
          type: "radio",
        },
        {
          label: "5 - 10 ingredients",
          url: "#",
          min: 5,
          max: 10,
          value: "5-10",
          type: "radio",
        },
        {
          label: "10 - 20 ingredients",
          url: "#",
          min: 10,
          max: 20,
          value: "10-20",
          type: "radio",
        },
        {
          label: "20 - 30 ingredients",
          url: "#",
          min: 20,
          max: 30,
          value: "20-30",
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
          label: "< 500 calories",
          url: "#",
          min: 0,
          max: 500,
          value: "0-500",
          type: "radio",
        },
        {
          label: "500 - 1000 calories",
          url: "#",
          min: 500,
          max: 1000,
          value: "500-1000",
          type: "radio",
        },
        {
          label: "1500 - 2000 calories",
          url: "#",
          min: 1500,
          max: 2000,
          value: "1500-2000",
          type: "radio",
        },
        {
          label: "2000 - 2500 calories",
          url: "#",
          min: 2000,
          max: 2500,
          value: "2000-2500",
          type: "radio",
        },
        {
          label: "2500 - 3000 calories",
          url: "#",
          min: 2500,
          max: 3000,
          value: "2500-3000",
          type: "radio",
        },
        {
          label: "3000 - 3500 calories",
          url: "#",
          min: 3000,
          max: 3500,
          value: "3000-3500",
          type: "radio",
        },
        {
          label: "3500 - 4000 calories",
          url: "#",
          min: 3500,
          max: 4000,
          value: "3500-4000",
          type: "radio",
        },
        {
          label: "4000 - 4500 calories",
          url: "#",
          min: 4000,
          max: 4500,
          value: "4000-4500",
          type: "radio",
        },
        {
          label: "> 4500 calories",
          url: "#",
          min: 4500,
          max: Infinity,
          value: "4500+",
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
          value: "Balanced",
          type: "checkbox",
        },

        {
          label: "High Fiber",
          value: "High-Fiber",
          type: "checkbox",
        },

        {
          label: "High Protein",
          value: "High-Protein",
          type: "checkbox",
        },

        {
          label: "Low Carb",
          value: "Low-Carb",
          type: "checkbox",
        },

        {
          label: "Low Fat",
          value: "Low-Fat",
          type: "checkbox",
        },

        {
          label: "Low Sodium",
          value: "Low-Sodium",
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
          value: "Alcohol-Cocktail",
          type: "checkbox",
        },
        {
          label: "Alcohol free",
          url: "#",
          value: "Alcohol-Free",
          type: "checkbox",
        },
        {
          label: "Celery free",
          url: "#",
          value: "Celery-Free",
          type: "checkbox",
        },
        {
          label: "Crustacean Free",
          url: "#",
          value: "Crustacean-Free",
          type: "checkbox",
        },
        {
          label: "Dairy Free",
          url: "#",
          value: "Dairy-Free",
          type: "checkbox",
        },
        {
          label: "Dash",
          url: "#",
          value: "Dash",
          type: "checkbox",
        },
        {
          label: "Egg free",
          url: "#",
          value: "Egg-Free",
          type: "checkbox",
        },
        {
          label: "Fish free",
          url: "#",
          value: "Fish-Free",
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
          value: "Kidney-Friendly",
          type: "checkbox",
        },
        {
          label: "Kosher",
          url: "#",
          value: "Kosher",
          type: "checkbox",
        },

        {
          label: "Low Fat Abs",
          url: "#",
          value: "Low-Fat-Abs",
          type: "checkbox",
        },

        {
          label: "Low Potassium",
          url: "#",
          value: "Low Potassium",
          type: "checkbox",
        },

        {
          label: "Low Sugar",
          url: "#",
          value: "Low-Sugar",
          type: "checkbox",
        },

        {
          label: "Lupine Free",
          url: "#",
          value: "Lupine-Free",
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
          value: "Mollusk-Free",
          type: "checkbox",
        },

        {
          label: "Mustard Free",
          url: "#",
          value: "Mustard-Free",
          type: "checkbox",
        },
        {
          label: "No Oil added",
          url: "#",
          value: "No-Oil-added",
          type: "checkbox",
        },
        {
          label: "Paleo",
          url: "#",
          value: "Paleo",
          type: "checkbox",
        },
        {
          label: "Peanut Free",
          url: "#",
          value: "Peanut-Free",
          type: "checkbox",
        },

        {
          label: "Pescatarian",
          url: "#",
          value: "Pescatarian",
          type: "checkbox",
        },

        {
          label: "Pork Free",
          url: "#",
          value: "Pork-Free",
          type: "checkbox",
        },

        {
          label: "Red Meat Free",
          url: "#",
          value: "Red-Meat-Free",
          type: "checkbox",
        },

        {
          label: "Sesame Free",
          url: "#",
          value: "Sesame-Free",
          type: "checkbox",
        },

        {
          label: "Shellfish Free",
          url: "#",
          value: "Shellfish-Free",
          type: "checkbox",
        },

        {
          label: "Soy Free",
          url: "#",
          value: "Soy-Free",
          type: "checkbox",
        },

        {
          label: "Sugar Conscious",
          url: "#",
          value: "Sugar-Conscious",
          type: "checkbox",
        },

        {
          label: "Sulfite Free",
          url: "#",
          value: "Sulfite-Free",
          type: "checkbox",
        },
        {
          label: "Tree Nut Free",
          url: "#",
          value: "Tree-Nut-Free",
          type: "checkbox",
        },
        {
          label: "Vegan",
          url: "#",
          value: "Vegan",
          type: "checkbox",
        },
        {
          label: "Vegetarian",
          url: "#",
          value: "Vegetarian",
          type: "checkbox",
        },
        {
          label: "Wheat Free",
          url: "#",
          value: "Wheat-Free",
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
          value: "Kosher",
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
