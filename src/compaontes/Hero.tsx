import stendent from "../assets/stendent.png";

const Hero = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-around items-center">
        <div className="space-y-5">
          <h1 className="text-6xl  leading-tight font-bold">
            Up Your <span className="text-[#7F56D9]">Skills</span>
            <br></br>To <span className="text-[#7F56D9]">Advance</span> Your
            <br></br>
            <span className="text-[#7F56D9]">Career</span> Path
          </h1>
          <p className="text-gray-600">
            Provides you with the latest online learning system and material
            <br></br>
            that help your knowledge growing
          </p>
          <div className="flex space-x-4">
            <button className="font-semibold border-2 rounded-lg bg-[#7F56D9] text-white py-4 px-6">
              Get Started
            </button>
            <button className="font-semibold rounded-lg bg-[#f9f5ff] text-[#9E77ED] py-4 px-6">
              Get Free Trail
            </button>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img
                width={30}
                src="https://www.svgrepo.com/show/475022/voice-presentation.svg"
              />
              <h1>Public Speaking</h1>
            </div>
            <div className="flex items-center space-x-2">
              <img
                width={30}
                src="https://www.svgrepo.com/show/430178/career-job-management.svg"
              />
              <h1>Career-Oriented</h1>
            </div>
            <div className="flex items-center space-x-2">
              <img
                width={30}
                src="https://www.svgrepo.com/show/286656/bulb-idea.svg"
              />
              <h1>Creative Thinking</h1>
            </div>
          </div>
        </div>
        <div className="border-2 flex justify-center bg-purple-600 overflow-hidden w-[500px] h-[500px] rounded-full ">
          <img src={stendent} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
