import React from "react";
import Reactangle from "../../public/images/dashboard/Rectangle1719.svg";
import logo from "../../public/images/dashboard/Logo.svg";
import dash from "../../public/images/dashboard/dashboard.svg";
import visitor from "../../public/images/dashboard/visitor.svg";
import chat from "../../public/images/dashboard/chat.svg";
import setting from "../../public/images/dashboard/Layer-2.svg";
import realtime from "../../public/images/dashboard/realtime.jpg";
import Image from "next/image";

export default function Sidebar() {
  return (
    <>
      <aside className="hidden w-16 sm:flex sm:flex-col h-[100vh] border-t-0">
        <div className="inline-flex items-center justify-center py-3 dark:bg-[#000000] bg-white">
          <Image src={logo} className="" alt="Logo" />
        </div>
        <div className="flex-grow flex flex-col items-center justify-between text-gray-500 pt-8 dark:bg-[#000000] bg-white">
          <nav className="flex flex-col h-72 items-center justify-evenly w-[7vh]">
            <div className="inline-flex items-center justify-center rounded-lg" style={{ backgroundImage: `url(${Reactangle})` }}>
              <Image src={dash} alt="" />
            </div>
            <div className="inline-flex items-center w-9 justify-center rounded-lg" style={{ backgroundImage: `url(${Reactangle})` }}>
              <Image src={realtime} alt="" />
            </div>
            <div className="inline-flex items-center justify-center rounded-lg">
              <Image src={visitor} alt="" />
            </div>
            <div className="inline-flex items-center justify-center  rounded-lg">
              <Image src={chat} alt="" />
            </div>
          </nav>
          <div className="flex flex-col items-center justify-center w-full ">
            <button className="p-3 hover:text-gray-400 rounded-lg">
              <Image src={setting} alt="" />
            </button>
            <span className="h-8 w-8 ml-2 my-4 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user profile photo" className="" />
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
