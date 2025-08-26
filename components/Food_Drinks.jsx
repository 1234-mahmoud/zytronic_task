import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
export default function Food_Drinks() {
  return (
    <div className={`p-[100px]  flex justify-center items-center gap-[100px]`}>
      <div className={`box1 w-[500px]`}>
        <h1 className={`text-4xl font-bold`}>Quality food and drink your trip are enjoyable</h1>
        <p className="text-[14px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          quas ipsum corporis. Commodi illum quasi, optio debitis maxime ipsa
          perferendis quidem nulla aperiam autem excepturi odit adipisci amet
          rem expedita.
        </p>
        <ul className="my-[20px] flex flex-col gap-[20px] list-inside" style={{listStyleImage:'url(check.png)'}}>
          <li className={`text-2xl font-bold`}>
            free breakfast, tea & coffee
            <p className="ml-[32px] text-[14px] font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className={`text-2xl font-bold`}>
            quality foods & drink
            <p className="ml-[32px] text-[14px] font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className={`text-2xl font-bold`}>
            restorent & bar
            <p className="ml-[32px] text-[14px] font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
        <button
          className={`w-[200px] h-[50px] rounded-md text-white  bg-green-700/80 flex justify-center items-center gap-[10px]`}
        >
          <Link href="/">View All</Link>
          <GoArrowUpRight />
        </button>
      </div>
      <div className={`box2  w-[650px] h-[500px] relative overflow-hidden
        flex items-center gap-[50px]
        `}>
        <div className={`img absolute w-[300px] h-[400px] overflow-hidden 
          bottom-0 left-0 rounded-lg
          `}>
          <Image src='/hiro.jpg' alt='img' fill/>
        </div>
        <div className={`img absolute w-[300px] h-[400px] overflow-hidden 
          top-0 right-0 rounded-lg
          `}>
          <Image src='/hiro.jpg' alt='img' fill/>
        </div>
        <div className={`people bg-white/85 py-[20px] w-[250px] rounded-md z-50 
          absolute bottom-0 left-[50%] translate-x-[-50%] flex flex-col justify-center items-center
          `}>
          <span>Popular Clients</span>
          <ul className={`flex`} style={{ transform: "translateX(calc(50% - 80px))" }}>
            <li className="ml-[-15px] w-[50px] h-[50px] relative overflow-hidden bg-amber-300 rounded-full">
          <Image src='/hiro.jpg' alt='img' fill/>

            </li>
            <li className="ml-[-15px] w-[50px] h-[50px] relative overflow-hidden bg-amber-300 rounded-full">
          <Image src='/hiro.jpg' alt='img' fill/>

            </li>
            <li className="ml-[-15px] w-[50px] h-[50px] relative overflow-hidden bg-amber-300 rounded-full">
          <Image src='/hiro.jpg' alt='img' fill/>

            </li>
            <li className="ml-[-15px] w-[50px] h-[50px] relative overflow-hidden bg-amber-300 rounded-full">
          <Image src='/hiro.jpg' alt='img' fill/>

            </li>
            <li className="ml-[-15px] w-[50px] h-[50px] relative overflow-hidden bg-amber-300 rounded-full">
          <Image src='/hiro.jpg' alt='img' fill/>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
