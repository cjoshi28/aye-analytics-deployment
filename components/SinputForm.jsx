import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

export default function SinputForm({ signIn }) {

  const [verify, setVerify] = useState(false)

  function check() {
    setVerify(true)
  }

  const fname = useRef();
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();
  const cpasswordError = useRef();
  const fnameError = useRef();
  const emailError = useRef();
  const passwordError = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    if (fname.current.value === "") {
      fname.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4   border border-red-500   text-white text-md outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      fnameError.current.innerHTML = "Full Name is Required"
    } else if (!new RegExp(/^[A-Za-z][A-Za-z0-9_]{3,29}$/).test(fname.current.value)) {
      fname.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 border border-red-500 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      fnameError.current.innerHTML = "name should be more than 3 characters"
    } else {
      fname.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4  text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      fnameError.current.innerHTML = ""
    }
    if (email.current.value === "") {
      email.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 border border-red-500 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      emailError.current.innerHTML = "Email is Required"
    } else if (!new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email.current.value)) {
      email.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 border border-red-500 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      emailError.current.innerHTML = "Email is not Valid"
    } else {
      email.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      emailError.current.innerHTML = ""
    }
    if (password.current.value === "") {
      password.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 border border-red-500 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      passwordError.current.innerHTML = "Password is Required"
    } else if (!new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(password.current.value)) {
      password.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 border border-red-500 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      passwordError.current.innerHTML = "Minimum eight characters, at least one letter and one number"
    }
    else {
      password.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      passwordError.current.innerHTML = ""
    }
    if (password.current.value === "") {
      password.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 border border-red-500 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      passwordError.current.innerHTML = "Confirm-Password is Required"
    } else if (password.current.value !== cpassword.current.value) {
      password.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 border border-red-500 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      passwordError.current.innerHTML = "password doesn't match"
    }
    else {
      cpassword.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      cpasswordError.current.innerHTML = ""
    }
    // TEST HARSHIT
    if (new RegExp(/^[A-Za-z][A-Za-z0-9_]{3,29}$/).test(fname.current.value) && new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email.current.value) && password.current.value === cpassword.current.value) {
      signIn(fname.current.value, email.current.value, password.current.value)
      fname.current.innerHTML = ""
      email.current.innerHTML = ""
      password.current.innerHTML = ""
      cpassword.current.innerHTML = ""
    }
    // TEST HARSHIT
  }
  return (
    <div className='text-center'>
      <form action="" onSubmit={submitHandler}>
        <div>
          <input className='backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12' placeholder='Full Name' type="text" ref={fname} id="" />
        </div>
        <div className='text-red-500 mt-2 text-left font-[Segoe-UI] ml-20 md:ml-6 lg:ml-2' ref={fnameError}></div>

        <div>
          <input className='backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12' placeholder='Email' type="text" ref={email} id="" />
        </div>
        <div className='text-red-500 mt-2 text-left font-[Segoe-UI] ml-20 md:ml-6 lg:ml-2' ref={emailError}></div>
        <div>
          <input className='backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12' placeholder='Password' type="password" ref={password} id="" />
        </div>
        <div className='text-red-500 mt-2 text-left font-[Segoe-UI] ml-20 md:ml-6 lg:ml-2' ref={passwordError}></div>

        <div>
          <input className='backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12' placeholder='Confirm Password' type="password" ref={cpassword} id="" />
        </div>
        <div className='text-red-500 mt-2 text-left font-[Segoe-UI] ml-20 md:ml-6 lg:ml-2' ref={cpasswordError}></div>

        <div className='flex justify-between px-14 md:px-6 mt-4'>
          <div className="flex items-center">
            <input onChange={check} type="checkbox" className="bg-purple-800  rounded"
            />
            <span className="text-voilet-light-4 font-[Segoe-UI] text-sm whitespace-pre"> By creating a account, I agree to Aye Analytics</span>
            <span className="text-voilet-light-4 font-[Segoe-UI-Bold] text-sm  whitespace-pre"> Terms of Service
            </span>
          </div>
        </div>
        <div>
          <input type="submit" value="Sing Up" className="lg:w-full sm:w-9/12 md:w-11/12 font-[Segoe-UI] cursor-pointer h-10 rounded-lg text-xl bg-[#E346D1] text-white mt-6" disabled={!verify} />
        </div>
      </form>
    </div>
  )
}
