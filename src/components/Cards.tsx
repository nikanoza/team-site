import CardsTopPattern from "../assets/bg-pattern-home-4-about-3.svg";

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
    </div>
  );
};

export default Cards;
