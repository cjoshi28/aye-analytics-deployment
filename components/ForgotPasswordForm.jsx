import React from 'react'
import { useRef } from 'react';

export default function ForgotPasswordForm({reset}) {

  const email = useRef();
  const emailError = useRef()

  const inputCss = "backdrop-blur bg-white/10 font-[DM-sans] mt-4 focus:ring-1 ring-voilet-light-5 focus:ring-inset text-white text-base md:text-xl mid-xl:text-xl outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"
  const validCss = "backdrop-blur  bg-white/10 font-[DM-sans] mt-4 ring-inset ring-1 ring-red-500  text-white text-base md:text-xl  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"

  // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

  async function submitHandler(event) {
    event.preventDefault();

    emailError.current.innerHTML = ""
    email.current.className = inputCss

    let isError = false;

    if (email.current.value === "") {
      email.current.className = validCss
      emailError.current.innerHTML = "Please Enter Email"
      isError = true;
    }
    if(isError == false){
      reset(email.current.value)
    }
    
  }
  return (
    <div className='text-center'>
      <form action="" onSubmit={submitHandler}>
        <div>
          <input className='input-css' placeholder='Email' type="text" ref={email} id="" />
        </div>
        <div className=' text-left text-red-500 pl-[40px] sm:pl-[90px] md:pl-[0px]  md:ml-[25px] lg:ml-1  font-[DM-sans]  text-base sm:text-lg' ref={emailError}></div>
        <div>
          <input className='btn-css' type="submit" value='send' />
        </div>
      </form>
    </div>
  )
}
