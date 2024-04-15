import React from "react";
import { FaRegFileLines } from "react-icons/fa6";

function Card() {
  return (
    <div className="w-60 h-72 bg-zinc-900/90 rounded-[20px] text-white p-5">
      <FaRegFileLines />
      <p className="text-sm  leading-tight mt-5 font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </p>
    </div>
  );
}

export default Card;
