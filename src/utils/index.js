import axios from "axios";


export async function fetchRecipes({ query, limit, nextUrl }) {
  // اگر لینک next موجود است، از آن استفاده کن؛ در غیر این صورت لینک اصلی را بساز
  const url = nextUrl || `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&beta=true&from=0&to=${limit}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log("Fetched data:", data);

    // بازگشت داده‌ها و لینک صفحه بعدی
    return {
      recipes: data.hits,
      nextUrl: data._links?.next?.href || null, // لینک صفحه بعدی، اگر موجود بود
      count: data.count,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { recipes: [], nextUrl: null, count: 0 };
  }
}


export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;

  try {
    console.log("Requesting URL:", url);  // اضافه کردن لاگ برای URL درخواست
    const response = await axios.get(url);
    const data = response.data;

    console.log("Response Data:", data);  
    console.log("Recipe Data:", data.recipe); 

    return data.recipe; 
  } catch (error) {
    console.error("Error fetching recipe details:", error); 
    return null; 
  }
}

