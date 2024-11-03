import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

// ایجاد یک hook سفارشی برای دسترسی آسان‌تر به context
export const useFavorites = () => useContext(FavoritesContext);

// کامپوننت ارائه‌دهنده context
export function FavoritesProvider({ children }) {
  // بازیابی موارد علاقه‌مندی از localStorage در زمان بارگذاری کامپوننت
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // هر بار که favorites تغییر می‌کند، آن را در localStorage ذخیره کن
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // افزودن recipe به favorites
  const addFavorite = (recipe) => {
    setFavorites((prev) => [...prev, recipe]);
  };

  // حذف recipe از favorites
  const removeFavorite = (recipeId) => {
    setFavorites((prev) => prev.filter((item) => item.uri !== recipeId));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
