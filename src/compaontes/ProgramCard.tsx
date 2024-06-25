import { FaRegClock, FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  imgSrc: string;
  category: string;
  title: string;
  description: string;
  rate: string;
  time: string;
  review: string;
  avatar: string;
  name: string;
  enroll: string;
  price: string;
  rating?: number;
}

const ProgramCard = ({
  imgSrc,
  category,
  title,
  description,
  rate,
  time,
  review,
  avatar,
  name,
  enroll,
  price,
  rating = 5,
}: Props) => {
  return (
    <div className="rounded-lg relative space-y-5 p-5 h-[560px] w-full sm:w-[400px] shadow-xl">
      <div>
        <img
          className="rounded-lg object-cover w-full h-[250px]"
          src={imgSrc}
          alt={title}
        />
        <div className="flex absolute top-10 right-10 space-x-2 bg-white rounded-lg p-1 items-center flex-grow-0 flex-shrink-0">
          <FaRegClock />
          <h1>{time}</h1>
        </div>
      </div>

      <h1 className="font-semibold text-[#7F56D9]">{category}</h1>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <MdArrowOutward size={25} />
      </div>
      <p className="text-gray-600">{description}</p>
      <div className="flex text-sm items-center space-x-2">
        <h1 className="text-[#7F56D9]">{rate}</h1>
        <div className="flex items-center space-x-1">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} className="text-yellow-500 text-sm" />
          ))}
        </div>
        <h1 className="text-gray-600">({review})</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            className="w-[40px] h-[40px] object-cover rounded-full"
            src={avatar}
            alt={name}
          />
          <div className="text-sm">
            <h1 className="font-semibold">{name}</h1>
            <h1 className="text-gray-600">{enroll}</h1>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#7F56D9]">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
