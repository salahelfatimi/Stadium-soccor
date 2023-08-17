import { SiInstagram, SiWhatsapp, SiFacebook, SiTwitter } from "react-icons/si";
import { NavLink } from "react-router-dom";
export default () => {
  return (
    <footer>
      <div className="container flex flex-col items-center max-w-screen-2xl justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <NavLink
          to="/"
          className="text-2xl font-bold transition-colors duration-300 text-[#FEFAF1] hover:text-blue-500"
        >
          Stadium soccor
        </NavLink>

        <p className="text-sm text-center  text-[#FEFAF1]">
          Copyright &copy;{new Date().getFullYear()} All rights reserved |
              This projet is made with by
              <a className="pl-1" href="#" target="_blank">
                salah.fatimi
              </a>
        </p>

        <div className="flex -mx-2">
          <a
            href="#"
            className="mx-2  transition-colors duration-300 text-blue-500 "
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
            className="mx-2  transition-colors duration-300 text-[#be123c]"
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
            className="mx-2  transition-colors duration-300  text-blue-500"
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
            className="mx-2  transition-colors duration-300 text-[#10b981] "
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
