import React from 'react'
import { useRef } from 'react';
import Link from 'next/link';

export default function LoginForm({ login }) {


  const email = useRef();
  const password = useRef();
  const emailError = useRef()
  const passwordError = useRef();
  const inputCss = "backdrop-blur bg-white/10 font-[DM-sans] mt-4 focus:ring-1 ring-voilet-light-5 focus:ring-inset text-white text-base md:text-xl mid-xl:text-xl outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"
  const validCss = "backdrop-blur  bg-white/10 font-[DM-sans] mt-4 ring-inset ring-1 ring-red-500  text-white text-base md:text-xl  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

  async function submitHandler(event) {
    event.preventDefault();

    email.current.className = inputCss
    password.current.className = inputCss

    emailError.current.innerHTML = ""
    passwordError.current.innerHTML = ""
    let isError = false;


    if (email.current.value !== "") {
      if (!emailRegex.test(email.current.value)) {
        email.current.className = validCss
        emailError.current.innerHTML = "Email is not Valid"
        isError = true;
      }
    } else {
      email.current.className = validCss
      emailError.current.innerHTML = "Please Enter Email"
      isError = true;
    }
    if (password.current.value == "") {
      password.current.className = validCss
      passwordError.current.innerHTML = "Please Enter password"
      isError = true;
    }


    if (isError == false) {
      login(email.current.value, password.current.value)
    }
  }

  return (
    <div className='text-center'>
      <form action="" onSubmit={submitHandler}>
        <div>
          <input className='input-css' placeholder='Email' type="text" ref={email} id="" />
        </div>
        <div className='error-css' ref={emailError}></div>
        <div>
          <input className='input-css' placeholder='Password' type="password" ref={password} id="" />
          <div className='error-css' ref={passwordError}></div>
        </div>
        <div className='md:flex md:justify-between sm:flex sm:justify-between lg:flex lg:justify-between px-14 sm:px-24 md:px-4 xl:px-2 mt-4'>
          <div className="md:flex md:items-center">
            <input type="checkbox" className="mid-xl:w-4 mid-xl:h-4 accent-voilet-light-5 border-none rounded"
            />
            <label className="ml-2 text-sm mid-xl:text-base font-[DM-sans] text-voilet-light-3">
              Keep me signed in
            </label>
          </div>
          <div>
            <Link href="/forgot-password" className="text-voilet-light-6 hover:text-voilet-light-7 font-[DM-sans]">Forgot Password?</Link>
          </div>
        </div>
        <div>
          <input type="submit" value="Log In" className="btn-css" />
        </div>
      </form>
    </div>
  )
}
