import React from 'react'
import ReferrerBox from '../common/ReferrerBox';
import { FiArrowUp } from "react-icons/fi";


export default function Referrers() {
    const dashboardReferrers = [
        {
            link: "Direct",
            value: "250",
        },
        {
            link: "Linkedin.com",
            value: "120",
        },
        {
            link: "Youtube.com",
            value: "105",
        },
        {
            link: "Facebook.com",
            value: "95",
        },
        {
            link: "LearnWeb3.io",
            value: "80",
        },
        {
            link: "Timesofindia.com",
            value: "20",
        },
    ]
    return (
        <div className=' dark:bg-dark-blue bg-white w-full flex lg:flex-row flex-col justify-between p-3 rounded-3xl'>
            <div className=' basis-3/12 h-full text-xl flex items-center font-bold p-4'>
                <div className='font-[DM-sans]'>
                    <h1 className="heading-widgets dark:text-white">Referrers</h1>
                    <div className='text-base mt-1 '>
                        <div className=' w-full rounded-lg font-[DM-sans] flex flex-col text-gray-400'>
                            <div className='w-full'>
                                <p className="subheading-widgets">Referrers analytics calculated based on visitors</p>
                            </div>
                            <div className='flex flex-row mt-4'>
                                <div className='bg-success w-6 h-6 rounded-3xl flex flex-row justify-center items-center '>
                                    <FiArrowUp size={18} color="white" />
                                </div>
                                <div className='text-success text-xl mx-2 subheading-widgets'>
                                    3.3%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full overflow-auto'>
                {
                    dashboardReferrers && dashboardReferrers.map((refer, index) => {
                        return (
                            <div className='min-w-[150px] max-w-[150px] p-2'>
                                <ReferrerBox key={index} link={refer.link} value={refer.value} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
