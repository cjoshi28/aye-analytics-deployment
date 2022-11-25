import React from 'react'
import EmailForm from '../../components/EmailForm'
import Logo from '../../components/Logo'

export default function Index() {
  return (
    <div className="min-h-screen bg-cover md:bg-cover flex flex-col lg:flex-row bg-[url('/images/mobileResponsive.png')] md:bg-[url('/images/MicrosoftTeams-image.png')]">
      <div className='md:basis-1/3 lg:basis-1/2 flex justify-center lg:items-center pt-[50px] md:pt-[100px] lg:pt-0'>
        <div className='w-60 sm:w-80 sm:h-64 md:h-34'>
          <Logo />
        </div>
      </div>
      <div className='md:basis-2/3 lg:basis-1/2 py-4 md:py-2 mid-xl:py-12 flex justify-center lg:items-center lg:mt-0'>
        <div className='w-full md:w-6/12 lg:w-8/12 h-full flex flex-col justify-center '>
          <h2 className='text-white flex justify-center mt-8 heading-forms'>Email Verification</h2>
          <h2 className='flex justify-center m-6 font-[DM-sans] text-sm sm:text-base lg:text-sm xl:text-lg text-gray-400'>6-digit OTP  is sent to &apos;awadhut@gmail.com&apos;</h2>
          <EmailForm />
        </div>
      </div>
    </div>
  )
}
