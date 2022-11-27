import React from "react";
import setting from "../../public/images/dashboard/Layer-2.svg";
import logo from '../../public/images/dashboard/Logo.svg'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import dashActive from '../../public/images/dashboard/dashboard-active.svg'
import dashInactive from '../../public/images/dashboard/dashboard-inactive.svg'
import realActive from '../../public/images/dashboard/realTime-active.svg'
import realInactive from '../../public/images/dashboard/RealTime.svg'
import visitorActive from '../../public/images/dashboard/visitor-active.svg'
import visitorInactive from '../../public/images/dashboard/visitor-inactive.svg'
import chatActive from '../../public/images/dashboard/chat-active.svg'
import chatInactive from '../../public/images/dashboard/chat-inactive.svg'


export default function Sidebar() {

  const router = useRouter();

  return (
    <>
      <aside className="hidden border dark:border-none sm:flex sm:flex-col h-[100vh] px-1 bg-white dark:bg-black-color">
        <div className="inline-flex items-center justify-center py-3  ">
          <Image src={logo} className="" alt="Logo" />
        </div>
        <div className="flex-grow flex flex-col items-center justify-between  text-gray-500 pt-8 dark:bg-black-color bg-white">
          <nav className="flex flex-col h-72 items-center justify-evenly px-1">
            <Link passHref href={"/dashboard"}>
              <div className="inline-flex  items-center w-12 h-12 justify-center rounded-lg">
                {router.pathname == "/dashboard" ? <Image src={dashActive} alt="" /> : <Image src={dashInactive} alt="" />}
              </div>
            </Link>
            <Link passHref href={"/real-time-dashboard"}>
              <div className="inline-flex items-center w-12 h-12 justify-center rounded-lg">
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
          <div className="flex flex-col items-center justify-center w-full ">
            <button className="p-3 hover:text-gray-400 rounded-lg">
              <Image src={setting} alt="" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
