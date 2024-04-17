import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[20px] text-white p-5 overflow-hidden"
    >
      <FaRegFileLines />
      <p className="text-sm  leading-tight mt-5 font-semibold">{data.desc}</p>

      <div className="  footer absolute bottom-0  w-full   left-0">
        <div className="flex items-center justify-between py-3 px-5 mb-3">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-600  rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <MdOutlineFileDownload size="1em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
