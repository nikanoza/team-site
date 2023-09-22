import { Quotes } from "../svg";

type PropsType = {
  name: string;
  image: string;
  position: string;
  quotes: string;
};

const Card: React.FC<PropsType> = ({ name, image, position, quotes }) => {
  return (
    <div className="w-full flex flex-col items-center px-6">
      <Quotes />
      <p className="text-white text-[15px] leading-8 font-bold text-center -mt-5">
        {quotes}
      </p>
      <h3 className="text-lg text-light-green font-bold mt-4">{name}</h3>
      <h4 className="text-xs text-white font-medium italic">{position}</h4>
      <img
        src={image}
        alt=""
        className="mt-4 w-[62px] h-[62px] rounded-full border-2 border-solid border-light"
      />
    </div>
  );
};

export default Card;
