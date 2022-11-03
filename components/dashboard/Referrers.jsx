import React from 'react'
import Blogs from '../common/Blogs';
import { FiArrowUp } from "react-icons/fi";


export default function Referrers() {
    const dashboardReferrers = [
        {
            link: "Referrer website link",
            value: "20",
        },
        {
            link: "Referrer website link",
            value: "20",
        },
        {
            link: "Referrer website link",
            value: "20",
        },
        {
            link: "Referrer website link",
            value: "20",
        },
        {
            link: "Referrer website link",
            value: "20",
        },
        {
            link: "Referrer website link",
            value: "20",
        },
    ]
    return (
        <div className=' bg-[#E0F2FA] w-full flex lg:flex-row flex-col justify-between p-3 rounded-3xl'>
            <div className=' basis-3/12 h-full text-xl flex justify-center items-center font-bold p-5'>
                <div className='font-[DM-sans]'>
                    <h1>Referrers</h1>
                    <div className='text-base mt-1 '>
                        <div className=' w-full rounded-lg font-[DM-sans] flex flex-col text-gray-400'>
                            <div className='w-full'>
                                Referrers analytics calculated based on visitors
                            </div>
                            <div className='bg-[#53D0A4] w-10 h-10 rounded-3xl flex flex-row items-center mt-3'>
                                <div className='mx-1 mt-0 pt-2 mb-2' >
                                    <FiArrowUp size={30} color="white" />
                                </div>
                                <div className='text-[#53D0A4] font-[DM-sans] text-xl mx-2'>
                                    3.3%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center lg:justify-center 2xl:justify-between 3xl:justify-center w-full flex-wrap'>
                {
                    dashboardReferrers && dashboardReferrers.map((refer, index) => {
                        return (
                            <Blogs link={refer.link} value={refer.value} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
