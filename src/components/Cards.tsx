import CardsTopPattern from "../assets/bg-pattern-home-4-about-3.svg";
import CardsBottomPattern from "../assets/bg-pattern-home-5.svg";
import Kady from "../assets/avatar-kady.jpg";
import Arthur from "../assets/avatar-arthur.jpg";
import Aiysha from "../assets/avatar-aiysha.jpg";
import Card from "./Card";

const cards = [
  {
    image: Kady,
    quotes:
      " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    name: "Kady Baker",
    position: "Product Manager at Bookmark",
  },
  {
    image: Aiysha,
    quotes:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    name: "Aiysha Reese",
    position: "Founder of Manage",
  },
  {
    image: Arthur,
    quotes:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    name: "Arthur Clarke",
    position: "Co-founder of MyPhysio",
  },
];

const Cards = () => {
  return (
    <div className="w-full bg-cards-bg">
      <img src={CardsTopPattern} alt="" />
      <div className="w-full flex flex-col items-center px-6">
        <h3 className="text-white text-[32px] leading-8 font-bold text-center mt-10">
          Delivering real results for top companies. Some of our
          <span className="text-light-green">success stories.</span>
        </h3>
      </div>
      <ul className="w-full flex flex-col items-center gap-12 mt-10">
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </ul>
      <img src={CardsBottomPattern} alt="" className="mt-16 ml-auto" />
    </div>
  );
};

export default Cards;
