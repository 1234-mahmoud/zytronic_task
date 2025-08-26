import Image from "next/image";
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { RxDimensions } from "react-icons/rx";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const BestRooms = () => {
  return (
    <div className="bg-gray-100/80 flex flex-col gap-[40px] py-[50px]">
      <div className={`flex justify-center items-center`}>
        <h1 className={`text-center text-4xl leading-[54px] tracking-wide font-bold w-[550px]`}>The Best Luxury Rooms And Suites</h1>
      </div>
      <div>
        {/* --------------------------------- */}
<div className="flex flex-wrap gap-6 justify-center items-center">
  {[...Array(4)].map((_, i) => (
    <div
      key={i}
      className={` w-[413px]
        max-sm:w-[330px]
        max-md:w-[300px]
        max-lg:w-[350px]
        h-[519px] flex flex-col gap-[12px] px-[16px] pt-[16px] pb-[32px] bg-white rounded-md`}
    >
      <div className={`img h-[360px] overflow-hidden relative rounded-md`}>
        <Image fill src="/hiro.jpg" alt="Villa" />
      </div>

      <span className="text-gray-500">Deluxe Rooms</span>

      <div
        className={`estate_cont flex items-center gap-[16px] text-gray-500
        max-md:gap-[8px]
        `}
      >
        <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500">
          <LuBath className="text-green-400/85"/> 3 Baths
        </p>
        <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500">
          <IoBedOutline className="text-green-400/85"/> 6 Beds
        </p>
        <p className="flex items-center gap-[8px] max-md:gap-[5px] max-md:p-[3px] ">
          <RxDimensions className="text-green-400/85"/> 160 m<sup>2</sup>
        </p>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam.
      </p>

      <Link
        href="/"
        className={`text-green-400/85 w-[120px] flex items-center gap-[10px]
        pb-2 border-b-2 
        `}
      >
        Read More
        <GoArrowUpRight/>
      </Link>
    </div>
  ))}
</div>
{/* --------------------------------- */}

      </div>
    </div>
  );
};

export default BestRooms;
