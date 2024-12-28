import { NavLink, useLocation } from "react-router";
import { NavItem } from "./nav-items";

interface HeaderNavProps {
  navItem: NavItem;
}

const HeaderNav = ({ navItem }: HeaderNavProps) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={navItem.path}
      className={`${pathname === navItem.path ? "after:w-full pointer-events-none" : "hover:after:w-full"} relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300`}
    >
      {navItem.title}
    </NavLink>
  );
};

export default HeaderNav;
