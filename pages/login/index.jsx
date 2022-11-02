import React from 'react'
import axios from 'axios'
import Logo from '../../components/Logo'
import LoginForm from '../../components/LoginForm'

export default function index() {

  async function loginHandler(email, password) {
    await axios.post("http://localhost:3000/api/user/login", {
      email,
      password
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="min-h-screen bg-cover bg-[url('/images/mobileResponsive.png')] flex flex-col lg:flex-row md:bg-cover md:bg-[url('/images/MicrosoftTeams-image.png')]">
      <div className='md:basis-1/3 flex justify-center lg:basis-1/2 lg:items-center pt-[50px] md:pt-[100px] lg:pt-0'>
        <div className='w-60 sm:w-80 sm:h-64 md:h-34' >
          <Logo />
        </div>
      </div>
      <div className='md:basis-2/3 lg:basis-1/2 py-4 md:py-2 mid-xl:py-12 flex justify-center md:items-center lg:mt-0'>
        <div className='w-full md:w-6/12 lg:w-8/12 h-full flex justify-center flex-col'>
          <h2 className=' text-white flex justify-center m-8 font-[Segoe-UI-Bold] text-xl sm:text-2xl md:text-xl xl:text-3xl  mid-xl:text-3xl'>Log In to Aye Analytics</h2>
          <LoginForm login={loginHandler} />
          <div className='my-5' >
            <fieldset className="border border-b-0 border-r-0 border-l-0  sm:m-6 md:m-6 lg:m-6 border-voilet-light-2">
              <legend className="text-xl text-center px-3 font-[Segoe-UI] text-voilet-light-3">
                Or
              </legend>
            </fieldset>
          </div>
          <div className="sm:flex sm:justify-center px-2  text-center md:flex md:justify-center lg:flex lg:justify-center">
            <span className="text-voilet-light-4 font-[Segoe-UI] text-base sm:text-xl">New to Aye Analytics?</span>
            <span className="text-voilet-light-4 font-[Segoe-UI-Bold] text-base sm:text-xl whitespace-pre"> Create your account
            </span>
          </div>
          <div className="px-4 mt-2">
            <span className="text-center text-voilet-light-4 flex justify-center text-[10px] lg:text-[12px] md:text-[12px] sm:text-[12px] font-[Segoe-UI]">
              This is Protected by Google reCAPTCHA to ensure you're not a bot.
            </span>
            <span className="text-[#7C5BEE] flex justify-center text-sm whitespace-pre text-[13px] font-[Segoe-UI]"> Learn More</span>
          </div>
        </div>
      </div>
    </div>
  )
}
