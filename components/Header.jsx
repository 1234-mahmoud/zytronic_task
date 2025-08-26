"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsListColumnsReverse } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  // Single state object for all dropdowns
  const [dropdowns, setDropdowns] = useState({
    pages: false,
    rooms: false,
    services: false,
    blogs: false,
  });

  // Toggle function for dropdowns
  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header className="w-full h-[50px] bg-gray-200 flex justify-between items-center ">
      <div className="w-[200px] h-[60px] relative">
        <Image src="/hotel.png" fill alt="Logo" />
      </div>

      <div className="flex gap-[20px]">
        <Link href="/">Home</Link>

        {/* Pages Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("pages")}
            className="flex items-center gap-[10px]"
          >
            Pages
            <span
              className={`text-xl transition-all duration-500 ${
                dropdowns.pages ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDropupCircle />
            </span>
          </button>
          <div
            className={`z-30 flex flex-col justify-center items-center overflow-hidden transition-all duration-500 absolute ${
              dropdowns.pages ? "h-[200px]" : "h-0"
            }`}
          >
            {["Page1", "Page2", "Page3", "Page4", "Page5"].map((page) => (
              <Link key={page} href="/">
                {page}
              </Link>
            ))}
          </div>
        </div>

        {/* Rooms Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("rooms")}
            className="flex items-center gap-[10px]"
          >
            Rooms
            <span
              className={`text-xl transition-all duration-500 ${
                dropdowns.rooms ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDropupCircle />
            </span>
          </button>
          <div
            className={`z-30 flex flex-col justify-center items-center overflow-hidden transition-all duration-500 absolute ${
              dropdowns.rooms ? "h-[200px]" : "h-0"
            }`}
          >
            {["Room1", "Room2", "Room3", "Room4", "Room5"].map((room) => (
              <Link key={room} href="/">
                {room}
              </Link>
            ))}
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("services")}
            className="flex items-center gap-[10px]"
          >
            Services
            <span
              className={`text-xl transition-all duration-500 ${
                dropdowns.services ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDropupCircle />
            </span>
          </button>
          <div
            className={`z-30 flex flex-col justify-center items-center overflow-hidden transition-all duration-500 absolute ${
              dropdowns.services ? "h-[200px]" : "h-0"
            }`}
          >
            {["Service1", "Service2", "Service3", "Service4", "Service5"].map(
              (service) => (
                <Link key={service} href="/">
                  {service}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Blogs Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("blogs")}
            className="flex items-center gap-[10px]"
          >
            Blogs
            <span
              className={`text-xl transition-all duration-500 ${
                dropdowns.blogs ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDropupCircle />
            </span>
          </button>
          <div
            className={`z-30 flex flex-col justify-center items-center overflow-hidden transition-all duration-500 absolute ${
              dropdowns.blogs ? "h-[200px]" : "h-0"
            }`}
          >
            {["Blog1", "Blog2", "Blog3", "Blog4", "Blog5"].map((blog) => (
              <Link key={blog} href="/">
                {blog}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/">Contact</Link>
      </div>

      <div className={`flex justify-center items-center gap-[20px]`}>
        <span className={`text-2xl w-[50px] h-[50px] bg-white/40 rounded-full flex justify-center items-center`}>
          <CiSearch />
        </span>
        <span className={`text-2xl w-[50px] h-[50px] bg-white/40 rounded-full flex justify-center items-center`}>
          <BsListColumnsReverse />
        </span>
        <button
          className={`w-[200px] h-[40px] bg-amber-300 rounded-md
            flex justify-center items-center gap-[10px]
            `}
        >
          Book Your Stay
          <span>
            <GoArrowUpRight />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
