import PatternBanner from "../assets/bg-pattern-home-2.svg";
import Infos from "../components/Infos";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full px-6">
        <h1 className="text-white text-[40px] leading-10 font-bold mt-20 text-center">
          Find the <br />
          best <span className="text-red">talent</span>
        </h1>
        <h3 className="text-white text-[15px] leading-7 font-semibold mt-4 text-center">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </h3>
      </div>
      <img src={PatternBanner} alt="" className="mt-24" />
      <Infos />
    </div>
  );
};

export default Home;
