import InfosPattern from "../assets/bg-pattern-home-3.svg";

const Infos = () => {
  return (
    <div className="w-full px-6 bg-infos-bg">
      <div className="w-full flex justify-between">
        <div>
          <div className="w-12 h-1 bg-red mt-16"></div>
          <h3 className="mt-8 text-white text-[32px] leading-8 font-bold w-60">
            Build & manage distributed teams like no one else.
          </h3>
        </div>
        <img
          src={InfosPattern}
          alt=""
          className=" translate-x-3 w-[200px] h-[244px]"
        />
      </div>
    </div>
  );
};

export default Infos;
