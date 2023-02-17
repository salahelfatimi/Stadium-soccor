import React from "react";
import playground from "../assets/playground.jpg";
export default () => {
  return (
    <div className="flex flex-col justify-around p-6">
      <div className="grid grid-cols-1  gap-x-4 items-center ">
        <div className="text-[#FEFAF1]  bg-[#1e1f23] p-7 rounded-3xl  ">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            
              <img src={playground} alt="" />
          

            <img src={playground} alt="" />
            <img src={playground} alt="" />
            <img src={playground} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
