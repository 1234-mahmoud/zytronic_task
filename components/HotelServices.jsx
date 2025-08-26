import Image from "next/image";
import { LuBike } from "react-icons/lu";
import { FaPersonSwimming } from "react-icons/fa6";
import { TbKarate } from "react-icons/tb";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdFitness } from "react-icons/io";
import classes from "../style/hotel_service.module.css";
const data = [
  {
    icon: <LuBike />,
    title: "Cycling",
  },
  {
    icon: <FaPersonSwimming />,
    title: "Swimming",
  },
  {
    icon: <TbKarate />,
    title: "Karate",
  },
  {
    icon: <IoMdFitness />,
    title: "Fitness Center",
  },
];

function HotelServices() {
  return (
    <div className="my-[100px] px-[50px] flex justify-center  gap-[150px]">
      <div className={`cont flex flex-col gap-[30px]`}>
        <h1
          className={`
          text-3xl font-bold w-[350px] leading-[40px] tracking-wide
          `}
        >
          Get The Best Hotel Fixyland Services
        </h1>
        <p
          className={`
          text-xl w-[550px] leading-[30px] tracking-wide
          `}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          rerum earum autem architecto dolorem deleniti temporibus cumque.
        </p>
        <button
          className={`w-[200px] h-[50px] rounded-md text-white  bg-green-700/80 flex justify-center items-center gap-[10px]`}
        >
          <Link href="/">View All</Link>
          <GoArrowUpRight />
        </button>
      </div>
      {/* ----------------------------------------------------- */}
      <div className="services w-[800px] ">
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`${classes.estate} relative w-[350px]
        h-[350px] flex flex-col gap-[12px] px-[16px] pt-[16px] pb-[32px] bg-white rounded-md`}
            >
              <Image src="/hiro.jpg" alt="image" fill />

              {/* ---------------------- */}
              <div
                className={`
                ${classes.mask} absolute overflow-hidden bottom-0 left-0 w-full h-0
                 bg-gray-300/60 transition-all duration-700 ease-in-out
                flex justify-center items-center flex-col gap-[10px]
                `}
              >
                {" "}
                <span className="text-9xl">{item.icon}</span>
                <span className="text-gray-900 font-semibold text-3xl">
                  {item.title}
                </span>
                <p className="text-center text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* --------------------------------- */}
      </div>
    </div>
  );
}

export default HotelServices;
