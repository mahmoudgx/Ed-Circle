import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface Props {
  avatar: string;
  name: string;
  job: string;
  about: string;
  className?: string;
}

const TutorCard = ({ avatar, name, job, about, className = "" }: Props) => {
  return (
    <div
      className={`w-full sm:w-[290px] bg-[#F9FAFB] text-center space-y-5 p-5 rounded-lg ${className}`}
    >
      <div>
        <img
          src={avatar}
          className="w-[70px] h-[70px] object-cover rounded-full mx-auto"
        />
      </div>
      <div>
        <h1 className="font-semibold">{name}</h1>
        <h1 className="text-[#7F56D9]">{job}</h1>
      </div>
      <p dangerouslySetInnerHTML={{ __html: about }}></p>
      <div className="flex justify-center space-x-2">
        <FaXTwitter size={20} />
        <FaLinkedin size={20} />
      </div>
    </div>
  );
};

export default TutorCard;
