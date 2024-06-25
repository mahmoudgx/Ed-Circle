import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex lg:justify-around justify-between items-center py-5 px-5 lg:px-10">
      <div>
        <h1 className="font-bold">Ed-Circle.</h1>
      </div>
      <div className="relative  justify-center items-center h-20 hidden lg:flex">
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

      <div className="hidden lg:flex space-x-5">
        <ul className="flex space-x-5">
          <li className="font-semibold cursor-pointer hover:text-[#7F56D9]">
            Program
          </li>
          <li className="font-semibold cursor-pointer hover:text-[#7F56D9]">
            Enterprise
          </li>
          <li className="font-semibold cursor-pointer hover:text-[#7F56D9]">
            Universities
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex space-x-5">
        <button className="font-semibold">Sign in</button>
        <button className="font-semibold border-2 rounded-lg bg-[#7F56D9] text-white px-3 py-2">
          Create free account
        </button>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="text-2xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`lg:hidden z-[90000] absolute top-0 left-0 w-full h-screen bg-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-5">
          <h1 className="font-bold">Ed-Circle.</h1>
          <button onClick={toggleMobileMenu} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <div className="flex justify-center items-center h-20 my-5">
          <input
            className="border-2 rounded-md px-7 py-2 w-full mx-5"
            placeholder="Want to Learn?"
          />
          {/* <div className="absolute flex items-center top-1/2 l left-8 transform -translate-y-1/2">
            <FaSearch className="text-gray-400" />
          </div> */}
        </div>
        <ul className="flex flex-col items-center space-y-5">
          <li className="font-semibold cursor-pointer hover:text-[#7F56D9]">
            Program
          </li>
          <li className="font-semibold cursor-pointer hover:text-[#7F56D9]">
            Enterprise
          </li>
          <li className="font-semibold cursor-pointer hover:text-[#7F56D9]">
            Universities
          </li>
        </ul>
        <div className="flex flex-col items-center space-y-5 mt-10">
          <button className="font-semibold">Sign in</button>
          <button className="font-semibold border-2 rounded-lg bg-[#7F56D9] text-white px-5 py-3">
            Create free account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
