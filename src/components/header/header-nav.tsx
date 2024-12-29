import { NavLink, useLocation } from "react-router";
import { NavItem } from "./nav-items";
import { cn } from "@/lib/utils";

interface HeaderNavProps {
  navItem: NavItem;
}

const HeaderNav = ({ navItem }: HeaderNavProps) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      to={navItem.path}
      className={cn(
        "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-current after:w-0 after:transition-all after:duration-300",
        {
          "after:w-full pointer-events-none": pathname === navItem.path,
          "hover:after:w-full": pathname !== navItem.path,
        }
      )}
    >
      {navItem.title}
    </NavLink>
  );
};

export default HeaderNav;
