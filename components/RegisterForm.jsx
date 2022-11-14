import Link from 'next/link';
import React from 'react'
import { useRef } from 'react';


export default function RegisterForm({ signIn }) {

  const email = useRef();
  const password = useRef();
  const name = useRef();
  const cpassword = useRef();
  const emailError = useRef();
  const passwordError = useRef();
  const nameError = useRef();
  const cpasswordError = useRef();
  const checkBox = useRef();

  const inputCss = "backdrop-blur bg-white/10 font-[DM-sans] mt-4 focus:ring-1 ring-voilet-light-5 focus:ring-inset text-white text-base md:text-xl mid-xl:text-xl outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"
  const validCss = "backdrop-blur  bg-white/10 font-[DM-sans] mt-4 ring-inset ring-1 ring-red-500 text-white text-base md:text-xl  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  const passRegex = /^([a-zA-Z0-9@*#]{8,15})$/i;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]){3,29}$/i;

  async function submitHandler(event) {
    event.preventDefault();

    nameError.current.innerHTML = ""
    emailError.current.innerHTML = ""
    passwordError.current.innerHTML = ""
    cpasswordError.current.innerHTML = ""

    name.current.className = inputCss
    email.current.className = inputCss
    password.current.className = inputCss
    cpassword.current.className = inputCss


    let isError = false;

    if (name.current.value !== "") {
      if (!nameRegex.test(name.current.value)) {
        name.current.className = validCss
        nameError.current.innerHTML = "More than 3 characters"
        isError = true
      }
    } else {
      name.current.className = validCss
      nameError.current.innerHTML = "Please Enter Name"
      isError = true
    }

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


    if (password.current.value !== "") {
      if (!passRegex.test(password.current.value)) {
        password.current.className = validCss
        passwordError.current.innerHTML = "Minimum 8 characters, must include 1 number and 1 special symbol"
        isError = true;
      }
      if (cpassword.current.value !== "") {
        if (password.current.value !== cpassword.current.value) {
          cpassword.current.className = validCss
          cpasswordError.current.innerHTML = "Password doesn't match"
          isError = true
        }
      } else {
        cpassword.current.className = validCss
        cpasswordError.current.innerHTML = "Plese Enter Password Again"
        isError = true;
      }
    } else {
      password.current.className = validCss
      passwordError.current.innerHTML = "Minimum 8 characters, must include 1 number and 1 special symbol"
      isError = true;
    }

    // if (!checkBox.current.checked) {
    //   checkBox.current.className = "mid-xl:w-4 mid-xl:h-4 ring-2 ring-red-500 accent-voilet-light-5 rounded"
    //   isError = true;
    // } else {
    //   checkBox.current.className = "mid-xl:w-4 mid-xl:h-4 accent-voilet-light-5 rounded"
    //   isError = true;
    // }

    if (isError == false) {
      signIn(name.current.value, email.current.value, password.current.value)
    }
  }
  return (
    <div className='text-center '>
      <form action="" onSubmit={submitHandler}>
        <div>
          <input className='input-css' placeholder='Full Name' type="text" ref={name} id="" />
        </div>
        <div className='error-css' ref={nameError}></div>
        <div>
          <input className='input-css' placeholder='Email' type="text" ref={email} id="" />
          <div className='error-css' ref={emailError}></div>
        </div>
        <div>
          <input className='input-css' placeholder='Password' type="password" ref={password} id="" />
          <div className='error-css' ref={passwordError}></div>
        </div>
        <div>
          <input className='input-css' placeholder='Confirm-Password' type="password" ref={cpassword} id="" />
          <div className='error-css' ref={cpasswordError}></div>
        </div>
        <div className='md:flex md:justify-between sm:flex sm:justify-between lg:flex lg:justify-between px-14 md:px-6 xl:px-2 mt-4'>
          <div className="w-full mid-xl:flex mid-xl:items-center">
            <input type="checkbox" ref={checkBox} className="mid-xl:w-4 mid-xl:h-4 accent-voilet-light-5 rounded"
            />
            <label className="ml-2 text-sm lg:text-sm  font-[DM-sans] text-voilet-light-3">
              By creating an account, I agree to Aye Analytics <br />
            </label>
            <Link href="https://www.google.com" className="text-voilet-light-4 hover:text-voilet-light-2 font-[DM-sans] text-base lg:text-sm 2xl:text-base whitespace-pre"> Terms of Service
            </Link>
          </div>

        </div>
        <div>
          <input type="submit" value="Sign Up" className="btn-css" />
        </div>
      </form>
    </div>
  )
}
