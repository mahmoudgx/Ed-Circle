import magicleap from "../assets/magic-leap-logo-vector.svg";

const Collaboration = () => {
  return (
    <div>
      <div className="flex justify-center items-center space-x-10">
        <div className="font-semibold text-lg">
          <h1 className="text-[#7F56D9]">250+</h1>
          <h1>Collaboration</h1>
        </div>
        <div className="flex items-center space-x-10 ">
          <img
            className="filter grayscale hover:filter-none"
            width={150}
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Duolingo_logo_%282019%29.svg"
          />
          <img
            className="filter grayscale hover:filter-none"
            width={150}
            src="https://vertodigital.com/wp-content/uploads/2022/10/codecov.svg"
          />
          <img
            className="filter grayscale hover:filter-none"
            width={150}
            src="https://www.svgrepo.com/show/354497/user-testing.svg"
          />
          <img
            className="filter grayscale hover:filter-none"
            width={150}
            src={magicleap}
          />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
