import React from 'react'
import Logo from '../../components/Logo'
import InputForm from '../../components/InputForm'

export default function index() {
  return (
    <div className="h-screen bg-cover bg-[url('/images/mobileResponsive.png')] md:flex md:flex-row md:bg-cover md:bg-[url('/images/MicrosoftTeams-image.png')]">
      <div className='basis-1/2 flex justify-center md:items-center'>
        <div className='w-80 h-64 pt-12 md:w-96 md:h-72 md:pt-9 md:pl-10' >
          <Logo />
        </div>
      </div>
      <div className='basis-1/2 py-14 md:py-0 flex justify-center md:items-center'>
        <div className='w-[500px] h-[720px] md:h-[540px]'>
          <h2 className='text-white flex justify-center m-8 font-bold text-3xl'>Log In to Aye Analytics</h2>
          <InputForm />
          <div>
            <fieldset className="border border-b-0 border-r-0 border-l-0 m-8 border-voilet-light-2">
              <legend className="text-xl  text-center px-3 text-voilet-light-3">
                Or
              </legend>
            </fieldset>
          </div>
          <div className="flex justify-center">
            <span className="text-voilet-light-4">New to Aye Analytics?</span>
            <span className="text-voilet-light-4 font-bold whitespace-pre"> Create your account
            </span>
          </div>
          <div className="flex justify-center mt-4">
            <span className="text-voilet-light-4 text-xs">
              This is Protected by Google reCAPTCHA to ensure you're not a bot.
            </span>
            <span className="text-[#7C5BEE] text-xs whitespace-pre"> Learn More</span>
          </div>
        </div>
      </div>
    </div>
  )
}
