import Image from "next/image";
const About_Luxury = () => {
  return (
    <div
      className={`my-[100px]
    `}
    >
      <div
        className={`
    flex justify-center items-center gap-[150px]
    `}
      >
        {/* ----------image---------------- */}
        <div
          className={`relative w-[250px] h-[400px] overflow-hidden rounded-md`}
        >
          <Image src="/hiro.jpg" fill className="absolute" />
        </div>
        {/* ----------------------content------------------ */}

        <div className={`w-[650px] flex flex-col gap-[20px]`}>
          <span className={`bg-white text-green-600/80`}>About Fixyland</span>
          <h1 className={`text-3xl`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            asperiores vel, aliquam reprehenderit beatae omnis soluta.
          </p>
          <ul className={`flex flex-wrap gap-[50px] list-disc`}>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet consectetur</li>
          </ul>
          <div className={`flex items-center gap-[20px]`}>
            <div
              className={`relative overflow-hidden w-[80px] h-[80px] rounded-full`}
            >
              <Image src="/hiro.jpg" fill className="absolute" />
            </div>
            <span className={`flex flex-col`}>
              <span className={`text-[20px] font-semibold`}>
                Mahmoud Mokhtar
              </span>
              <span className={`text-gray-400/85`}>CEO & Founder</span>
            </span>
          </div>
        </div>
      </div>
      {/* ----------------------------------banar----------------------------------- */}
      <div
        className={`w-full h-[200px]  relative overflow-hidden flex justify-center items-center`}
      >
        <div
          className={`w-full h-[75px] bg-green-400 absolute origin-center rotate-2
            flex justify-center items-center gap-[40px]
            `}
        >
          <span className="text-5xl font-bold"> Luxery Hotel</span>
          <span className="text-5xl font-bold">*</span>
          <span className="text-5xl font-bold"> Luxery Hotel</span>
          <span className="text-5xl font-bold">*</span>
          <span className="text-5xl font-bold"> Luxery Hotel</span>
          <span className="text-5xl font-bold">*</span>
          <span className="text-5xl font-bold"> Luxery Hotel</span>
          
        </div>
        <div
          className={`w-full h-[75px] bg-blue-500 absolute origin-center rotate-[-2deg]
              flex justify-center items-center gap-[40px]
            `}
        >
          <span className="text-5xl font-bold"> Luxery Hotel</span>
          <span className="text-5xl font-bold">*</span>
          <span className="text-5xl font-bold"> Luxery Hotel</span>
          <span className="text-5xl font-bold">*</span>
          <span className="text-5xl font-bold"> Luxery Hotel</span>
          <span className="text-5xl font-bold">*</span>
          <span className="text-5xl font-bold"> Luxery Hotel</span>
        </div>
      </div>
    </div>
  );
};

export default About_Luxury;
