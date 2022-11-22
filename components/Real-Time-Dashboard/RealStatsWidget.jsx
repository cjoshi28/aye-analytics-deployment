import React from 'react'
import usersIcon from '../../public/images/dashboard/user.svg'
import Image from 'next/image'
import eventIcon from '../../public/images/dashboard/EventsIcon.svg'
import viewIcon from '../../public/images/dashboard/ViewsIcon.svg'
import countriesIcon from '../../public/images/dashboard/CountriesIcon.svg'




export default function RealStatsWidget({ heading, value }) {
    return (
        <div className=" flex items-start w-5/12 justify-between p-4 dark:bg-black-color dark:text-white bg-white shadow rounded-lg">
            <div className='w-full'>
                <div className='flex justify-between space-x-2 mb-3'>
                    <span className="block text-[20px]  font-[DM-sans] sm:text-[20px] md:text-[24px] xl:text-[26px] 3xl:text-[26px] dark:text-white  text-black font-bold ">{value}</span>
                    <div className='border-none'>
                        {heading === "Views" ? <Image className='icon-Css p-2 ' src={viewIcon} width={45} height={45} alt="" /> : " "}
                        {heading === "Events" ? <Image className='icon-Css p-2' src={eventIcon} width={45} height={45} alt="" /> : " "}
                        {heading === "Visitors" ? <Image className='icon-Css p-2' src={usersIcon} width={45} height={45} alt="" /> : " "}
                        {heading === "Countries" ? <Image className='icon-Css p-2' src={countriesIcon} width={45} height={45} alt="" /> : " "}
                    </div>
                </div>
                <span className="text-[11px] sm:text-[12px] xl:text-[14px] mid-xl:text-[18px] 3xl:text-[24px] font-[DM-sans] font-semibold">{heading || ""}</span>
            </div>
        </div>
    )
}
