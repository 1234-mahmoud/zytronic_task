import Image from "next/image";

export default function Rooms() {
  // Cards data array
  const cards = [
    { id: 1, front: "Front 1", back: "Back 1" },
    { id: 2, front: "Front 2", back: "Back 2" },
    { id: 3, front: "Front 3", back: "Back 3" },
    { id: 4, front: "Front 4", back: "Back 4" },
    { id: 5, front: "Front 5", back: "Back 5" },
  ];

  return (
    <div className="w-full h-[400px] p-5 my-[100px] bg-gray-200 flex justify-center items-center">
      {/* Flex container for 5 cards */}
      <div className="flex flex-wrap justify-center w-full relative">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group flex justify-center items-center basis-[20%] relative h-[250px] [perspective:1000px]"
          >
            {/* background image */}
            <Image fill src="/hotel_2.jpg" alt="pic" className="object-cover" />

            {/* Flipping card */}
            <div
              className="relative w-[90%] h-[90%] transition-transform duration-700 ease-in-out
              [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
              {/* Front face */}
              <div className="absolute w-full h-full rounded-md bg-blue-500/30 flex items-center justify-center
               text-white text-xl font-bold [backface-visibility:hidden]">
                {card.front}
              </div>

              {/* Back face */}
              <div className="absolute w-full h-full rounded-md bg-red-500/30 flex items-center justify-center
               text-white text-xl font-bold [backface-visibility:hidden] [transform:rotateY(180deg)]">
                {card.back}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
