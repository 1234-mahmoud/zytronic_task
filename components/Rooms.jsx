import React from "react";

export default function Rooms() {
  // Cards data array
  const cards = [
    { id: 1, front: "Front 1", back: "Back 1" },
    { id: 2, front: "Front 2", back: "Back 2" },
    { id: 3, front: "Front 3", back: "Back 3" },
    { id: 4, front: "Front 4", back: "Back 4" },
  ];

  return (
    <div className="w-full h-[400px] p-[20px] my-[100px] bg-gray-200 flex justify-center items-center">
      {/* Grid container for 4 cards */}
      <div className="grid grid-cols-4 gap-10">
        {cards.map((card) => (
          <div key={card.id} className="relative w-[250px] h-[250px] [perspective:1000px]">
            {/* Rotating card */}
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              {/* Front face */}
              <div className="absolute w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold [backface-visibility:hidden]">
                {card.front}
              </div>

              {/* Back face */}
              <div className="absolute w-full h-full bg-red-500 
              flex items-center justify-center text-white 
              text-xl font-bold 
              [backface-visibility:hidden] [transform:rotateY(180deg)]">
                {card.back}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
