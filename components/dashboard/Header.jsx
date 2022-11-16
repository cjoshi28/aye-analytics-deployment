import { useTheme } from "next-themes";
import React from "react";
import Navbar from "../common/Navbar";
import Button from "../dashboard/Button";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button className="" onClick={() => setTheme("light")}>
          <MoonIcon />
        </Button>
      );
    } else {
      return (
        <Button onClick={() => setTheme("dark")}>
          <SunIcon />
        </Button>
      );
    }
  };
  return (
    <>
      <header className="dark:bg-black-color p-2 pb-0 sticky top-0 shadow-lg z-50 bg-white flex justify-evenly items-center md:justify-end md:pb-2">
        <Navbar />
        <form action="get" class="items-center w-2/3 pt-3 mb-3 md:mb-1 md:w-2/4 3xl:w-2/4 ">
          <SearchBar />
        </form>
        <nav>
          <ul class="flex items-center justify-between pt-2">
            <li class="pt-1">
              <div class="block text-grey-darkest no-underline md:border-none md:p-0 ">
                {renderThemeChanger()}
              </div>
            </li>
            <li class="ml-4  ">
              <BellIcon />
            </li>
            <li class="ml-4 mr-3">
              <MenuIcon />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 dark:fill-white">
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd" />
    </svg>
  )
}

export function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  )
}

export function SearchBar() {
  return (
    <div className="relative text-gray-600  focus-within:text-gray-400 ml-14 sm:ml-9 md:ml-2 lg:ml-20 
    xl:ml-56 mr-2 md:mr-6">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="submit"
          className="focus:outline-none focus:shadow-outline ">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </span>
      <input
        type="search"
        name="q"
        className="py-1 text-white  w-full rounded-full pl-10 dark:bg-light-black focus:outline-gray-200 bg-gray-light-2 focus:bg-white focus:text-gray-900  dark:text-white pr-3 "
        placeholder="Search here...."
        autocomplete="off" />
    </div>
  )
}

export function BellIcon() {
  return (
    <div class="block  no-underline text-grey-darkest hover:underline hover:text-black md:p-0 ">
      <svg xmlns="http://www.w3.org/2000/svg" className="" width="18.833" height="22.913" viewBox="0 0 20.833 22.913">
        <g id="Icon_feather-bell" data-name="Icon feather-bell" transform="translate(-2.083 -1.042)">
          <path id="Path_844" data-name="Path 844" d="M18.75,8.333a6.25,6.25,0,0,0-12.5,0c0,7.292-3.125,9.375-3.125,9.375h18.75S18.75,15.625,18.75,8.333" fill="none" className="dark:stroke-white" stroke="#000"
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2.083" />
          <path
            id="Path_845"
            data-name="Path 845"
            d="M14.3,21.875a2.083,2.083,0,0,1-3.6,0"
            fill="none"
            className="dark:stroke-white"
            stroke="#000"
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2.083" />
        </g>
      </svg>
    </div>
  )
}

export function MenuIcon() {
  return (
    <div class="block text-grey-darkest hover:underline hover:text-black md:p-0 md:border-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
        <g id="Group_243" data-name="Group 243" transform="translate(-3809 -1230)">
          <g id="Rectangle_1733" data-name="Rectangle 1733" transform="translate(3809 1230)" fill="#fff" className="dark:stroke-white" stroke="#000" stroke-width="2">
            <rect width="8" height="8" rx="2" stroke="none" />
            <rect x="1" y="1" width="6" height="6" rx="1" fill="none" />
          </g>
          <g id="Rectangle_1735" data-name="Rectangle 1735" transform="translate(3820 1230)" fill="#fff" className="dark:stroke-white" stroke="#000" stroke-width="2">
            <rect width="8" height="8" rx="2" stroke="none" />
            <rect x="1" y="1" width="6" height="6" rx="1" fill="none" />
          </g>
          <g id="Rectangle_1736" data-name="Rectangle 1736" transform="translate(3820 1241)" fill="#fff" className="dark:stroke-white" stroke="#000" stroke-width="2">
            <rect width="8" height="8" rx="2" stroke="none" />
            <rect x="1" y="1" width="6" height="6" rx="1" fill="none" />
          </g>
          <g id="Rectangle_1734" data-name="Rectangle 1734" transform="translate(3809 1241)" fill="#fff" className="dark:stroke-white" stroke="#000" stroke-width="2">
            <rect width="8" height="8" rx="2" stroke="none" />
            <rect x="1" y="1" width="6" height="6" rx="1" fill="none" />
          </g>
        </g>
      </svg>

    </div>
  )
}

