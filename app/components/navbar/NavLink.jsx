import { useContext } from "react";
import { NavContext } from "./NavBar";

function NavLink({ donde, children }) {
  const { setIsActive } = useContext(NavContext);

  return (
    <li>
      <a href={donde} onClick={() => setIsActive(false)}>
        {children}
      </a>
    </li>
  );
}

export default NavLink;