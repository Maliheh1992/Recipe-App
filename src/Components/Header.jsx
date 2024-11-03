import React from "react";

import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../images";
const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
function Header({image,title,type}) {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-[100vh]">
        <img
          src={image ??  images[Math.floor(Math.random() * images.length)]}
          className="w-full h-full object-cover"
          alt="Recipe"
        />
      </div>
      <div className="absolute w-full h-full 
       top-0 z-8 flex flex-col items-center justify-center 
       pt-40 2xl:pt-20 px-4 ">
        <h1 className="text-background text-4xl md:text-5xl font-bold 
         text-center  bg-[#67676790] px-6 py-4 rounded-lg">{title}</h1>
         
       </div>
    </div>
  );
}

export default Header;