import { Link } from "react-router-dom";
import Pattern from "../assets/bg-pattern-home-6-about-5.svg";

const ContactCard = () => {
  return (
    <div className="w-full flex flex-col items-center pt-20 bg-red">
      <h2 className="mx-6 text-infos-bg text-[32px] leading-8 font-bold text-center">
        Ready to get started?
      </h2>
      <Link
        to="/contact"
        className="decoration-none text-infos-bg text-lg font-semibold mt-6 px-8 py-2 rounded-3xl border-2 border-solid border-infos-bg w-fit"
      >
        contact us
      </Link>

      <img src={Pattern} alt="" className="mr-auto -mt-9" />
    </div>
  );
};

export default ContactCard;
