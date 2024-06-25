import Slider from "react-slick";
import TestimonialsCard from "./TestimonialsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-custom.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
    <div className="mt-20 mb-20 space-y-10 bg-[#F9FAFB] px-5">
      <div className="max-w-7xl mx-auto text-center">
        <Slider {...settings}>
          <TestimonialsCard
            logo="https://upload.wikimedia.org/wikipedia/commons/5/5c/Duolingo_logo_%282019%29.svg"
            review="Courses was fantastic! It is master platform For those looking to start a new career, or need a refresher."
            avatar="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Jacob Jones"
            position="Student, National University"
          />
          <TestimonialsCard
            logo="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            review="The hands-on projects were particularly helpful. I feel confident in my skills now."
            avatar="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Sophia Smith"
            position="Software Engineer, Google"
          />
          <TestimonialsCard
            logo="https://vertodigital.com/wp-content/uploads/2022/10/codecov.svg"
            review="I appreciated the in-depth knowledge and real-world applications covered in the courses."
            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Michael Brown"
            position="Product Manager, Apple"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
