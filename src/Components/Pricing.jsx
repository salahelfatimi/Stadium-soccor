import React from "react";

export default () => {
  const Pricing = [
    { image: "playgroundPercing.jpg", persone: "7", prix: "25", total: "350" },
    { image: "playgroundPercing.jpg", persone: "5", prix: "25", total: "250" },
  ];

  return (
    <main className="    rounded-lg  ">
      <div className="  grid   gap-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
        {Pricing.map((items, i) => (
          <div className="flex  justify-around  px-4 py-4 " key={i}>
            <div className="max-w-sm  text-[#FEFAF1]  bg-[#1e1f23] rounded-2xl shadow-md">
              <img  src={items.image} className="rounded-t-2xl"  alt="" />

              <div className="p-5">
                <h5 className="mb-8 text-2xl font-bold tracking-tight text-center ">
                  {items.persone} VS {items.persone}
                </h5>

                <p className="mb-6 font-semibold text-xl text-center ">
                  {items.prix} DH per person one
                </p>
                <p className="mb-2 font-semibold text-xl text-center ">
                  Total {items.total}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
