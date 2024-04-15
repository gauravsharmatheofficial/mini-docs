import React from "react";

function Background() {
  return (
    <>
      <div className="absolute w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 flex justify-center font-semibold text-zinc-600 text-xlg">
          {" "}
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center text-[14vw] leading-none tracking-tighter font-semibold text-zinc-900">
          Docs
        </h1>
      </div>
    </>
  );
}

export default Background;
