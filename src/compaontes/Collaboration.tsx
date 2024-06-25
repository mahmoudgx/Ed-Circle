import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import magicleap from "../assets/magic-leap-logo-vector.svg";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Collaboration = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll("img");

    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="py-10 px-5">
      <div
        className="flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-y-0 lg:space-x-10"
        ref={containerRef}
      >
        <div className="font-semibold text-lg text-center lg:text-left">
          <h1 className="text-[#7F56D9]">250+</h1>
          <h1>Collaboration</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-5 lg:space-x-10 lg:space-y-0">
          <img
            className="filter grayscale hover:filter-none"
            width={120}
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Duolingo_logo_%282019%29.svg"
            alt="Duolingo"
          />
          <img
            className="filter grayscale hover:filter-none"
            width={120}
            src="https://vertodigital.com/wp-content/uploads/2022/10/codecov.svg"
            alt="Codecov"
          />
          <img
            className="filter grayscale hover:filter-none"
            width={120}
            src="https://www.svgrepo.com/show/354497/user-testing.svg"
            alt="UserTesting"
          />
          <img
            className="filter grayscale hover:filter-none"
            width={120}
            src={magicleap}
            alt="Magic Leap"
          />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
