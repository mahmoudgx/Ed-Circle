interface Props {
  logo: string;
  review: string;
  avatar: string;
  name: string;
  position: string;
}

const TestimonialsCard = ({ logo, review, avatar, name, position }: Props) => {
  return (
    <div className="space-y-5 py-10 px-5 sm:space-y-10 sm:py-20">
      <img
        className="mx-auto w-[100px] sm:w-[150px]"
        src={logo}
        alt="Company Logo"
      />
      <h1 className="text-xl sm:text-5xl font-semibold">{review}</h1>
      <div className="space-y-2 sm:space-y-3">
        <img
          src={avatar}
          className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] mx-auto object-cover rounded-full"
          alt="User Avatar"
        />
        <h1 className="text-base sm:text-lg font-semibold">{name}</h1>
        <p className="text-sm sm:text-base">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
