import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:mt-20 mt-0 mb-20 space-y-10">
      <div className="text-center space-y-2 px-5">
        <h1 className="text-[#7F56D9] font-bold">Our Services</h1>
        <p className="lg:text-4xl text-2xl font-bold">
          Fostering a playful and engaging learning
          <br className="hidden md:block" /> environment
        </p>
      </div>
      <div className="mx-auto max-w-7xl lg:px-0 px-5">
        <Slider {...settings}>
          <ServiceCard
            imgSrc="https://www.svgrepo.com/show/532363/user-alt-1.svg"
            title="User Experience"
            description="Lessons on design that cover most the recent developments"
          />
          <ServiceCard
            imgSrc="https://www.svgrepo.com/show/521261/web.svg"
            title="Web Development"
            description="Comprehensive guides on modern web development practices"
          />
          <ServiceCard
            imgSrc="https://www.svgrepo.com/show/486800/project-new.svg"
            title="Project Management"
            description="Effective strategies for managing projects successfully"
          />
          <ServiceCard
            imgSrc="https://www.svgrepo.com/show/487466/idea.svg"
            title="Creative Thinking"
            description="Stimulate creativity with innovative thinking techniques"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Services;
