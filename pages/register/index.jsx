import React, { useState } from 'react'
import axios from 'axios'
import Logo from '../../components/Logo'
import RegisterForm from '../../components/RegisterForm'
import { useRouter } from 'next/router'
import { path } from '../../routes/path'
import { ErrorModal } from '../../helper/helper'
import { FullScreenLoader } from '../../components/common/FullscreenLoader'
import Swal from 'sweetalert2'
export default function index() {

  const [isLoader, SetIsLoader] = useState(false)
  const router = useRouter()

  async function signInHandler(name, email, password) {
    SetIsLoader(true)
    await axios.post(path.register, {
      name,
      email,
      password
    }).then((response) => {
      SetIsLoader(false)
      // console.log(response)
      if (response.data.success == true) {
        SuccessModalWithRedirect(`Welcome ${name}, to Aye Analytics`, response.data.message, "/login")
      } else {
        ErrorModal("Something went wrong", response.data.message)
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
      <div className="min-h-screen bg-cover bg-[url('/images/mobileResponsive.png')] flex flex-col lg:flex-row md:bg-cover md:bg-[url('/images/MicrosoftTeams-image.png')]">
        <div className='md:basis-1/3 flex justify-center lg:basis-1/2 lg:items-center  pt-[50px] md:pt-[100px] lg:pt-0'>
          <div className='w-60 sm:w-80 sm:h-64 md:h-34' >
            <Logo />
          </div>
        </div>

        <div className='md:basis-2/3 lg:basis-1/2 py-4 md:py-2 mid-xl:py-12 flex justify-center md:items-center lg:mt-0'>
          <div className='w-full md:w-6/12 lg:w-8/12 h-full flex justify-center flex-col pb-12 md:pb-12 lg:pb-0 xl:pb-0'>
            <h2 className='text-white flex justify-center m-8 heading-forms'>Create New Account</h2>
            <RegisterForm signIn={signInHandler} />
          </div>
        </div>
      </div>
    </>
  )
}
