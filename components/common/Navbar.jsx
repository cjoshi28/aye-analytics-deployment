import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import dashActive from '../../public/images/dashboard/dashboard-active.svg'
import dashInactive from '../../public/images/dashboard/dashboard-inactive.svg'
import realActive from '../../public/images/dashboard/realTime-active.svg'
import realInactive from '../../public/images/dashboard/realTime.svg'
import visitorActive from '../../public/images/dashboard/visitor-active.svg'
import visitorInactive from '../../public/images/dashboard/visitor-inactive.svg'
import chatActive from '../../public/images/dashboard/chat-active.svg'
import chatInactive from '../../public/images/dashboard/chat-inactive.svg'
import logo from "../../public/images/dashboard/Logo.svg";
import setting from "../../public/images/dashboard/Layer-2.svg";
import { useRouter } from "next/router";
import Link from "next/link";


function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const router = useRouter();

  return (
    <>
      {/* Mobile Button */}
      <div onClick={handleNav} className="block sm:hidden z-10">
        {nav ? (<AiOutlineClose className="text-right dark:fill-white" size={20} style={{ color: `black` }} />
        ) : (
          <AiOutlineMenu className="dark:fill-white" size={20} style={{ color: `black` }} />
        )}
      </div>
      {/* Mobile Menu */}
      <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center dark:bg-black-color  w-2/12 h-screen  px-1 bg-white text-center ease-in duration-300"
        : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen dark:bg-black-color text-center ease-in duration-300"}>
        <div className="pl-1 ">
          <aside className="sm:flex sm:flex-col h-[100vh] mt-24 pb-28">
            <div className="inline-flex items-center justify-center pt-6  dark:bg-black-color  bg-white">
              <Image src={logo} className="" alt="Logo" />
            </div>
            <div className="flex-grow flex flex-col items-center h-full justify-between  text-gray-500 pt-8 bg-white  dark:bg-black-color">
              <nav className="flex flex-col h-72 items-center justify-evenly w-[7vh]">
                <Link passHref href={"/dashboard"}>
                  <div className="inline-flex  items-center w-12 h-12 justify-center rounded-lg">
                    {router.pathname == "/dashboard" ? <Image src={dashActive} alt="" /> : <Image src={dashInactive} alt="" />}
                  </div>
                </Link>
                <Link passHref href={"/real-time-dashboard"}>
                  <div className="inline-flex  items-center w-12 h-12 justify-center rounded-lg">
                    {router.pathname == "/real-time-dashboard" ? <Image src={realActive} alt="" /> : <Image src={realInactive} alt="" />}
                  </div>
                </Link>
                <Link passHref href={"/visitor-list"}>
                  <div className="inline-flex items-center w-12 h-12 justify-center rounded-lg">
                    {router.pathname == "/visitor-list" ? <Image src={visitorActive} alt="" /> : <Image src={visitorInactive} alt="" />}
                  </div>
                </Link>
                <Link passHref href={""}>
                  <div className="inline-flex  items-center w-12 h-12 justify-center rounded-lg">
                    {router.pathname == "" ? <Image src={chatActive} alt="" /> : <Image src={chatInactive} alt="" />}
                  </div>
                </Link>
              </nav>
              <div className="flex flex-col items-center w-full ">
                <button className="p-3 hover:text-gray-400 rounded-lg ">
                  <Image src={setting} alt="" />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
export default Navbar