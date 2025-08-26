import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function Spetial_Offers() {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-[40px] bg-emerald-200/30
    pt-[100px] pb-[50px]
    `}
    >
      <h1 className={`text-3xl font-bold`}>
        Spatial Discount For Hotels & Resort Booking
      </h1>
      <div className="grid grid-cols-2 gap-[20px] w-full px-[200px]">
        <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
          <Image src="/hiro.jpg" fill alt="picture" className="object-cover" />
          <div
            className="mask w-full h-full absolute top-0 left-0 bg-gray-100/30
                    flex flex-col gap-[20px] text-white justify-center pl-[20px]"
          >
            <span className="border w-[100px] text-center p-2 rounded-lg">
              30% off
            </span>
            <p className="text-2xl">Get 30% off on hotel booking</p>
            <button className="w-[150px] h-[40px] bg-white/80 text-black rounded-md flex justify-center items-center gap-[10px]">
              Book Now <GoArrowUpRight />
            </button>
          </div>
        </div>

        <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
          <Image src="/hiro.jpg" fill alt="picture" className="object-cover" />
          <div
            className="mask w-full h-full absolute top-0 left-0 bg-gray-100/30
                    flex flex-col gap-[20px] text-white justify-center pl-[20px]"
          >
            <span className="border w-[100px] text-center p-2 rounded-lg">
              35% off
            </span>
            <p className="text-2xl">Get 35% off on hotel booking</p>
            <button className="w-[150px] h-[40px] bg-white/80 text-black rounded-md flex justify-center items-center gap-[10px]">
              Book Now <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
