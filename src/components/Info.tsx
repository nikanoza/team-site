type PropsType = {
  image: React.ReactNode;
  title: string;
  description: string;
};

const Info: React.FC<PropsType> = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      {image}
      <h3 className="mt-4 text-red text-lg font-bold">{title}</h3>
      <h4 className="text-white text-[15px] leading-6 font-semibold opacity-80">
        {description}
      </h4>
    </div>
  );
};

export default Info;
