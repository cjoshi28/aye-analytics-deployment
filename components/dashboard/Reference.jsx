import React from 'react'

import { FiArrowUp } from "react-icons/fi";
export default function Reference() {
    return (
        <div className='bg-[#FFFFFF] w-full flex justify-between p-3 rounded-3xl'>
            <div className='basis-3/12 h-full text-xl flex justify-center items-center font-bold p-5'>
                <div className='font-[Segoe-UI-Bold]'>
                    <h1>Referrers</h1>
                    <div className='text-base mt-1 '>
                        <div className=' w-full  rounded-lg font-[Segoe-UI] bg-[#FFFFFF] flex flex-col text-gray-400'>
                            <div className='w-full'>
                                Referrers analytics calculated based on visitors
                            </div>
                            <div className='bg-[#53D0A4] w-10 h-10 rounded-3xl flex flex-row items-center mt-1'>
                                <div className='mx-1 mt-0 pt-2 mb-2' >
                                    <FiArrowUp size={30} color="white" />
                                </div>
                                <div className='text-[#53D0A4] font-[Segoe-UI-Bold] text-2xl mx-2'>
                                    3.3%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end w-full flex-wrap '>
                <Blogs />
                <Blogs />
                <Blogs />
                <Blogs />
                <Blogs />
                <Blogs />
                <Blogs />
                
                
            </div>
        </div>
    )
}


const Blogs = (props) => {
    return (
        <div className='bg-[#7C5BEE]  rounded-xl text-white m-1 w-[80%] md:w-auto text-sm font-[Segoe-UI] flex flex-col  p-4'>
            <div className='w-[70%] text-sm'>
                Referrer website link
            </div>
            <div className='font-bold text-3xl'>
                20
            </div>
        </div>
    )
}