"use client";
import { useState, createContext } from "react";
import NavLink from "./NavLink";
import { IonIcon } from "@ionic/react";
import { pawOutline, closeOutline } from 'ionicons/icons';

export const NavContext = createContext();

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavContext.Provider value={{ isActive, setIsActive }}>
      <nav className="">
        <button className=" md:hidden text-3xl text-blumine-600 dark:text-rope-600 hover:text-blumine-300 dark:hover:text-rope-300"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {isActive ? <IonIcon icon={closeOutline} aria-label="Close Menu"></IonIcon>:<IonIcon icon={pawOutline} aria-label="Open Menu"></IonIcon>}
        </button>
        <ul
          className={`fixed left-0 right-0 top-20 min-h-screen bg-anakiwa-700 md:bg-transparent bg-opacity-50 transform transition-transform duration-500 ${
            isActive ? "translate-x-0" : "-translate-x-full"
          } p-4 space-y-4 text-anakiwa-800 dark:text-rope-600 md:flex md:top-0 md:relative md:min-h-0 md:space-y-0 md:translate-x-0 md:space-x-6 md:p-0 font-semibold text-xl text-center`}
        >
          <NavLink donde="#inicio">Inicio</NavLink>
          <NavLink donde="#about"><p onClick={()=>{document.getElementById("about").click()}}>Sobre mi</p></NavLink>
          <NavLink donde="#servicios">Servicios</NavLink>
        </ul>
      </nav>
    </NavContext.Provider>
  );
}

export default NavBar;
