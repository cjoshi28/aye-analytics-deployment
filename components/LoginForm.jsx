import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm({ login }) {

  const [verify, setVerify] = useState(false)

  function check() {
    setVerify(true)
  }

  const email = useRef();
  const password = useRef();
  const emailError = useRef()
  const passwordError = useRef();
  const inputCss = "backdrop-blur bg-white/10 font-[DM-sans] mt-4 focus:ring-1 ring-voilet-light-5 focus:ring-inset text-white text-base md:text-xl mid-xl:text-xl outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"
  const validCss = "backdrop-blur  bg-white/10 font-[DM-sans] mt-4 ring-inset ring-1 ring-red-500  text-white text-base md:text-xl  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  const passRegex = /^([a-zA-Z0-9@*#]{8,15})$/i;

  async function submitHandler(event) {
    event.preventDefault();

    if (email.current.value !== "" && password.current.value !== "") {
      
      email.current.className = inputCss
      password.current.className = inputCss

      emailError.current.innerHTML = ""
      passwordError.current.innerHTML = ""

      if (passRegex.test(password.current.value) && emailRegex.test(email.current.value)) {
        login(email.current.value, password.current.value)
        email.current.innerHTML = ""
        password.current.innerHTML = ""
      } else {
        if (!passRegex.test(password.current.value)) {
          password.current.className = validCss
          passwordError.current.innerHTML = "Must include [{A,Z},{a,z},{0,9},{!@#$%^&}]"
        }
        if (!emailRegex.test(email.current.value)) {
          email.current.className = validCss
          emailError.current.innerHTML = "Email is not Valid"
        }
      }
    } else {
      if (email.current.value === "") {
        email.current.className = validCss
        emailError.current.innerHTML = "Email is Required"
        if (password.current.value === "") {
          password.current.className = validCss
          passwordError.current.innerHTML = "Password is Required"
        } else if (!passRegex.test(password.current.value)) {
          password.current.className = validCss
          passwordError.current.innerHTML = "Must include [{A,Z},{a,z},{0,9},{!@#$%^&}]"
        } else {
          password.current.className = inputCss
          passwordError.current.innerHTML = ""
        }
      } else if (email.current.value !== "") {
        if (!emailRegex.test(email.current.value)) {
          email.current.className = validCss
          emailError.current.innerHTML = "Email is not Valid"
        } else {
          email.current.className = inputCss
          emailError.current.innerHTML = ""
        }
        if (password.current.value === "") {
          password.current.className = validCss
          passwordError.current.innerHTML = "Password is Required"
        } else if (!passRegex.test(password.current.value)) {
          password.current.className = validCss
          passwordError.current.innerHTML = "Must include [{A,Z},{a,z},{0,9},{!@#$%^&}]"
        } else {
          password.current.className = inputCss
          passwordError.current.innerHTML = ""
        }
      }
    }
  }

  return (
    <div className='text-center'>
      <form action="" onSubmit={submitHandler}>
        <div>
          <input className='input-css' placeholder='Email' type="text" ref={email} id="" />
        </div>
        <div className='text-left ml-9 sm:ml-[90px] md:ml-[25px] lg:ml-0 text-red-500 text-base sm:text-xl lg:text-lg xl:text-xl font-[DM-sans] ' ref={emailError}></div>
        <div>
          <input className='input-css' placeholder='Password' type="password" ref={password} id="" />
          <div className='text-left text-red-500 ml-9 sm:ml-[90px] md:ml-[25px] lg:ml-0  font-[DM-sans]  text-base sm:text-xl lg:text-lg xl:text-xl' ref={passwordError}></div>
        </div>
        <div className='md:flex md:justify-between sm:flex sm:justify-between lg:flex lg:justify-between px-14 sm:px-24 md:px-4 xl:px-2 mt-4'>
          <div className="md:flex md:items-center">
            <input onChange={check} type="checkbox" className="mid-xl:w-4 mid-xl:h-4 accent-voilet-light-5 border-none rounded"
            />
            <label className="ml-2 text-sm mid-xl:text-base font-[DM-sans] text-voilet-light-3">
              Keep me signed in
            </label>
          </div>
          <div>
            <Link href="https://www.google.com" className="text-voilet-light-6 hover:text-voilet-light-7 font-[DM-sans]">Forgot Password?</Link>
          </div>
        </div>
        <div>
          <input type="submit" value="Log In" className="btn-css" disabled={!verify} />
        </div>
      </form>
    </div>
  )
}
