import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ForgotPasswordForm from '../../components/ForgotPasswordForm'
import Logo from '../../components/Logo'
import { path } from '../../routes/path';
import { ErrorModal } from '../../helper/helper';
import { FullScreenLoader } from '../../components/common/FullscreenLoader';
import { SuccessModal } from '../../helper/helper';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import Swal from 'sweetalert2';
export default function index() {

  const [email, SetEmail] = useState(null)
  const [isLoader, SetIsLoader] = useState(false)

  const router = useRouter();

  async function forgotPasswordHandler(email) {
    SetIsLoader(true)
    await axios.post(path.forgotpassword, {
      email: email
    }).then((response) => {
      // console.log(response)
      if (response.data.success == true) {
        SetEmail(email)
        SetIsLoader(false)
        SuccessModal("Successfully send", response.data.message,)
      } else {
        ErrorModal("Your forgot-password attempt was not successful. Please try again.", response.data.message)
      }
    }).catch((error) => {
      // console.log(error)
      SetIsLoader(false)
      ErrorModal("sorry, we coudldn't find and email address with that username", error?.response?.data?.message || error?.message || "Please contact site Admin")
    })
  }


  async function resetpasswordHandler(password, OTP) {
    SetIsLoader(true)
    await axios.put(path.resetpassword, {
      email: email,
      password: password,
      userOTP: OTP
    }).then((response) => {
      // console.log(response)
      SetIsLoader(false)
      if (response.data.success == true) {
        SuccessModalWithRedirect("Success", response.data.message, "/login")
      } else {
        ErrorModal("Your forgot-password attempt was not successful. Please try again.", response.data.message)
      }
    }).catch((error) => {
      // console.log(error)
      SetIsLoader(false)
      ErrorModal("Something went wrong", error?.response?.data?.message || error?.message || "Please contact site Admin")
    })
  }

  const SuccessModalWithRedirect = (title, description, pathname) => {
    Swal.fire({
      icon: 'success',
      title: title || "Sucessfull",
      text: description || "",
      confirmButtonText: 'OK',
      iconColor: '#3E0D79',
      confirmButtonColor: '#3E0D79',
      showClass: {
        popup: 'swal2-show',
        backdrop: 'swal2-backdrop-show backdrop-blur-3xl',
        icon: 'swal2-icon-show'
      },
      customClass: {
        confirmButton: "w-40 rounded-lg",
      }
    }).then((result) => {
      if (result.isConfirmed) {
        router.push(pathname)
      }
    })
  }

  return (
    <>
      {isLoader ? <FullScreenLoader /> : ""}
      <div className="min-h-screen bg-cover md:bg-cover flex flex-col lg:flex-row bg-[url('/images/mobileResponsive.png')] md:bg-[url('/images/MicrosoftTeams-image.png')]">
        <div className='md:basis-1/3 lg:basis-1/2 flex justify-center lg:items-center pt-[50px] md:pt-[100px] lg:pt-0'>
          <div className='w-60 sm:w-80 sm:h-64 md:h-34'>
            <Logo />
          </div>
        </div>

        {(email == null)
          ?
          <div className='md:basis-2/3 lg:basis-1/2 py-4 md:py-2 mid-xl:py-12 flex justify-center lg:items-center lg:mt-0'>
            <div className='w-full md:w-6/12 lg:w-8/12 h-full flex flex-col justify-center'>
              <h2 className='text-white flex justify-center mt-8 heading-forms'>Forgot your Password</h2>
              <h2 className='flex justify-center m-6 font-[DM-sans] text-sm sm:text-base lg:text-sm xl:text-lg text-gray-400'>Reset password link will be sent to your email</h2>
              <ForgotPasswordForm forgot={forgotPasswordHandler} />
            </div>
          </div>
          :
          <div className=' md:basis-2/3 lg:basis-1/2 py-4 md:py-2 mid-xl:py-12 flex justify-center md:items-center lg:mt-0'>
            <div className=' w-full h-full md:w-6/12 lg:w-8/12  flex flex-col justify-center'>
              <h2 className=' text-white flex justify-center m-8 heading-forms '>Reset Your Password </h2>
              <ResetPasswordForm reset={resetpasswordHandler} />
            </div>
          </div>}
      </div>
    </>
  )
}
