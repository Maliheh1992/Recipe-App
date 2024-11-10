import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import AppLayout from "./Pages/AppLayout";
import RecipeDetail from "./Pages/RecipeDetail";
import { ThemeProvider } from "./Context/ThemeProvider";

import { FavoritesProvider } from "./Context/FavoritesProvider";
import FavoritesPage from "./Pages/FavoritesPage";

import RecipeCategoryDetail from "./Components/RecipeCategoryDetail";
import RecipesCategory from "./Pages/RecipesCategory";

function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Routes>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="recipes/:id" element={<RecipeDetail />} />
          </Route>
          <Route path="/recipes" element={<RecipesCategory />} />
          <Route path="recipes/category/:id" element={<RecipeCategoryDetail />} />
        </Routes>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
