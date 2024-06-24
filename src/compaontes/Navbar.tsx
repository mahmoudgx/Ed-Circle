import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly py-5 items-center">
      <div>
        <h1 className="font-bold">Ed-Circle.</h1>
      </div>
      <div className="relative flex justify-center items-center h-20">
        <input
          className="border-2 rounded-md px-7 py-2"
          placeholder="Want to Learn?"
        />
        <div className="absolute flex items-center top-1/2 left-2 transform -translate-y-1/2">
          <FaSearch className="text-gray-400" />
        </div>
        <div className="absolute cursor-pointer flex items-center top-1/2 right-3 transform -translate-y-1/2">
          <div className="flex items-center bg-[#f9f5ff] px-2 py-1 rounded-full text-[#9E77ED] space-x-1">
            <h1 className="font-semibold">Explore</h1>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>

      <div>
        <ul className="flex space-x-5">
          <li className="font-semibold">Program</li>
          <li className="font-semibold">Enterprise</li>
          <li className="font-semibold">Universities</li>
        </ul>
      </div>
      <div className="flex space-x-5">
        <button className="font-semibold">Sign in</button>
        <button className="font-semibold border-2 rounded-lg bg-[#7F56D9] text-white px-3 py-2">
          Create free account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
