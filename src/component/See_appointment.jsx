import React from "react";
import playground from "../assets/playground.jpg";
export default () => {
  const stadium = [
    { id: 1, image: playground },
    { id: 2, image: playground },
    { id: 3, image: playground },
  ];
  const handelsubmit = (e) => {
    console.log(e.currentTarget.id);
  };
  return (
    <div className="flex flex-col justify-around p-6">
      <div className="grid md:grid-cols-2     gap-x-4 items-center  ">
        <div className="text-[#FEFAF1]  bg-[#1e1f23] p-6 rounded-3xl  ">
          <div className="grid lg:grid-cols-2 grid-cols-2 gap-2  ">
            {stadium.map((ele, i) => (
              <div key={i}>
                <button id={ele.id} onClick={handelsubmit}>
                  <img
                    src={ele.image}
                    alt=""
                    className="rounded-xl grayscale "
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
