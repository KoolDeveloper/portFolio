import { useContext } from "react";
import { NavContext } from "./NavBar";

function NavLink({ donde, children }) {
  const { setIsActive } = useContext(NavContext);

  return (
    <li>
      <a href={donde} onClick={() => setIsActive(false)} className="hover:text-blumine-300 dark:hover:text-rope-300">
        {children}
      </a>
    </li>
  );
}

export default NavLink;