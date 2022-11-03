import React from 'react'

export default function Blogs({ link, value }) {
  return (
    <div className='bg-white rounded-xl text-black m-1 w-full md:w-auto text-sm font-[Segoe-UI] flex flex-col p-4'>
      <div className='w-[70%] text-sm font-[Dm-sans]'>
        {link}
      </div>
      <div className='font-bold text-base md:text-2xl md:mt-10 font-[Dm-sans]'>
        {value}
      </div>
    </div>
  )
}
