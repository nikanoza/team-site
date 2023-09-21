import { useState } from "react";
import { Hamburger, Logo } from "../svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full flex justify-between items-center pt-12 px-6">
      <Logo />
      <Hamburger onClick={() => setShowMenu(true)} />
      {showMenu && <MobileMenu close={() => {}} />}
    </header>
  );
};

export default Header;
