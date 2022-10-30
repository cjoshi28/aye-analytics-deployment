import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

export default function InputForm({ login }) {

  const [verify, setVerify] = useState(false)

  function check() {
    setVerify(true)
  }

  const email = useRef();
  const password = useRef();
  const emailError = useRef()
  const passwordError = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    if (email.current.value === "" && password.current.value === "") {
      email.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 border border-red-500 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      emailError.current.innerHTML = "Email is Required"
    } else if (!new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email.current.value)) {
      email.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 border border-red-500 text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
      emailError.current.innerHTML = "Email is not Valid"
    } else {
      email.current.className = 'backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12'
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

    // TESTING HARSHIT
    if (regex.test(email.current.value) && password.current.value !== "") {
      login(email.current.value, password.current.value)
      email.current.innerHTML = ""
      password.current.innerHTML = ""
    }
    // TESTING HARSHIT
  }

  return (
    <div className='text-center'>
      <form action="" onSubmit={submitHandler}>
        <div>
          <input className='backdrop-blur font-[Segoe-UI] bg-white/10 mt-4 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12' placeholder='Email' type="text" ref={email} id="" />
        </div>
        <div className=' text-left ml-8 lg:ml-0 sm:ml-16 text-red-500 font-[Segoe-UI] md:ml-5 ' ref={emailError}></div>
        <div>
          <input className='backdrop-blur bg-white/10 font-[Segoe-UI]  mt-4  focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-md  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12' placeholder='Password' type="password" ref={password} id="" />
          <div className='text-left text-red-500 ml-8 sm:ml-16 lg:ml-0 font-[Segoe-UI] md:ml-5' ref={passwordError}></div>
        </div>
        <div className='md:flex md:justify-between sm:flex sm:justify-between lg:flex lg:justify-between px-14 md:px-6 mt-4'>
          <div className="md:flex md:items-center">
            <input onChange={check} type="checkbox" className="bg-purple-800  rounded"
            />
            <label className="ml-2 text-sm font-[Segoe-UI] text-voilet-light-3">
              Keep me signed in
            </label>
          </div>
          <div className='' >
            <span className="text-[#7C5BEE] font-[Segoe-UI]">Forgot Password?</span>
          </div>
        </div>
        <div>
          <input type="submit" value="Log In" className="lg:w-full w-7/12 sm:w-9/12 md:w-11/12 font-[Segoe-UI] cursor-pointer h-10 rounded-lg text-xl bg-[#E346D1] text-white mt-6" disabled={!verify} />
        </div>
      </form>
    </div>
  )
}
