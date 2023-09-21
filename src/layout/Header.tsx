import { Hamburger, Logo } from "../svg";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center pt-12 px-6">
      <Logo />
      <Hamburger onClick={() => {}} />
    </header>
  );
};

export default Header;
