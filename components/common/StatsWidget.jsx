import React from 'react'
import usersIcon from '../../public/images/dashboard/user.svg'
import walletCheckIcon from '../../public/images/dashboard/WalletConnected.svg'
import walletDollarIcon from '../../public/images/dashboard/WalletWorth.svg'
import secureIcon from '../../public/images/dashboard/NFTholders.svg'
import Image from 'next/image'


export default function StatsWidget({ heading, value, percentage, icon }) {
    let color = true;

    if (percentage < 0) color = false;

    if (icon === "users") {
        icon = <Image src={usersIcon} width={100} height={100} alt />
    }
    if (icon === "walletCheck") {
        icon = <Image src={walletCheckIcon} width={100} height={100} alt />
    }
    if (icon === "secureUser") {
        icon = <Image src={secureIcon} width={100} height={100} alt />
    }
    if (icon === "walletDollar") {
        icon = <Image src={walletDollarIcon} width={100} height={100} alt />
    }


    return (
        <div className="flex items-start justify-between p-4 bg-white shadow rounded-lg">
            <div>
                <span className="text-[15px] sm:text-[16px] xl:text-[16px] mid-xl:text-[20px] 3xl:text-[24px] font-[DM-sans] font-normal">{heading || ""}</span>
                <div className='flex items-baseline space-x-2 mt-4'>
                    <span className="block text-[16px] font-[DM-sans] sm:text-[16px] md:text-[20px] xl:text-[22px] 3xl:text-[26px] text-black font-bold ">{value}</span>
                    <span className={`${(color) ? "text-success" : "text-danger"} text-[14px] font-[DM-sans] lg:text-[16px]`}>{(color) ? "+" : ""}{percentage}% </span>
                </div>
            </div>
            <div className="inline-flex flex-shrink-0 items-center justify-center h-10 w-10 text-purple-600 bg-purple-100 rounded-lg p-[6px]">
                {icon}
            </div>
        </div>
    )
}
