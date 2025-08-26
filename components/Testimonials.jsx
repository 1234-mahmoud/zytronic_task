import React from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
export default function Testimonials() {
  return (
    <div className={`flex justify-center items-center gap-[100px]`}>
      <div
        className={`box1 w-[600px] h-[600px] relative flex justify-center items-center `}
      >
        <div
          className={`img w-[500px] h-[500px] relative overflow-hidden rounded-lg`}
        >
          <Image src="/hiro.jpg" fill alt="picture" />
        </div>

        <div
          className={`img w-[200px] h-[200px] absolute bottom-[100px] border-4 border-white right-0 z-10 overflow-hidden rounded-lg`}
        >
          <Image src="/hotel_2.jpg" fill alt="picture" />
        </div>
      </div>
      <div className={`box2 w-[500px] h-[500px] bg-amber-200 p-10 flex flex-col gap-[20px]`}>
        <p className={'text-3xl font-bold'}>Amazing Feedback say About Services</p>
        <div className="">
          <div className={`rate border-b-2 border-gray-300 pb-5 
            rounded-lg bg-emerald-200 p-5 flex flex-col gap-[10px]
            `}>
            <span className="flex">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              consequuntur nesciunt placeat, facilis earum amet beatae vitae
              quae commodi suscipit.
            </p>
          </div>
          <div className={`person flex items-center gap-[20px] pt-5`}>
            <div className={`img w-[80px] h-[80px] bg-gray-100 rounded-full`}>

            </div>
           <span className={`flex flex-col gap-[5px]`}>
             <sapn>Mahmoud Mokhtar</sapn>
            <span>Customer</span>
           </span>
          </div>
        </div>
      </div>
    </div>
  );
}
