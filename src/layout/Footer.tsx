import { Link } from "react-router-dom";
import { Facebook, Logo, Pinterest, Twitter } from "../svg";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-dark-green flex flex-col items-center">
      <Logo />
      <ul className="list-none flex items-center mt-6 gap-6">
        <Link
          to="/"
          className="decoration-none text-white text-lg font-semibold w-fit"
        >
          home
        </Link>
        <Link
          to="/about"
          className="decoration-none text-white text-lg font-semibold w-fit"
        >
          about
        </Link>
      </ul>

      <h4 className="text-white text-[15px] font-semibold opacity-60 mt-6">
        987 Hillcrest Lane
      </h4>
      <h4 className="text-white text-[15px] font-semibold opacity-60 mt-2">
        Irvine, CA
      </h4>
      <h4 className="text-white text-[15px] font-semibold opacity-60 mt-2">
        CA California 92714
      </h4>
      <h4 className="text-white text-[15px] font-semibold opacity-60 mt-2">
        Call Us : 949-833-7432
      </h4>

      <ul className="list-none flex items-center mt-6 gap-4">
        <Facebook />
        <Pinterest />
        <Twitter />
      </ul>
      <h4 className="text-white text-[15px] font-semibold opacity-60 mt-4">
        Copyright 2020. All Rights Reserved
      </h4>
    </footer>
  );
};

export default Footer;
