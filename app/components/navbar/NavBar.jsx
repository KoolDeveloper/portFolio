"use client";
import { useState, createContext } from "react";
import NavLink from "./NavLink";

export const NavContext = createContext();

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <NavContext.Provider value={{ isActive, setIsActive }}>
      <nav class="">
        <button className=" md:hidden"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <ul
          className={`fixed left-0 right-0 min-h-screen bg-tuna-900 bg-opacity-50 transform transition-transform ${
            isActive ? "translate-x-0" : "translate-x-full"
          } p-4 space-y-4 text-gray-400 md:flex md:relative md:min-h-0 md:space-y-0 md:space-x-6 md:p-0`}
        >
          <NavLink donde="#inicio">Inicio</NavLink>
          <NavLink donde="#servicios">Servicios</NavLink>
        </ul>
      </nav>
    </NavContext.Provider>
  );
}

export default NavBar;
