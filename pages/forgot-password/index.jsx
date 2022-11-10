import axios from 'axios';
import { useRouter } from 'next/router'
import React from 'react'
import ForgotPasswordForm from '../../components/ForgotPasswordForm'
import Logo from '../../components/Logo'
import { path } from '../../routes/path';
import { ErrorModal } from '../../helper/helper';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { SuccessModal } from '../../helper/helper';
export default function index() {

  const router = useRouter();
  async function forgotPasswordHandler(email) {
    await axios.post(path.forgotpassword, {
      email
    }).then((response) => {
      console.log(response)
      if (response.data.success == true) {
        SuccessModal("Successfully send", response.data.message)
      } else {
        ErrorModal("Your forgot-password attempt was not successful. Please try again.", response.data.message)
      }
    }).catch((error) => {
      console.log(error)
      ErrorModal("sorry, we coudldn't find and email address with that username", error?.response?.data?.message || error?.message || "Please contact site Admin")
    })
  }
  return (
    <div className="min-h-screen bg-cover md:bg-cover flex flex-col lg:flex-row bg-[url('/images/mobileResponsive.png')] md:bg-[url('/images/MicrosoftTeams-image.png')]">
      <div className='md:basis-1/3 lg:basis-1/2 flex justify-center lg:items-center pt-[50px] md:pt-[100px] lg:pt-0'>
        <div className='w-60 sm:w-80 sm:h-64 md:h-34'>
          <Logo />
        </div>
      </div>
      <div className='md:basis-2/3 lg:basis-1/2 py-4 md:py-2 mid-xl:py-12 flex justify-center lg:items-center lg:mt-0'>
        <div className='w-full md:w-6/12 lg:w-8/12 h-full flex flex-col justify-center'>
          <h2 className='text-white flex justify-center mt-8 heading-forms'>Forgot your Password</h2>
          <h2 className='flex justify-center m-6 font-[DM-sans] text-sm sm:text-base lg:text-sm xl:text-lg text-gray-400'>Reset password link will be sent to your email</h2>
          <ForgotPasswordForm reset={forgotPasswordHandler} />
        </div>
      </div>
    </div>
  )
}
