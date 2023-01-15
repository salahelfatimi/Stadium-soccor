import { SiInstagram, SiWhatsapp, SiFacebook, SiTwitter } from "react-icons/si";
import { NavLink } from "react-router-dom";
export default () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container flex flex-col items-center max-w-screen-2xl justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <NavLink
          to="/"
          className="text-2xl font-bold text-gray-800 transition-colors duration-300 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
        >
          Stadium soccor
        </NavLink>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2022. All Rights Reserved.
        </p>

        <div className="flex -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Reddit"
          >
            <SiFacebook
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
            />
          </a>

          <a
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#be123c] dark:hover:text-red-400"
            aria-label="Facebook"
          >
            <SiInstagram
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
            />
          </a>

          <a
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Github"
          >
            <SiTwitter
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
            />
          </a>

          <a
            href="#"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[#10b981] dark:hover:text-green-400"
            aria-label="Github"
          >
            <SiWhatsapp
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
