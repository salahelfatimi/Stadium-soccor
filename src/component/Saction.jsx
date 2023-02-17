import playground from "../assets/playground.png";
import ball from "../assets/ball.png";
import { NavLink } from "react-router-dom";
export default () => {
  return (
    <section className="  max-w-screen-2xl mx-auto  px-4 ">
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg  sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl text-[#FEFAF1]  font-semibold md:text-4xl">
            discover and get appointment
            <span className="text-[#68FE9A]  md:block"> to play football</span>
          </h3>
          <p className="text-[#85868d]  leading-relaxed mt-3 ">
            Browse the dates and contact us to take the date that suits you to
            play football for you and your friends
          </p>

          <NavLink
            className=" mt-5 px-4 py-2 text-[#060606]  font-mono font-bold  duration-700  rounded-full inline-flex items-center bg-[#68FE9A]  hover:bg-[#06a93c]"
            to="/See_appointment"
          >
            See appointment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </NavLink>
        </div>
        <div className="flex-1 mt-8 md:mt-4  mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
          <img src={playground} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};
