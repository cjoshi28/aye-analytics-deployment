import menu from "../../public/images/dashboard/Headericon.svg";
import FiMoon from 'react-icons/fi'
import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";
import Navbar from "../common/Navbar";
import Button from '../dashboard/Button';

export default function Header() {
    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <Button className=""
                    onClick={() => setTheme('light')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 dark:fill-white">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>

                </Button>
            )
        } else {
            return (
                <Button
                    onClick={() => setTheme('dark')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                    </svg>
                </Button>
            )
        }

    }
    return (
        <>
            <header className="flex dark:bg-black-color border-t-0 items-center justify-between sm:justify-end sticky top-1 z-50 px-6 sm:px-10 bg-white ">
                <Navbar />
                <div className="flex w-8/12 lg:w-6/12 sm:w-6/12 justify-end sm:justify-between sm:mr-20 md:mr-8 lg:mr-0">
                    <div className="max-w-xs sm:w-11/12 sm:flex sm:justify-start ml-0 lg:ml-16 xl:ml-44 2xl:ml-52 py-4">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            className="absolute fill-[#AEBBCB] w-5 mt-2.5 ml-2">
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                            type="text"
                            role="search"
                            placeholder="Search here..."
                            className="py-1 sm:w-[80vw] placeholder:text-sm placeholder:pl-10  dark:bg-[#231F20]  border-gray bg-[#E9EEF5] rounded-full" />
                    </div>
                    <div className="flex sm:w-5/12 md:w-2/12 sm:justify-evenly items-center ml-3 space-x-3 ">
                        <div className="relative w-4 sm:w-7 md:w-10 ">
                            {renderThemeChanger()}
                        </div>
                        <div className="relative w-4 sm:w-7 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className='' width="20.833" height="22.913" viewBox="0 0 20.833 22.913">1
                                <g id="Icon_feather-bell" data-name="Icon feather-bell" transform="translate(-2.083 -1.042)">
                                    <path id="Path_844" data-name="Path 844" d="M18.75,8.333a6.25,6.25,0,0,0-12.5,0c0,7.292-3.125,9.375-3.125,9.375h18.75S18.75,15.625,18.75,8.333" fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-width="2.083" />
                                    <path id="Path_845" data-name="Path 845" d="M14.3,21.875a2.083,2.083,0,0,1-3.6,0" fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" stroke-width="2.083" />
                                </g>
                            </svg>
                        </div>
                        <div className="relative w-4 sm:w-7 md:w-10">
                            <Image src={menu} className="" alt="Logo" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
