import logo from "/vite.svg";

import { RiVideoUploadLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";

export function PageHeader() {
  const [showFullWithSearch, setshowFullWithSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          showFullWithSearch ? "hidden" : "flex"
        }`}
      >
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <form
        className={`md:flex  gap-4 flex-grow justify-center ${
          showFullWithSearch ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-grow max-w-[600px]">
          {showFullWithSearch && (
            <button
              onClick={() => setshowFullWithSearch(false)}
              className="flex-shrink-0"
            >
              <IoMdArrowBack size={30} />
            </button>
          )}
          <input
            type="search"
            placeholder="Search"
            className="py-1 pl-2 rounded-l-full border border-gray-300 text-xl w-full focus:border-blue-400 outline-none"
          />
          <button className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-gray-200 rounded-r-full focus:shadow-outline hover:bg-gray-300">
            <BsSearch size={20} />
          </button>
        </div>
        <button className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-gray-200 rounded-full focus:shadow-outline hover:bg-gray-300">
          <FaMicrophone size={20} />
        </button>
      </form>
      <div
        className={`md:gap-2 flex-shrink-0 ${
          showFullWithSearch ? "hidden" : "flex"
        }`}
      >
        <button
          onClick={() => setshowFullWithSearch(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-300"
        >
          <BsSearch size={20} />
        </button>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-300">
          <FaMicrophone size={20} />
        </button>
        <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
          <RiVideoUploadLine size={25} />
        </button>
        <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
          <IoMdNotificationsOutline size={25} />
        </button>
        <button>
          <MdAccountCircle size={25} />
        </button>
      </div>
    </div>
  );
}
