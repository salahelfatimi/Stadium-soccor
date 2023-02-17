import React from "react";
import phone from "../assets/phone.png";
import phone_office from "../assets/telephone-office.png";
import gps from "../assets/gps.png";
import Whatsapp from "../assets/Whatsapp.png";

export default () => {
  const Contact = [
    {
      Name: "stadium location",
      donne: "Syba marrakech",
      icon: gps,
      href: "https://maps.app.goo.gl/ymQhQkMH3H6GUWir7",
    },
    {
      Name: "Phone",
      donne: "0602314804",
      icon: phone,
      href: "tel:+212602314804",
    },
    {
      Name: "Whatsapp",
      donne: "0602314804",
      icon: Whatsapp,
      href: "https://wa.me/212602314804",
    },
    {
      Name: "Phone Office",
      donne: "0502314804",
      icon: phone_office,
      href: "tel:+212502314804",
    },
  ];
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
        {Contact.map((ele, i) => (
          <div key={i} className="flex  justify-around p-2">
            <a href={ele.href} target="_blank">
              <div className="flex flex-col justify-between rounded-3xl gap-y-10 text-[#FEFAF1] hover:border-4 hover:border-[#68FE9A]  hover:duration-200  bg-[#1e1f23] px-20  py-12 mb-8">
                <div className="pb-10 flex justify-center">
                  <img src={ele.icon} alt={ele.Name} className="w-44" />
                </div>
                <div className="text-center capitalize font-mono font-extrabold  text-xl ">
                  <h1>{ele.Name}</h1>
                </div>
                <div className="text-center capitalize font-mono font-medium   ">
                  <span>{ele.donne}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
