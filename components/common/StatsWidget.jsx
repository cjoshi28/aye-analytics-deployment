import React from 'react'

export default function StatsWidget({ heading,value,percentage,icon }) {
    let color = true;
    if(percentage<0) color = false;
    
    return (
        <div className="flex items-start justify-between p-6 bg-white shadow rounded-lg">
            <div>
                <span className="text-[16px] sm:text-[18px] xl:text-[18px] mid-xl:text-[20px] 3xl:text-[24px] font-[DM-sans] font-medium">{heading || ""}</span>
                <div className='flex items-baseline space-x-2 mt-4'> 
                    <span className="block text-[16px] font-[DM-sans] sm:text-[18px] md:text-[22px] xl:text-[28px] 3xl:text-[32px] text-black font-bold ">{value}</span> 
                    <span className={ `${(color) ? "text-[#53D0A4]" : "text-[#ff5724]"} text-[14px] font-[DM-sans] lg:text-[18px]`}>{(color)?"+":""}{percentage}% </span>
                </div>
            </div>
            <div className="inline-flex flex-shrink-0 items-center justify-center h-10 w-10 text-purple-600 bg-purple-100 rounded-lg">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
        </div>
    )
}
