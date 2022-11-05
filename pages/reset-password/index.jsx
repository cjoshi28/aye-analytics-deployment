import React from 'react'
import Logo from '../../components/Logo'
import ResetPasswordForm from '../../components/ResetPasswordForm'

export default function index() {
  return (
    <div className="min-h-screen bg-cover md:bg-cover flex flex-col lg:flex-row bg-[url('/images/mobileResponsive.png')] md:bg-[url('/images/MicrosoftTeams-image.png')]">
      <div className=' basis-1/3 lg:basis-1/2 flex  justify-center lg:items-center pt-[50px] md:pt-[100px] lg:pt-0'>
        <div className='w-60 sm:w-80 sm:h-64 md:h-34'>
          <Logo />
        </div>
      </div>
      <div className=' md:basis-2/3 lg:basis-1/2 py-4 md:py-2 mid-xl:py-12 flex justify-center md:items-center lg:mt-0'>
        <div className=' w-full h-full md:w-6/12 lg:w-8/12  flex flex-col justify-center'>
          <h2 className=' text-white flex justify-center m-8 heading-forms '>Reset Your Password </h2>
          <ResetPasswordForm />
        </div>
      </div>
    </div>

  )
}
