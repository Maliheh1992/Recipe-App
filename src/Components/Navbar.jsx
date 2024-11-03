import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(() => {
    setBookmarks(() => {
      const bookmarksStorage = JSON.parse(localStorage.getItem("bookmarks"));
      if (bookmarksStorage === null) {
        return [];
      } else {
        return bookmarksStorage;
      }
    });
  }, []);

  return (
    <header className="w-full sticky z-10 bg-background  h-16 top-0 left-0 md:h-[72px] lg:h-20 border-b border-border shadow-sm ">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20  items-center justify-between ">
        <Link
          to="/"
          className="flex items-center justify-center text-foreground font-semibold text-xl"
        >
          <img
            src={Logo}
            alt="Logo"
            className="hidden md:block w-8 h-8 lg:w-14 lg:h-14"
          />
          Rama <span>Food</span>
        </Link>

        <ul className="hidden md:flex text-foreground gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Explore</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4 font-medium ">
          <div className="hidden md:block ">
            <ModeToggle />
          </div>
          <Button className="hidden md:block "> Log in</Button>
          <Button className="hidden md:block"> Sing up</Button>
        </div>
        <button
          onClick={() => setOpen((open) => !open)}
          className="block md:hidden text-foreground text-xl"
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div
        className={`${
          open ? "flex" : "hidden"
        }  md:hidden bg-background flex-col items-center  w-full px-4 pt-16 pb-10 text-foreground gap-6 text-[14px]`}
      >
        <Link className="font-medium " to="/">
          Home
        </Link>
        <Link className="font-medium" to="/#recipes">
          Recipe
        </Link>
        <Link className="font-medium" to="/">
          Favorites
        </Link>
        <div className="flex items-center gap-4 font-medium">
          <Button> Log in</Button>
          <Button> Sing up</Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
