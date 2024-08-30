import React from "react";
import Menu from "./Menu";
import Logo_Phone from "../assets/images/phone.svg";
import Logo_TG from "../assets/images/telegram.svg";
import Logo_Insta from "../assets/images/insta.svg";
import Logo_Youtube from "../assets/images/youtube.svg";

function Footer() {
  return (
    <div className="bg-[#333333] text-white py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Menu */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-4 md:mb-0">
            <Menu />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="tel:+998333060098" className="flex items-center">
              <img src={Logo_Phone} alt="Phone" className="w-6 h-6" />
            </a>
            <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src={Logo_TG} alt="Telegram" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/your_profile" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src={Logo_Insta} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/your_channel" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <img src={Logo_Youtube} alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;