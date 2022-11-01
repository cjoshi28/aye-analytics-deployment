import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

export default function RegisterForm({ signIn }) {

  const [verify, setVerify] = useState(false)

  function check() {
    setVerify(true)
  }

  const email = useRef();
  const password = useRef();
  const name = useRef();
  const cpassword = useRef();
  const emailError = useRef();
  const passwordError = useRef();
  const nameError = useRef();
  const cpasswordError = useRef();

  const inputCss = "backdrop-blur bg-white/10 font-[Segoe-UI] mt-4 focus:ring-1 ring-[#E346D1] focus:ring-inset text-white text-base md:text-xl mid-xl:text-xl outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"
  const validCss = "backdrop-blur  bg-white/10 font-[Segoe-UI] mt-4 ring-inset ring-1 ring-red-500  text-white text-base md:text-xl  outline-none rounded p-2 w-10/12 lg:w-full sm:w-9/12 md:w-11/12"

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  const passRegex = /^([a-zA-Z0-9@*#]{8,15})$/i;
  const nameRegex = /^[A-Za-z][A-Za-z0-9_]{3,29}$/i;
  async function submitHandler(event) {
    event.preventDefault();
    if ( name.current.value !== "" && email.current.value !== "" && password.current.value !== "" && cpassword.current.value !== "" ) {
      name.current.className = inputCss
      nameError.current.innerHTML = ""
      email.current.className = inputCss
      emailError.current.innerHTML = ""
      password.current.className = inputCss
      passwordError.current.innerHTML = ""
      cpassword.current.className = inputCss
      cpassword.current.innerHTML = ""
      if(!passRegex.test(password.current.value) && password.current.value === cpassword.current.value){
        cpassword.current.className = validCss
        cpasswordError.current.innerHTML = ""
      }
      if ( passRegex.test(password.current.value) && emailRegex.test(email.current.value) && password.current.value === cpassword.current.value ) {
        signIn( name.current.value , email.current.value , password.current.value )
        name.current.innerHTML = ""
        email.current.innerHTML = ""
        password.current.innerHTML = ""
        cpassword.current.innerHTML = ""
      } else {
        
        if (!nameRegex.test(name.current.value)) {
          name.current.className = validCss
          nameError.current.innerHTML = "More then 3 charaters"
        }

        if (!emailRegex.test(email.current.value)) {
          email.current.className = validCss
          emailError.current.innerHTML = "Email is not Valid"
        }

        if (!passRegex.test(password.current.value)) {
          password.current.className = validCss
          passwordError.current.innerHTML = "Must include [{A,Z},{a,z},{0,9},{!@#$%^&}]"
        }

        if (password.current.value !== cpassword.current.value) {
          cpassword.current.className = validCss
          cpasswordError.current.innerHTML = "Password doesn't match"
        }

      }
    }else if(name.current.value === "" || email.current.value === "" || password.current.value === "" || cpassword.current.value === ""){
      
      if(name.current.value === ""){
        name.current.className = validCss
        nameError.current.innerHTML = "Name is Required"
      }else if(!nameRegex.test(name.current.value)){
        name.current.className = validCss
        nameError.current.innerHTML = "More then 3 charaters"
      }else{
        name.current.className = inputCss
        nameError.current.innerHTML = ""
      }

      if(email.current.value === ""){
        email.current.className = validCss
        emailError.current.innerHTML = "Email is Required"
      }else if(!emailRegex.test(email.current.value)){
        email.current.className = validCss
        emailError.current.innerHTML = "Email is not Valid"
      }else{
        email.current.className = inputCss
        emailError.current.innerHTML = ""
      }

      if( password.current.value === "" || cpassword.current.value === "" ){
        if(password.current.value === ""){
          password.current.className = validCss
          passwordError.current.innerHTML = "Password is Required"
        }else if(!passRegex.test(password.current.value)){
          password.current.className = validCss
          passwordError.current.innerHTML = "Must include [{A,Z},{a,z},{0,9},{!@#$%^&}]"
        }else if(password.current.value !== cpassword.current.value){
          cpassword.current.className = validCss
          cpasswordError.current.innerHTML = "Password doesn't match"
        }else{
          password.current.className = inputCss
          passwordError.current.innerHTML = ""
        }

        if(cpassword.current.value === ""){
          cpassword.current.className = validCss
          cpasswordError.current.innerHTML = "This cannot be empty"
        }else if(password.current.value !== cpassword.current.value){
          cpassword.current.className = validCss
          cpasswordError.current.innerHTML = "Password doesn't match"
        }else{
          cpassword.current.className = inputCss
          cpassword.current.innerHTML = ""
        }
      }else{
        if(!passRegex.test(password.current.value)){
          password.current.className = validCss
          passwordError.current.innerHTML = "Must include [{A,Z},{a,z},{0,9},{!@#$%^&}]"
        }else{
          password.current.className = inputCss
          passwordError.current.innerHTML = ""
        }

        if(password.current.value !== cpassword.current.value){
          cpassword.current.className = validCss
          cpasswordError.current.innerHTML = "Password doesn't match"
        }else{
          cpassword.current.className = inputCss
          cpasswordError.current.innerHTML = ""
        }
      }
    }
  }
  return (
    <div className='text-center '>
      <form action="" onSubmit={submitHandler}>
        <div>
          <input className='input-css' placeholder='Full Name' type="text" ref={name} id="" />
        </div>
        <div className=' text-left ml-8 lg:ml-0 sm:ml-16 text-red-500 text-base sm:text-xl font-[Segoe-UI] md:ml-5 ' ref={nameError}></div>
        <div>
          <input className='input-css' placeholder='Email' type="text" ref={email} id="" />
          <div className='text-left text-red-500 ml-8 sm:ml-16 lg:ml-0 font-[Segoe-UI] md:ml-5 text-base sm:text-xl' ref={emailError}></div>
        </div>
        <div>
          <input className='input-css' placeholder='Password' type="password" ref={password} id="" />
          <div className='text-left text-red-500 ml-8 sm:ml-16 lg:ml-0 font-[Segoe-UI] md:ml-5 text-base sm:text-xl' ref={passwordError}></div>
        </div>
        <div>
          <input className='input-css' placeholder='Confirm-Password' type="password" ref={cpassword} id="" />
          <div className='text-left text-red-500 ml-8 sm:ml-16 lg:ml-0 font-[Segoe-UI] md:ml-5 text-base sm:text-xl' ref={cpasswordError}></div>
        </div>
        <div className='md:flex md:justify-between sm:flex sm:justify-between lg:flex lg:justify-between px-14 md:px-6 xl:px-2 mt-4'>
          <div className="md:flex md:items-center">
            <input onChange={check} type="checkbox" className="mid-xl:w-4 mid-xl:h-4 accent-[#E346D1] rounded"
            />
            <label className="ml-2 text-sm mid-xl:text-base font-[Segoe-UI] text-voilet-light-3">
              By creating an account, I agree to Aye Analytics <br />
            </label>
            <span className="text-voilet-light-4 font-[Segoe-UI-Bold] text-base sm:text-base whitespace-pre"> Terms of Service
            </span>
          </div>

        </div>
        <div>
          <input type="submit" value="Sign Up" className="btn-css" disabled={!verify} />
        </div>
      </form>
    </div>
  )
}
