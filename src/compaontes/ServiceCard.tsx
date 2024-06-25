import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  imgSrc: string;
  title: string;
  description: string;
}

const ServiceCard = ({ imgSrc, title, description }: Props) => {
  return (
    <div className="w-full sm:w-[400px] p-8 rounded-lg hover:bg-[#7F56D9] hover:text-white bg-white border-2 space-y-5 transition-colors duration-300">
      <div className="flex items-center space-x-3">
        <div className="bg-gray-200 p-2 rounded-lg">
          <img width={30} src={imgSrc} alt={title} />
        </div>
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      <p>{description}</p>
      <div className="flex items-center space-x-1">
        <button className="font-semibold">Learn More</button>
        <MdKeyboardArrowRight size={25} />
      </div>
    </div>
  );
};

export default ServiceCard;
