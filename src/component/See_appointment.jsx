import React, { useEffect, useState } from "react";
import playground from "../assets/playground.jpg";
export default () => {
  const [idchoose, setIdchoose] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [showreser, setShowreser] = useState(true);
  const [hours, setHours] = useState([]);
  const stadium = [
    { id: 5, image: playground, capacity: 5 },

    { id: 7, image: playground, capacity: 7 },
  ];
  useEffect(() => {
    fetch("http://localhost/Stadium%20soccor/getHours.php")
      .then((res) => res.json())
      .then((json) => setData(json));
  });
  const handelsubmit = (e) => {
    setShowreser(true);
    const id = e.currentTarget.id;
    setIdchoose(id);

    const formData = new FormData();
    formData.append("id", idchoose);

    fetch("http://localhost/serverBil/uploadVideo.php", {
      method: "POST",
      headers: { "Access-Control-Allow-Headers": "*" },
      body: formData,
    });
  };
  console.log(hours);

  console.log(date);
  return (
    <div className="flex flex-col justify-around    p-2">
      <div className="grid md:grid-cols-2     gap-4  ">
        <div className="text-[#FEFAF1]  bg-[#1e1f23] p-4 rounded-3xl  ">
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

        <div
          className="text-[#FEFAF1]  bg-[#1e1f23] p-6 rounded-3xl  "
          style={{ height: "70vh" }}
        >
          <div className={showreser == false ? "hidden" : "block"}>
            <div>
              <select
                id="countries"
                class="bg-[#26272B] text-center  text-[#FFFFFF]  rounded-2xl px-5 py-2.5 w-full"
              >
                <option selected>Choose a stadium</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className=" flex flex-col justify-around gap-4 ">
              <div>
                <input
                  onChange={(event) => setDate(event.target.value)}
                  type="date"
                  placeholder="Date"
                  className="block  mt-2 w-full text-center  rounded-2xl  bg-[#26272B] px-5 py-2.5 text-[#FFFFFF] "
                />
              </div>

              <div>
                <table class="text-left w-full ">
                  <thead class="bg-[#26272B] flex text-[#FFFFFF] w-full rounded-t-3xl">
                    <tr class=" w-full flex font-mono   ">
                      <th class="p-4 text-center w-1/5">Time</th>
                      <th class="p-4  w-4/5">Reservation</th>
                    </tr>
                  </thead>
                  <tbody
                    class="bg-[#56575B] flex flex-col  overflow-y-scroll w-full rounded-b-xl"
                    style={{ height: "39vh" }}
                  >
                    {data.map((ele) => (
                      <tr class=" w-full flex  border-b border-[#26272B]">
                        <td class="p-4 w-1/5 font-mono text-center font-thin">
                          {ele.hours}:00
                        </td>
                        <td class="p-4 w-4/5 font-mono ">
                          Reserved playground
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
