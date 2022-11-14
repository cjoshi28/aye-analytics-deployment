import React from 'react'

export default function ReferrerBox({ link, value }) {
  return (
    <div className='bg-voilet-light-6 dark:bg-purple-color rounded-xl text-white text-sm flex flex-col justify-between p-4 py-8 w-full h-full min-h-[150px] text-center'>
      <div className='text-[16px] font-[DM-sans] break-words'>
        {link}
      </div>
      <div className='font-bold text-base md:text-2xl md:mt-10 font-[DM-sans]'>
        {value}
      </div>
    </div>
  )
}
