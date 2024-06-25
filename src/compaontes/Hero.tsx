import { useEffect, useRef } from "react";
import gsap from "gsap";
import classroom from "../assets/classroom-svgrepo-com.svg";
import loading from "../assets/loading-svgrepo-com.svg";
import teacher from "../assets/teacher-svgrepo-com.svg";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const statsRef1 = useRef<HTMLDivElement | null>(null);
  const statsRef2 = useRef<HTMLDivElement | null>(null);
  const statsRef3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, ease: "bounce.out" }
    ).fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2 },
      "-=0.5"
    );

    // Check if featuresRef.current exists before accessing its children
    if (featuresRef.current) {
      const childrenArray = Array.from(
        featuresRef.current.children
      ) as HTMLElement[];

      tl.fromTo(
        childrenArray,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.2 },
        "-=0.5"
      );
    }

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 },
      "-=0.5"
    ).fromTo(
      [statsRef1.current, statsRef2.current, statsRef3.current],
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, stagger: 0.2 },
      "-=0.5"
    );
  }, []);

  return (
    <div className="mt-5">
      <div className="flex lg:px-0 px-5 flex-col lg:flex-row justify-around items-center">
        <div className="space-y-5 text-center lg:text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold"
            ref={titleRef}
          >
            Up Your <span className="text-[#7F56D9]">Skills</span>
            <br></br>To <span className="text-[#7F56D9]">Advance</span> Your
            <br></br>
            <span className="text-[#7F56D9]">Career</span> Path
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Provides you with the latest online learning system and material
            <br></br>
            that help your knowledge growing
          </p>
          <div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
            ref={buttonRef}
          >
            <button className="font-semibold border-2 rounded-lg bg-[#7F56D9] text-white py-3 px-6">
              Get Started
            </button>
            <button className="font-semibold rounded-lg bg-[#f9f5ff] text-[#9E77ED] py-3 px-6">
              Get Free Trial
            </button>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 justify-center lg:justify-start"
            ref={featuresRef}
          >
            <div className="flex items-center space-x-2">
              <img
                className="w-8 sm:w-10"
                src="https://www.svgrepo.com/show/475022/voice-presentation.svg"
              />
              <h1>Public Speaking</h1>
            </div>
            <div className="flex items-center space-x-2">
              <img
                className="w-8 sm:w-10"
                src="https://www.svgrepo.com/show/430178/career-job-management.svg"
              />
              <h1>Career-Oriented</h1>
            </div>
            <div className="flex items-center space-x-2">
              <img
                className="w-8 sm:w-10"
                src="https://www.svgrepo.com/show/286656/bulb-idea.svg"
              />
              <h1>Creative Thinking</h1>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center mt-8 lg:mt-0">
          <img
            className="rounded-full border-2 bg-purple-500 w-80 h-80 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] object-cover"
            src="https://ed-circle.netlify.app/NEw/Gr1-min.png"
            ref={imageRef}
          />
          <div
            className="absolute lg:top-20 lg:left-0 top-10 left-0 flex items-center space-x-3 sm:space-x-5 bg-white border-2 p-2 sm:p-3 rounded-2xl border-purple-600"
            ref={statsRef1}
          >
            <div className="bg-purple-500 p-1 rounded-lg">
              <img className="w-8 sm:w-10" src={classroom} />
            </div>
            <div>
              <h1 className="font-bold text-xl sm:text-2xl">2k+</h1>
              <h1 className="text-gray-400 text-sm sm:text-base">
                Video Courses
              </h1>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-1/3 sm:left-2/4 flex items-center space-x-3 sm:space-x-5 bg-white border-2 p-2 sm:p-3 rounded-2xl border-purple-600"
            ref={statsRef2}
          >
            <div className="bg-purple-500 p-1 rounded-lg">
              <img className="w-8 sm:w-10" src={teacher} />
            </div>
            <div>
              <h1 className="text-gray-400 text-sm sm:text-base">Tutors</h1>
              <h1 className="font-bold text-xl sm:text-2xl">250+</h1>
            </div>
          </div>
          <div
            className="absolute top-0 right-0 flex flex-col items-center justify-center mx-auto bg-white border-2 p-3 sm:p-4 rounded-2xl border-purple-600"
            ref={statsRef3}
          >
            <div>
              <img className="w-16 sm:w-20" src={loading} />
            </div>
            <h1 className="font-bold mt-3 text-xl sm:text-2xl">5k+</h1>
            <h1 className="text-gray-400 text-sm sm:text-base">
              Online Courses
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
