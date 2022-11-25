import React, { useState } from 'react'
import axios from 'axios'
import Logo from '../../components/Logo'
import LoginForm from '../../components/LoginForm'
import Link from 'next/link'
import { FullScreenLoader } from '../../components/common/FullscreenLoader'
import { path } from '../../routes/path'
import { ErrorModal } from '../../helper/helper'
import { useContext } from 'react'
import { useRouter } from 'next/router';
import { AuthContext } from '../../provider/AuthProvider'


export default function Index() {

  const router = useRouter();
  const { status } = useContext(AuthContext)
  const [isLoader, setIsLoader] = useState(false)

  async function loginHandler(email, password) {
    setIsLoader(true)
    await axios.post(path.login, {
      email,
      password
    }).then((response) => {
      setIsLoader(false)
      if (response.data.success == true) {
        status.login(response.data.name, response.data.token)
        router.push('/dashboard')
      } else {
        ErrorModal("Something went wrong", response.data.message,)
      }
    }).catch((error) => {
      // console.log(error)
      setIsLoader(false)
      ErrorModal(error?.response?.data?.message || error?.message || "Please contact site Admin", "Something went wrong, please check your credentials",)
    })
  }

  return (
    <>
      {isLoader ? <FullScreenLoader /> : " "}
      <div className="min-h-screen bg-cover bg-[url('/images/mobileResponsive.png')] flex flex-col lg:flex-row md:bg-cover md:bg-[url('/images/MicrosoftTeams-image.png')]">
        <div className='md:basis-1/3 flex justify-center lg:basis-1/2 lg:items-center pt-[50px] md:pt-[100px] lg:pt-0'>
          <div className='w-60 sm:w-80 sm:h-64 md:h-34' >
            <Logo />
          </div>
        </div>
        <div className='md:basis-2/3 lg:basis-1/2 py-4 md:py-2 mid-xl:py-12 flex justify-center md:items-center lg:mt-0'>
          <div className='w-full md:w-6/12 lg:w-8/12 h-full flex justify-center flex-col'>
            <h2 className='text-white flex justify-center m-8 heading-forms'>Log In to Aye Analytics</h2>
            <LoginForm login={loginHandler} />
            <div className='my-5' >
              <fieldset className="border border-b-0 border-r-0 border-l-0  sm:m-6 md:m-6 lg:m-6 border-voilet-light-2">
                <legend className="text-xl text-center px-3 font-[DM-sans] text-voilet-light-3">
                  Or
                </legend>
              </fieldset>
            </div>
            <div className="sm:flex sm:justify-center px-2 text-center md:flex md:justify-center lg:flex lg:justify-center">
              <span className="text-voilet-light-4 font-[DM-sans] text-base sm:text-xl md:text-base lg:text-base xl:text-xl">New to Aye Analytics?</span>
              <Link href="/register" className="text-voilet-light-4 hover:text-voilet-light-2 font-[DM-sans] text-base sm:text-xl md:text-base  lg:text-base xl:text-xl whitespace-pre font-bold"> Create your account
              </Link>
            </div>
            <div className="px-4 mt-2">
              <span className="text-center text-voilet-light-4 flex justify-center text-[10px] lg:text-[13px] md:text-[12px] sm:text-[12px] font-[DM-sans]">
                This is Protected by Google reCAPTCHA to ensure you're not a bot.
              </span>
              <Link passHref href=" " className="text-voilet-light-6 flex justify-center text-sm whitespace-pre text-[15px] mid-xl:text-[17px] mt-1 mid-xl:mt-2 font-[DM-sans]"> Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
