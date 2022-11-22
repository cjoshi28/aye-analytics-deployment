import React from 'react'
import usersIcon from '../../public/images/dashboard/user.svg'
import walletCheckIcon from '../../public/images/dashboard/WalletConnected.svg'
import walletDollarIcon from '../../public/images/dashboard/WalletWorth.svg'
import secureIcon from '../../public/images/dashboard/NFTholders.svg'
import Image from 'next/image'
import userCalender from '../../public/images/dashboard/userCalender.svg'
import userTime from '../../public/images/dashboard/userTime.svg'
import userWeek from '../../public/images/dashboard/userWeek.svg'





export default function StatsWidget({ heading, value, percentage }) {
    let color = true;
    if (percentage < 0) color = false;


    return (
        <div className="flex items-start justify-between p-4  dark:bg-black-color dark:text-white bg-white shadow rounded-lg">
            <div>
                <span className="text-[15px] sm:text-[16px] xl:text-[16px] mid-xl:text-[20px] 3xl:text-[24px] font-[DM-sans] font-semibold">{heading || ""}</span>
                <div className='flex items-baseline space-x-2 mt-4'>
                    <span className="block text-[16px] font-[DM-sans] sm:text-[16px] md:text-[20px] xl:text-[22px] 3xl:text-[26px] dark:text-white text-black font-bold ">{value}</span>
                    <span className={`${(color) ? "text-success" : "text-danger"} text-[14px]  font-[DM-sans] lg:text-[16px]`}>{(color) ? "+" : ""}{percentage}% </span>
                </div>
            </div>
            <div >
                {heading === "Total Visitors" ? <Image className='icon-Css dark:bg-opacity-20 bg-fuchsia-100 px-3 py-[14px] rounded-xl' src={usersIcon} width={50} height={50} alt="" /> : " "}

                {heading === "Wallet Connected" ? <Image className='icon-Css dark:bg-opacity-20 bg-purple-100 p-3 rounded-xl' src={walletCheckIcon} width={50} height={50} alt="" /> : " "}

                {heading === "NFT Holders" ? <Image className='icon-Css dark:bg-opacity-20 bg-green-100 px-3 py-2 rounded-xl' src={secureIcon} width={50} height={50} alt="" /> : " "}

                {heading === "Wallet Worth" ? <Image className='icon-Css dark:bg-opacity-20 bg-blue-100 p-3 rounded-xl' src={walletDollarIcon} width={50} height={50} alt="" /> : " "}

                {heading === "24 Hr Visitors" ? <Image className='icon-Css dark:bg-opacity-20 bg-purple-100 p-3 rounded-xl' src={userTime} width={53} height={53} alt="" /> : " "}

                {heading === "Visitors for a week" ? <Image className='icon-Css dark:bg-opacity-20 bg-green-100 p-3 rounded-xl' src={userWeek} width={54} height={54} alt="" /> : " "}

                {heading === "Visitors for a month" ? <Image className='icon-Css dark:bg-opacity-20 bg-blue-100 p-3 rounded-xl' src={userCalender} width={54} height={54} alt="" /> : " "}
            </div>
        </div>
    )
}
