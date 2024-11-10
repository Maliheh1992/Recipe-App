import React from "react";
import Header from "../Components/Header";
import Recipes from "../Components/Recipes";
import PaginationPage from "../Components/PaginationPage";

function Home() {
  return (
    <div className="w-full flex flex-col">
      <Header
        title={
          <p>
            Taste the world with
            <br /> Rama Food!
          </p>
        }
        type="home"
      />
      <section id="recipes" className=" mx-auto px-4 md:px-20">
        <Recipes />
      </section>
    </div>
  );
}

export default Home;
