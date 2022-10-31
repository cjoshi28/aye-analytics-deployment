import React from 'react'

import {FiArrowUp} from  "react-icons/fi";
export default function Refreance() {
  return (
    <div className=' w-full bg-[#FFFFFF] h-56 inline-flex justify-around rounded-3xl'>  
        <div className='w-[12%] h-full text-xl flex  items-center font-bold p-5'>
            <div className='font-[Segoe-UI-Bold]'>
                <h1>Referrers</h1>
                <div className='text-base mt-1 '>
                    <div className=' w-full  rounded-lg font-[Segoe-UI] bg-[#FFFFFF] flex flex-col text-gray-400'>
                        <div className='w-full'>
                            Referrers analytics calculated based on visitors
                        </div>
                        <div  className='bg-[#53D0A4] w-10 h-10 rounded-3xl flex flex-row items-center mt-1'>
                            <div className='mx-1 mt-0 pt-2 mb-2' >
                                <FiArrowUp size={30} color="white"/>
                            </div>
                            <div className='text-[#53D0A4] font-[Segoe-UI-Bold] text-2xl mx-2'>
                                3.3%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-around basis-1/11  w-full '>
            <Blogs/>
            <Blogs/>
            <Blogs/>
            <Blogs/>
            <Blogs/>
            <Blogs/>
            <Blogs/>
        </div>
    </div>
  )
}


const Blogs = (props)=>{
    return(
        <div className='bg-[#7C5BEE] h-[80%] w-[12%] rounded-xl text-white text-sm font-[Segoe-UI] flex flex-col justify-around p-5'>
                <div className='w-[70%] text-sm'>
                    Referrer website link 
                </div>
                <div className='font-bold text-3xl'>
                    20
                </div>
        </div>
    )
}