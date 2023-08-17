import React from "react";


export default () => {
  const Contact = [
    {
      Name: "stadium location",
      donne: "Syba marrakech",
      icon: "gps.png",
      href: "https://maps.app.goo.gl/ymQhQkMH3H6GUWir7",
    }, 
    
    {
      Name: "Phone",
      donne: "0602314804",
      icon: "phone.png",
      href: "tel:+212602314804",
    },
    {
      Name: "Whatsapp",
      donne: "0602314804",
      icon: "Whatsapp.png",
      href: "https://wa.me/212602314804",
    },
    {
      Name: "Phone Office",
      donne: "0502314804",
      icon: "telephone-office.png",
      href: "tel:+212502314804",
    },
  ];
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center">
        {Contact.map((ele, i) => (
          <div key={i} className="flex  justify-around p-2">
            <a href={ele.href} target="_blank">
              <div className="flex flex-col justify-between rounded-3xl gap-y-10 text-[#FEFAF1] hover:border-2 hover:border-[#68FE9A]  hover:duration-200  bg-[#1e1f23] px-16  py-12 mb-8">
                <div className="pb-10 flex justify-center">
                  <img src={ele.icon} alt={ele.Name} className=" w-2/4" />
                </div>
                <div className="text-center capitalize font-mono font-bold  text-lg">
                  <h1>{ele.Name}</h1>
                </div>
                <div className="text-center capitalize font-sans ">
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
