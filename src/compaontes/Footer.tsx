import { FaDribbble, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101828] text-white py-10">
      <div className="max-w-8xl flex flex-col md:flex-row items-start justify-evenly mx-auto px-4 md:px-0">
        <div className="space-y-3 mb-8 md:mb-0">
          <h1 className="font-bold">Ed-Circle.</h1>
          <p>
            Top learning experiences that create more<br></br> talent in the
            world.
          </p>
        </div>
        <div className="list-none space-y-3 mb-8 md:mb-0">
          <ul className="text-gray-400">Product</ul>
          <li>Overview</li>
          <li>Features</li>
          <li>Solutions</li>
          <li>Tutorials</li>
          <li>Pricing</li>
        </div>
        <div className="list-none space-y-3 mb-8 md:mb-0">
          <ul className="text-gray-400">Company</ul>
          <li>About us</li>
          <li>Careers</li>
          <div className="flex space-x-2 items-center">
            <li>Press</li>
            <div className="bg-white rounded-full px-1">
              <h1 className="text-black text-sm font-semibold ">New</h1>
            </div>
          </div>
          <li>News</li>
        </div>
        <div className="list-none space-y-3 mb-8 md:mb-0">
          <ul className="text-gray-400">Social</ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Dribbble</li>
        </div>
        <div className="list-none space-y-3 mb-8 md:mb-0">
          <ul className="text-gray-400">Legal</ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Contact</li>
        </div>
      </div>
      <div className="max-w-7xl mx-auto items-center justify-between mt-10 flex flex-col md:flex-row px-4 md:px-0">
        <div className="mb-4 md:mb-0">
          <h1 className="text-gray-400">
            © 2024 Ed-Circle. All rights reserved.
          </h1>
        </div>
        <div className="flex space-x-2 items-center">
          <FaXTwitter size={20} />
          <FaLinkedin size={20} />
          <FaFacebookSquare size={20} />
          <FaGithub size={20} />
          <FaDribbble size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
