import { Link } from "react-router-dom";
import Close from "../svg/Close";
import NavPattern from "../assets/bg-pattern-about-1-mobile-nav-1.svg";

const MobileMenu: React.FC<{ close: () => void }> = ({ close }) => {
  return (
    <div className="w-screen h-screen fixed bg-black bg-opacity-50 top-0 left-0 flex ">
      <div className="ml-auto w-fit h-full bg-graffiti pt-14 pl-12 flex flex-col">
        <Close onClick={close} />
        <Link
          to="/"
          className="decoration-none text-white text-lg font-semibold mt-10"
        >
          home
        </Link>
        <Link
          to="/about"
          className="decoration-none text-white text-lg font-semibold mt-6"
        >
          about
        </Link>
        <Link
          to="/contact"
          className="decoration-none text-white text-lg font-semibold mt-9 px-8 py-2 rounded-3xl border-2 border-solid border-white w-fit"
        >
          contact us
        </Link>
        <img src={NavPattern} alt="icon" className="mt-auto translate-x-28" />
      </div>
    </div>
  );
};

export default MobileMenu;
