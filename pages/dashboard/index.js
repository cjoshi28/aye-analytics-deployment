import React from 'react'
import logo from "../../public/images/dashboard/Logo.svg"
import back from "../../public/images/dashboard/Layer 2-1.svg"
import chat from "../../public/images/dashboard/Group 256.svg"
import setting from "../../public/images/dashboard/Layer 2.svg"
import sunny from "../../public/images/dashboard/Icon ionic-ios-sunny.svg"
import menu from "../../public/images/dashboard/Group 243.svg"
import bell from "../../public/images/dashboard/Icon feather-bell.svg"
import Image from "next/image";
import Stats from '../../components/dashboard/stats'
import dynamic from 'next/dynamic';
import Refreance from '../../Components/Dashboard/Refreance'

const Chart = dynamic(() => { return import('../../components/dashboard/Chart') }, { ssr: false });




export default function index() {

    return (
        
            <div className="flex bg-gray-100 max-h[100vh]">
                <aside className="hidden sm:flex sm:flex-col border-2">
                    <a href="#" className="inline-flex items-center justify-center bg-white h-20 w-20">
                        <Image src={logo} alt="Logo" />
                    </a>
                    <div className="flex-grow flex flex-col justify-between text-gray-500 bg-white">
                        <nav className="flex flex-col mx-4 my-6 space-y-4">
                            <a href="#" className="inline-flex items-center justify-center py-3 rounded-lg">
                                <span className="sr-only">Folders</span>
                                <Image src={back} alt="Logo" />
                            </a>
                            <a href="#" className="inline-flex items-center justify-center py-3 rounded-lg">
                                <span className="sr-only">Folders</span>
                                <Image src={chat} alt="Logo" />
                            </a>

                        </nav>
                        <div className="flex flex-col  items-center justify-center  w-20 ">
                            <button className="p-3 hover:text-gray-400  rounded-lg">
                                <span className="sr-only">Settings</span>
                                <Image src={setting} alt="Logo" />
                            </button>
                            <span className="h-12 w-12 ml-2 my-4 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user profile photo" className="h-full w-full object-cover" />
                            </span>
                        </div>
                    </div>
                </aside >
                <div className="flex-grow text-gray-800">
                    <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
                        <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                            <span className="sr-only">Menu</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>

                        <div className="flex items-center ml-auto">
                            <div className="relative w-full max-w-md sm:-ml-2">
                                <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                                <input type="text" role="search" placeholder="Search..." className="py-1 pl-10 pr-4 w-full border-2 border-gray placeholder-[#E9EEF5] focus:bg-[gray-50] rounded-full" />
                            </div>
                            <div className=" flex items-center pl-3 ml-3 space-x-3">
                                <div className="relative ">
                                    <Image src={sunny} alt="Logo" />
                                </div>
                                <div className="relative">

                                    <Image src={bell} alt="Logo" />
                                </div>

                                <div className="relative ">
                                    <Image src={menu} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </header>

                    <main className="p-6 sm:p-10 space-y-6 overflow-y-scroll">
                        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                            <Stats />
                            <Stats />
                            <Stats />
                            <Stats />
                        </section>
                        <section>
                            <Chart />

                        </section>
                        <section>
                            <Refreance />
                        </section>



                    </main>
                </div>
            </div >
        
    )
}
