import playground from "../image/playground.jpg";
import React from "react";

export default () => {
  const Pricing = [
    { image: playground, persone: "7", prix: "25", total: "350" },
    { image: playground, persone: "5", prix: "25", total: "250" },
  ];

  return (
    <section className=" mx-auto   max-w-screen-xl rounded-lg lg:px-8  dark:bg-gray-800">
      <div className="mt-12 lg:space-x-28 grid gap-2  sm:grid-cols-1 lg:grid-cols-2">
        {Pricing.map((items, key) => (
          <div  key={key} className="max-w-sm  bg-white border  border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          
              <img className="rounded-t-lg" src={items.image} alt="" />
            
            <div className="p-5">
              
                <h5 className="mb-12 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                  {items.persone} VS {items.persone}
                </h5>
              
              <p className="mb-6 font-semibold text-xl text-center text-gray-700 dark:text-gray-400">
                {items.prix} DH per person one
              </p>
              <p className="mb-6 font-semibold text-xl text-center text-gray-700 dark:text-gray-400">
                Total {items.total}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
