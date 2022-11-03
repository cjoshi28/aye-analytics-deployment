import React from "react";
import Reactangle from "../../public/images/dashboard/Rectangle 1719.svg"
import logo from "../../public/images/dashboard/Logo.svg"
import back from "../../public/images/dashboard/Layer 2-1.svg"
import user from "../../public/images/dashboard/user.svg"
import chat from "../../public/images/dashboard/Group 256.svg"
import setting from "../../public/images/dashboard/Layer 2.svg"
import Image from "next/image";

export default function Sidebar() {
  return (
    <>
        <aside className="hidden w-16 sm:flex sm:flex-col h-[100vh] border border-t-0">
                <div  className="inline-flex items-center justify-center py-3 bg-white" >
                    <Image src={logo} className="" alt="Logo" />
                    </div> 
                <div className="flex-grow flex flex-col items-center justify-between text-gray-500 bg-white">
                    <nav className="flex flex-col items-center w-[7vh]">
                        <a href="#" className="inline-flex items-center justify-center py-3 rounded-lg">
                            <div className='w-[3vw] h-[7vh] flex items-center justify-center rounded-lg' style={{ backgroundImage: `url(${Reactangle})` }}>
                                <Image src={back} className="w-8" alt="Logo" />
                            </div>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center py-3 rounded-lg">
                            <Image src={chat} className="w-8" alt="Logo" />
                        </a>
                        <a href="#" className="inline-flex items-center justify-center py-8 rounded-lg">
                            <Image src={user} className="w-8" alt="Logo" />
                        </a>
                    </nav>
                    <div className="flex flex-col items-center justify-center w-full ">
                        <button className="p-3 hover:text-gray-400  rounded-lg">
                            {/* <span className="sr-only">Settings</span> */}
                            <Image src={setting} alt="Logo" />
                        </button>
                        <span className="h-8 w-8 ml-2 my-4 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user profile photo" className="" />
                        </span>
                    </div>
                </div>
            </aside > 
    </>
  );
}
