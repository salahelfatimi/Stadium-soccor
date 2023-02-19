import React, { useState } from "react";
import playground from "../assets/playground.jpg";
export default () => {
  const [idchoose, setIdchoose] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState([]);
  const stadium = [
    { id: 2, image: playground, capacity: 5 },
    { id: 3, image: playground, capacity: 5 },
    { id: 1, image: playground, capacity: 7 },
  ];
  const handelsubmit = (e) => {
    const id = e.currentTarget.id;
    setIdchoose(id);
  };
  console.log(hours);

  console.log(date);
  return (
    <div className="flex flex-col justify-around    p-6">
      <div className="grid md:grid-cols-2     gap-4  ">
        <div className="text-[#FEFAF1]  bg-[#1e1f23] p-6 rounded-3xl  ">
          <div className="grid  grid-cols-2   gap-4 ">
            {stadium.map((ele, i) => (
              <div key={i}>
                <button id={ele.id} onClick={handelsubmit}>
                  <div className="relative ">
                    <div className="absolute inset-0 z-10 bg-slate-400 rounded-xl  text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                      <p className="mx-auto font-mono font-extrabold  sm:text-2xl md:text-3xl text-[#060606]">
                        {ele.capacity} VS {ele.capacity}
                      </p>
                    </div>
                    <div className={idchoose == ele.id ? "" : "grayscale"}>
                      <img src={ele.image} alt="" className="rounded-xl  " />
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#FEFAF1]  bg-[#1e1f23] p-6 rounded-3xl  ">
          <div className=" flex flex-col justify-around gap-4 ">
            <div>
              <input
                onChange={(event) => setDate(event.target.value)}
                type="date"
                placeholder="Date"
                className="block  mt-2 w-full text-center  rounded-2xl  bg-[#26272B] px-5 py-2.5 text-[#FFFFFF] "
              />
            </div>

            <div class="relative overflow-x-auto rounded-3xl">
              <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-[#FFFFFF] uppercase bg-[#26272B]">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Time
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Reservation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-[#56575B]">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-[#FFFFFF] whitespace-nowrap "
                    ></th>
                    <td class="px-6 py-4 text-[#FFFFFF]">Silver</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
