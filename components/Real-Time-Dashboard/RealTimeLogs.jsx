import React from 'react'

export default function RealTimeLogs() {
    return (

        <div className='ml-5 mt-10 h-full pb-6'>
            <ol className="relative border-l  border-gray-300 dark:border-gray-600">
                <div className=' mb-10 ml-6'>
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6  rounded-full   ">
                        <RealUser />
                    </span>
                    <div className='flex gap-3 items-center '>
                        <div className='flex gap-2 items-center justify-between w-full'>
                            <h3 className="flex  items-center text-lg font-[Segoe-UI-Bold] text-gray-900 dark:text-white">1 Visitor </h3>
                            <div className='flex gap-3 items-center' >
                                <time className="text-sm font-normal font-[Segoe-UI] text-gray-500 dark:text-gray-400">5:21:25</time>
                                <div className='mr-4 '>
                                    <div className='  bg-[#53D0A4] w-3 h-3 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Visitor from Russia using Chrome on Mac OS Laptop.</p>

                </div>
                <div className=' mb-10 ml-6'>
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6  rounded-full   ">
                        <RealUser />
                    </span>
                    <div className='flex gap-3 items-center  '>
                        <div className='flex gap-2 items-center justify-between   w-full'>
                            <h3 className="flex  items-center text-lg font-[Segoe-UI-Bold] text-gray-900 dark:text-white">5 Visitor </h3>
                            <div className='flex gap-3 items-center' >
                                <time className="text-sm font-normal  text-gray-500 dark:text-gray-400">5:21:25</time>
                                <div className='mr-4 '>
                                    <div className='  bg-[#53D0A4] w-3 h-3 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mb-4 text-base font-[Segoe-UI] text-gray-500 dark:text-gray-400">5 Visitors from Australia.</p>

                </div>
                <div className=' mb-10 ml-6 flex justify-end'>
                    <span className="flex absolute -left-3 justify-center items-center w-6 h-6  rounded-full   ">
                        <RealEye />
                    </span>
                    <div className='flex gap-3 items-center  justify-end'>
                        <div className='flex gap-2 items-center justify-between   w-full'>
                            <div className='flex gap-3 items-center' >
                                <time className="text-sm font-normal  text-gray-500 dark:text-gray-400">5:21:25</time>
                                <div className='mr-4 '>
                                    <div className='  bg-[#53D0A4] w-3 h-3 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ol>
            <EyeBlock />
            <EyeBlock />
            <EyeBlock />
            <EyeBlock />
            <EyeBlock />
            <EyeBlock />
        </div>
    )
}


function RealUser() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#CECECE" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>
    )
}

function RealEye() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#CECECE" className="w-6 h-6">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
        </svg>
    )
}

function EyeBlock() {
    return (
        <ol className="relative mt-5 border-gray-300 dark:border-gray-600">
            <div className='  ml-6 flex justify-end '>
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6  rounded-full   ">
                    <RealEye />
                </span>
                <div className='flex gap-3 items-center '>
                    <div className='flex gap-2 items-center justify-between   w-full'>
                        <div className='flex gap-3 items-center' >
                            <time className="text-sm font-normal  text-gray-500 dark:text-gray-400">5:21:25</time>
                            <div className='mr-4 '>
                                <div className='  bg-[#53D0A4] w-3 h-3 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ol>
    )
}