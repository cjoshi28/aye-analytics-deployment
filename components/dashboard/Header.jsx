import React from 'react'
import sunny from "../../public/images/dashboard/Icon ionic-ios-sunny.svg"
import menu from "../../public/images/dashboard/Group 243.svg"
import bell from "../../public/images/dashboard/Icon feather-bell.svg"
import Image from "next/image";
import { useTheme } from 'next-themes';

export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme();
    const renderThemeChanger = () => {
        return (
            <Image src={sunny} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-[26px]" alt="Logo" />
        )
    }
    return (
        <>
            <header className="flex border border-t-0 items-center justify-end h-[7vh] sticky top-1 z-50 px-6 sm:px-10 bg-white ">
                <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                    {/* <span className="sr-only text-black ">Menu</span> */}
                    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
                <div className="flex">
                    <div className=" w-full max-w-md sm:-ml-2">
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="absolute fill-[#AEBBCB] w-5 mt-2.5 ml-2">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <input type="text" role="search" placeholder="Search here..." className="py-1 pl-10 pr-6 placeholder:text-sm  border-2 border-gray bg-[#E9EEF5] rounded-full" />
                    </div>
                    <div className=" flex items-center pl-3 ml-3 space-x-3">
                        <div className="relative ">
                            {renderThemeChanger()}
                        </div>
                        <div className="relative">
                            <Image src={bell} className="w-[19px] h-[21px]" alt="Logo" />
                        </div>
                        <div className="relative ">
                            <Image src={menu} className="w-[19px]" alt="Logo" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
