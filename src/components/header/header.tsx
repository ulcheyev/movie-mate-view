import { Separator } from "@/components/ui/separator";
import ThemeToggle from "./theme-toggle";
import AccountMenu from "./account-menu";
import { navItems } from "./nav-items";
import HeaderNav from "./header-nav";

const Header = () => {
  return (
    <header className="sticky top-0 h-12 items-center border-b backdrop-blur bg-background/60 px-80 z-50 flex justify-between">
      <div className="flex items-center space-x-5">
        <div className="bg-primary py-1 px-2 rounded-sm cursor-pointer text-primary-foreground font-bold group hover:bg-primary/70 transition-all duration-300">
          <span>MovieMate</span>
        </div>
        <Separator orientation="vertical" className="h-6 w-[1px]" />
        <nav className="flex items-center space-x-4">
          {navItems.map((item) => (
            <HeaderNav key={item.title} navItem={item} />
          ))}
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <AccountMenu />
      </div>
    </header>
  );
};

export default Header;
