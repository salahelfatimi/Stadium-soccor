import React, { useEffect, useState } from "react";
export default () => {
  const [idchoose, setIdchoose] = useState("");
  const [times, setTimes] = useState([]);
  const [date, setDate] = useState([]);
  const [showReser, setShowReser] = useState(false);
  const stadium = [
    { id: 5, image: "Playground.jpg", capacity: 5 },

    { id: 7, image: "Playground.jpg", capacity: 7 },
  ];

  const generateTimes = (e) => {
    const start = 8; // 8:00 am
    const end = 24; // 12:00 pm
    const timesArray = [];

    for (let i = start; i <= end; i++) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      timesArray.push(`${hour}:00`);
    }
    setShowReser(true);
    setTimes(timesArray);
    setIdchoose(e);
  };

  return (
    <div className="p-4">
      <div className="flex  items-center justify-around">
        <div className="grid xl:grid-cols-2     gap-4  ">
          <div className="text-[#FEFAF1] bg-[#1e1f23] p-4 rounded-3xl">
            <div className="grid grid-cols-2 gap-4">
              {stadium.map((ele, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center"
                  onClick={() => generateTimes(ele.id)}
                >
                  <div className="relative">
                    <div className="absolute inset-0 z-10 bg-slate-400 rounded-xl text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                      <p className="mx-auto font-mono font-extrabold sm:text-2xl md:text-3xl text-[#060606]">
                        {ele.capacity} VS {ele.capacity}
                      </p>
                    </div>
                    <div className={idchoose == ele.id ? "" : "grayscale"}>
                      <img
                        src={ele.image}
                        alt=""
                        className="rounded-xl h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[#FEFAF1] bg-[#1e1f23] p-2 py-4 rounded-3xl flex justify-center items-center h-auto">
            {showReser ? (
              <div>
                <select
                  defaultValue={""}
                  id="countries"
                  className="bg-[#26272B] text-center text-base font-mono text-[#FFFFFF] rounded-2xl px-5 py-1.5 w-full"
                >
                  <option value={""}>Choose a stadium</option>
                  <option value="US">stadium 1</option>
                  <option value="CA">stadium 2</option>
                  <option value="FR">stadium 3</option>
                  <option value="DE">stadium 4</option>
                </select>
                <div className="flex flex-col justify-around gap-2">
                  <div>
                    <input
                      onChange={(event) => setDate(event.target.value)}
                      type="date"
                      placeholder="Date"
                      className="block mt-2 w-full text-center text-base font-mono rounded-2xl bg-[#26272B] px-5 py-1.5 text-[#FFFFFF]"
                    />
                  </div>
                  <div className="overflow-y-scroll  max-h-60 lg:max-h-80 rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-50 table-fixed">
                      <thead className="sticky top-0 text-xs text-gray-50 uppercase bg-[#26272b]">
                        <tr>
                          <th
                            scope="col"
                            className="px-2 lg:px-6 py-3 w-3/5 lg:w-auto"
                          >
                            Time
                          </th>
                          <th
                            scope="col"
                            className="px-2 lg:px-6 py-3 w-2/5 lg:w-auto"
                          >
                            Reservation
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-[#4e4e51] ">
                        {times.map((time, index) => (
                          <tr key={index} className="border-b ">
                            <th
                              scope="row"
                              className="px-2 lg:px-6 py-4 font-medium text-gray-50 whitespace-nowrap w-1/5 lg:w-auto"
                            >
                              {time}
                            </th>
                            <td className="px-2 lg:px-6 py-4 w-4/5 lg:w-auto max-w-xs overflow-x-hidden">
                              has been resrevation
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center sm:text-3xl font-mono bg-[#1e1f23]  w-full sm:h-52">
                <div className="h-full flex items-center justify-center">
                  Select the stadium
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
