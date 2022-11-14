import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Reactangle from "../../public/images/dashboard/Rectangle1719.svg";
import dash from "../../public/images/dashboard/dashboard.svg";
import visitor from "../../public/images/dashboard/visitor.svg";
import logo from "../../public/images/dashboard/Logo.svg";
import chat from "../../public/images/dashboard/chat.svg";
import setting from "../../public/images/dashboard/Layer-2.svg";
import realtime from "../../public/images/dashboard/realtime.jpg";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      {/* Mobile Button */}
      <div onClick={handleNav} className="block sm:hidden z-10">
        {nav ? (<AiOutlineClose className="text-right" size={20} style={{ color: `black` }} />
        ) : (
          <AiOutlineMenu size={20} style={{ color: `black` }} />
        )}
      </div>
      {/* Mobile Menu */}
      <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-start items-center border w-6/12 h-screen bg-white text-center ease-in duration-300"
        : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
        <div className="">
          <aside className="w-16 sm:flex sm:flex-col h-[100vh] mt-20 border border-t-0">
            <div className="inline-flex items-center justify-center pt-6 bg-white">
              <Image src={logo} className="" alt="Logo" />
            </div>
            <div className="flex-grow flex flex-col items-center h-full justify-between  text-gray-500 pt-8 bg-white">
              <nav className="flex flex-col h-72 items-center justify-evenly w-[7vh]">
                <div
                  className="inline-flex items-center justify-center rounded-lg"
                  style={{ backgroundImage: `url(${Reactangle})` }}>
                  <Image src={dash} alt="" />
                </div>
                <div
                  className="inline-flex items-center w-9 justify-center rounded-lg"
                  style={{ backgroundImage: `url(${Reactangle})` }}>
                  <Image src={realtime} alt="" />
                </div>
                <div className="inline-flex items-center justify-center rounded-lg">
                  <Image src={visitor} alt="" />
                </div>
                <div className="inline-flex items-center justify-center  rounded-lg">
                  <Image src={chat} alt="" />
                </div>
              </nav>
              <div className="flex flex-col items-center w-full ">
                <button className="p-3 hover:text-gray-400 rounded-lg">
                  <Image src={setting} alt="" />
                </button>
                <span className="h-8 w-8 ml-2 mb-36 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="user profile photo"
                    className="" />
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
export default Navbar