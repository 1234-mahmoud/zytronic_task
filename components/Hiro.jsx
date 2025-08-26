import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Hiro = () => {
  return (
    <div className="relative">
      <div
        className={`mask absolute top-0 left-0 w-full h-full bg-white/30 z-10`}
      ></div>
      <div className={`img relative w-full h-[700px] z-0`}>
        <Image src="/hiro.jpg" fill className="absolute" />
      </div>
      <div
        className={`content  z-20 flex flex-col justify-center items-center gap-[30px]
        absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]
        `}
      >
        <h1 className={`text-6xl font-bold text-white`}>Book With Best</h1>
        <h3 className={`text-6xl font-bold text-amber-300/75`}>Luxury Hotel</h3>
        <p className={`w-[500px] text-center text-white`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          mollitia veritatis eveniet iste nesciunt enim ducimus.
        </p>
        <div className={`btns flex justify-center items-center gap-[20px]`}>
          <button
            className={`w-[200px] h-[40px] bg-amber-300 rounded-md
            flex justify-center items-center gap-[10px]
            `}
          >
            Our Services
            <span>
              <GoArrowUpRight />
            </span>
          </button>
          {/* ----------- */}
          <button
            className={`w-[200px] h-[40px] bg-white rounded-md
            flex justify-center items-center gap-[10px]
            `}
          >
            Explore More
            <span>
              <GoArrowUpRight />
            </span>
          </button>
        </div>
      </div>
      {/* --------------------------------------------reservation----------------------------------------------------- */}
      <div
        className={`w-[80%] mx-auto h-[150px] bg-green-400/35
        absolute bottom-[-60px] right-0 left-0 z-10
        flex justify-center items-end gap-[30px] py-[30px] rounded-md
        `}
      >
        {/* --------select----------- */}
        <div className={`flex flex-col gap-[7px]`}>
          <label htmlFor="" className="text-white">Check in</label>
          <div
            className={`flex justify-between items-center p-[10px]
         w-[200px] h-[50px] bg-white rounded-md `}
          >
            <input type="date" name="" id=""/>
          </div>
        </div>
         {/* --------select----------- */}
          <div className={`flex flex-col gap-[7px]`}>
          <label htmlFor="" className="text-white">Check out</label>
          <div
            className={`flex justify-between items-center p-[10px]
         w-[200px] h-[50px] bg-white rounded-md `}
          >
            <input type="date" name="" id=""/>
          </div>
        </div>

         {/* --------select----------- */}
        <div className={`flex flex-col gap-[7px]`}>
          <label htmlFor="" className="text-white">Check in</label>
          <div
            className={`flex justify-between items-center p-[10px]
         w-[200px] h-[50px] bg-white rounded-md`}
          >
            <select name="" id="">
              <option value="">option 1</option>
              <option value="">option 2</option>
              <option value="">option 3</option>
              <option value="">option 4</option>
            </select>
            <span>icon</span>
          </div>
        </div>

         {/* --------select----------- */}
        <div className={`flex flex-col gap-[7px]`}>
          <label htmlFor="" className="text-white">Check in</label>
          <div
            className={`flex justify-between items-center p-[10px]
         w-[200px] h-[50px] bg-white rounded-md`}
          >
            <select name="" id="">
              <option value="">option 1</option>
              <option value="">option 2</option>
              <option value="">option 3</option>
              <option value="">option 4</option>
            </select>
            <span>icon</span>
          </div>
        </div>

         {/* --------select----------- */}
        <div className={`flex flex-col gap-[7px]`}>
          <label htmlFor="" className="text-white">Check in</label>
          <div
            className={`flex justify-between items-center p-[10px]
         w-[200px] h-[50px] bg-white rounded-md`}
          >
            <select name="" id="">
              <option value="">option 1</option>
              <option value="">option 2</option>
              <option value="">option 3</option>
              <option value="">option 4</option>
            </select>
            <span>icon</span>
          </div>
        </div>
        {/* ------------------------ */}
        <button
          className={`w-[200px] h-[50px] bg-amber-300 rounded-md
            flex justify-center items-center gap-[10px]
            `}
        >
          Check now
          <span>
            <GoArrowUpRight />
          </span>
        </button>

      </div>
    </div>
  );
};

export default Hiro;
