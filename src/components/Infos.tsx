import InfosPattern from "../assets/bg-pattern-home-3.svg";
import { Chart, Cog, Person } from "../svg";
import Info from "./Info";

const infos = [
  {
    image: <Person />,
    title: "Experienced Individuals",
    description:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    image: <Cog />,
    title: "Easy to Implement",
    description:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    image: <Chart />,
    title: "Enhanced Productivity",
    description:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

const Infos = () => {
  return (
    <div className="w-full px-6 bg-infos-bg pb-16">
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
      <ul className="w-full flex flex-col list-none items-center mt-14 gap-12">
        {infos.map((info) => (
          <Info key={info.title} {...info} />
        ))}
      </ul>
    </div>
  );
};

export default Infos;
